import { createClient } from 'npm:@supabase/supabase-js@2';

const headers = { 'Content-Type': 'application/json' };
const isWesterly = (degrees: number) => degrees >= 225 && degrees <= 337.5;
const enc = new TextEncoder();
const b64url = (bytes: Uint8Array) => btoa(String.fromCharCode(...bytes)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const fromB64url = (value: string) => Uint8Array.from(atob(value.replace(/-/g, '+').replace(/_/g, '/') + '='.repeat((4 - value.length % 4) % 4)), c => c.charCodeAt(0));
const concat = (...parts: Uint8Array[]) => { const out = new Uint8Array(parts.reduce((n, p) => n + p.length, 0)); let at = 0; for (const part of parts) { out.set(part, at); at += part.length; } return out; };
async function hkdf(salt: Uint8Array, ikm: Uint8Array, info: Uint8Array, length: number) {
  const key = await crypto.subtle.importKey('raw', ikm, 'HKDF', false, ['deriveBits']);
  return new Uint8Array(await crypto.subtle.deriveBits({ name: 'HKDF', hash: 'SHA-256', salt, info }, key, length * 8));
}
async function sendWebPush(subscription: any, payload: string) {
  const clientPublic = fromB64url(subscription.keys.p256dh);
  const auth = fromB64url(subscription.keys.auth);
  const pair = await crypto.subtle.generateKey({ name: 'ECDH', namedCurve: 'P-256' }, true, ['deriveBits']);
  const serverPublic = new Uint8Array(await crypto.subtle.exportKey('raw', pair.publicKey));
  const clientKey = await crypto.subtle.importKey('raw', clientPublic, { name: 'ECDH', namedCurve: 'P-256' }, false, []);
  const shared = new Uint8Array(await crypto.subtle.deriveBits({ name: 'ECDH', public: clientKey }, pair.privateKey, 256));
  const ikm = await hkdf(auth, shared, concat(enc.encode('WebPush: info\0'), clientPublic, serverPublic), 32);
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const cek = await hkdf(salt, ikm, enc.encode('Content-Encoding: aes128gcm\0'), 16);
  const nonce = await hkdf(salt, ikm, enc.encode('Content-Encoding: nonce\0'), 12);
  const aesKey = await crypto.subtle.importKey('raw', cek, 'AES-GCM', false, ['encrypt']);
  const cipher = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv: nonce }, aesKey, concat(enc.encode(payload), new Uint8Array([2]))));
  const record = new Uint8Array(5); new DataView(record.buffer).setUint32(0, 4096); record[4] = serverPublic.length;
  const publicRaw = fromB64url(Deno.env.get('VAPID_PUBLIC_KEY')!); const x = b64url(publicRaw.slice(1, 33)); const y = b64url(publicRaw.slice(33));
  const vapidKey = await crypto.subtle.importKey('jwk', { kty: 'EC', crv: 'P-256', x, y, d: Deno.env.get('VAPID_PRIVATE_KEY')!, ext: true }, { name: 'ECDSA', namedCurve: 'P-256' }, false, ['sign']);
  const endpoint = new URL(subscription.endpoint); const header = b64url(enc.encode(JSON.stringify({ typ: 'JWT', alg: 'ES256' }))); const claims = b64url(enc.encode(JSON.stringify({ aud: endpoint.origin, exp: Math.floor(Date.now() / 1000) + 43200, sub: Deno.env.get('VAPID_SUBJECT') || 'mailto:johannes280@gmail.com' })));
  const unsigned = `${header}.${claims}`; const signature = new Uint8Array(await crypto.subtle.sign({ name: 'ECDSA', hash: 'SHA-256' }, vapidKey, enc.encode(unsigned)));
  return fetch(subscription.endpoint, { method: 'POST', headers: { Authorization: `vapid t=${unsigned}.${b64url(signature)}, k=${Deno.env.get('VAPID_PUBLIC_KEY')}`, TTL: '86400', 'Content-Encoding': 'aes128gcm', 'Content-Type': 'application/octet-stream' }, body: concat(salt, record, serverPublic, cipher) });
}
const formatForecastTime = (value: string) => {
  const [datePart, timePart] = value.split('T');
  const date = new Date(`${datePart}T12:00:00Z`);
  const day = new Intl.DateTimeFormat('da-DK', { weekday: 'long', day: 'numeric', month: 'short', timeZone: 'UTC' }).format(date);
  return `${day} kl. ${timePart.slice(0, 2)}`;
};

export default {
async fetch(request: Request) {
  if (request.headers.get('x-cron-secret') !== Deno.env.get('WIND_ALERT_CRON_SECRET')) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers });
  }

  const supabase = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!);
  const forecastResponse = await fetch('https://api.open-meteo.com/v1/forecast?latitude=55.5358&longitude=12.4269&hourly=wind_speed_10m,wind_direction_10m&wind_speed_unit=ms&timezone=Europe%2FCopenhagen&forecast_days=3');
  if (!forecastResponse.ok) return new Response(JSON.stringify({ error: 'Forecast unavailable' }), { status: 502, headers });
  const forecast = await forecastResponse.json();
  const hours = forecast.hourly.time.map((time: string, index: number) => ({
    time,
    speed: Number(forecast.hourly.wind_speed_10m[index]),
    direction: Number(forecast.hourly.wind_direction_10m[index])
  }));

  const { data: preferences, error } = await supabase.from('wind_alert_preferences').select('*, push_subscriptions(*)').eq('enabled', true);
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers });

  let sent = 0;
  for (const preference of preferences || []) {
    const candidates = hours.filter((hour: any) => {
      const month = Number(hour.time.slice(5, 7));
      const localHour = Number(hour.time.slice(11, 13));
      const summer = month >= 4 && month <= 9;
      const start = summer ? preference.summer_start_hour : preference.winter_start_hour;
      const end = summer ? preference.summer_end_hour : preference.winter_end_hour;
      return localHour >= start && localHour < end && hour.speed >= preference.min_wind_ms && hour.speed <= preference.max_wind_ms && isWesterly(hour.direction);
    });
    const match = candidates.find((hour: any, index: number) => {
      const next = candidates[index + 1];
      return next && new Date(next.time).getTime() - new Date(hour.time).getTime() === 3600000;
    });
    if (!match) continue;
    const notificationKey = `${preference.user_id}:${match.time.slice(0, 10)}`;
    if (preference.last_notified_key === notificationKey) continue;

    const when = formatForecastTime(match.time);
    const payload = JSON.stringify({
      title: 'Mulige windsurf-forhold',
      body: `${when}: ca. ${match.speed.toFixed(1)} m/s fra vest. Vestenvind er fralandsvind – sejl kun med instruktør eller følgebåd.`,
      tag: notificationKey,
      url: '/'
    });
    for (const item of preference.push_subscriptions || []) {
      try {
        const pushResponse = await sendWebPush(item.subscription, payload);
        if (!pushResponse.ok) throw { statusCode: pushResponse.status };
        sent++;
      } catch (pushError: any) {
        if (pushError.statusCode === 404 || pushError.statusCode === 410) await supabase.from('push_subscriptions').delete().eq('id', item.id);
      }
    }
    await supabase.from('wind_alert_preferences').update({ last_notified_key: notificationKey, updated_at: new Date().toISOString() }).eq('user_id', preference.user_id);
  }
  return new Response(JSON.stringify({ checked: preferences?.length || 0, sent }), { headers });
}
};
