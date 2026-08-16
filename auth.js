const authRoot = document.querySelector('#authRoot');
const appShell = document.querySelector('#appShell');
const adminButton = document.querySelector('#adminButton');
const windAlertsButton = document.querySelector('#windAlertsButton');
const logoutButton = document.querySelector('#logoutButton');
const authConfig = window.APP_CONFIG || {};
const authConfigured = Boolean(authConfig.supabaseUrl && authConfig.supabaseAnonKey && window.supabase);
const rememberPreferenceKey = 'ssw-remember-login';
const sessionStorageAdapter = {
  getItem(key) {
    return localStorage.getItem(key) || sessionStorage.getItem(key);
  },
  setItem(key, value) {
    const preference = localStorage.getItem(rememberPreferenceKey);
    const remember = preference === 'true' || (preference === null && localStorage.getItem(key) !== null);
    const preferredStorage = remember ? localStorage : sessionStorage;
    const otherStorage = remember ? sessionStorage : localStorage;
    preferredStorage.setItem(key, value);
    otherStorage.removeItem(key);
  },
  removeItem(key) {
    localStorage.removeItem(key);
    sessionStorage.removeItem(key);
  }
};
const authClient = authConfigured ? window.supabase.createClient(authConfig.supabaseUrl, authConfig.supabaseAnonKey, { auth: { storage: sessionStorageAdapter, persistSession: true } }) : null;
window.authClient = authClient;

function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' }[char]));
}

function formatLastLogin(value) {
  if (!value) return 'Aldrig logget ind';
  return `Sidst logget ind: ${new Intl.DateTimeFormat('da-DK', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(value))}`;
}

function showAuthMessage(message, type = 'error') {
  const box = document.querySelector('#authMessage');
  if (!box) return;
  box.textContent = message;
  box.className = `auth-message ${type}`;
}

function showLogin(mode = 'login') {
  appShell.hidden = true;
  authRoot.hidden = false;
  const registering = mode === 'register';
  const passwordAutocomplete = registering ? 'new-password' : 'current-password';
  const passwordField = (name, label) => `<label>${label}<span class="password-field"><input id="${name}" name="${name}" type="password" autocomplete="${passwordAutocomplete}" minlength="8" required><button type="button" class="password-toggle" data-password-toggle="${name}" aria-label="Vis ${label.toLowerCase()}" aria-pressed="false">Vis</button></span></label>`;
  authRoot.innerHTML = `<section class="auth-card"><img class="auth-logo" src="assets/club-logo.png" alt="Solrød Strand Windsurfing logo"><span class="kicker">Medlemsadgang</span><h1>${registering ? 'Opret bruger' : 'Velkommen tilbage'}</h1><p>${registering ? 'Opret din konto. En administrator skal godkende den, før du får adgang.' : 'Log ind for at åbne klubguiden.'}</p><form id="authForm">${registering ? '<label>Navn<input name="name" autocomplete="name" required></label>' : ''}<label>E-mail<input name="email" type="email" autocomplete="email" required></label>${passwordField('password', 'Adgangskode')}${registering ? passwordField('passwordConfirm', 'Gentag adgangskode') : ''}${registering ? '<small class="password-hint">Mindst 8 tegn. Begge adgangskoder skal være ens.</small>' : ''}${registering ? '' : `<label class="remember-login"><input name="remember" type="checkbox" ${localStorage.getItem(rememberPreferenceKey) === 'true' ? 'checked' : ''}><span class="remember-check" aria-hidden="true"></span><span>Husk mig på denne enhed</span></label>`}<div id="authMessage" class="auth-message" aria-live="polite"></div><button class="auth-submit" type="submit">${registering ? 'Opret bruger' : 'Log ind'}</button></form><button class="auth-switch" id="authSwitch">${registering ? 'Har du allerede en bruger? Log ind' : 'Ny i klubben? Opret bruger'}</button></section>`;
  document.querySelectorAll('[data-password-toggle]').forEach(toggle => toggle.addEventListener('click', () => {
    const input = document.querySelector(`#${toggle.dataset.passwordToggle}`);
    const showing = input.type === 'text';
    input.type = showing ? 'password' : 'text';
    toggle.textContent = showing ? 'Vis' : 'Skjul';
    toggle.setAttribute('aria-pressed', String(!showing));
    toggle.setAttribute('aria-label', `${showing ? 'Vis' : 'Skjul'} ${input.closest('label').firstChild.textContent.trim().toLowerCase()}`);
  }));
  if (registering) {
    const password = document.querySelector('#password');
    const passwordConfirm = document.querySelector('#passwordConfirm');
    const validatePasswordMatch = () => passwordConfirm.setCustomValidity(passwordConfirm.value && passwordConfirm.value !== password.value ? 'Adgangskoderne er ikke ens.' : '');
    password.addEventListener('input', validatePasswordMatch);
    passwordConfirm.addEventListener('input', validatePasswordMatch);
  }
  document.querySelector('#authSwitch').addEventListener('click', () => showLogin(registering ? 'login' : 'register'));
  document.querySelector('#authForm').addEventListener('submit', async event => {
    event.preventDefault();
    const button = event.currentTarget.querySelector('.auth-submit');
    const data = new FormData(event.currentTarget);
    if (registering && data.get('password') !== data.get('passwordConfirm')) {
      showAuthMessage('Adgangskoderne er ikke ens. Prøv igen.');
      document.querySelector('#passwordConfirm').focus();
      return;
    }
    button.disabled = true;
    button.textContent = 'Et øjeblik…';
    if (registering) {
      const { data: result, error } = await authClient.auth.signUp({ email: data.get('email'), password: data.get('password'), options: { data: { full_name: data.get('name') } } });
      if (error) { showAuthMessage(error.message); button.disabled = false; button.textContent = 'Opret bruger'; return; }
      if (!result.session) { showAuthMessage('Kontoen er oprettet. Tjek din e-mail, og bekræft adressen.', 'success'); button.textContent = 'E-mail sendt'; return; }
      await applySession(result.session);
    } else {
      if (data.get('remember')) localStorage.setItem(rememberPreferenceKey, 'true');
      else localStorage.setItem(rememberPreferenceKey, 'false');
      const { data: result, error } = await authClient.auth.signInWithPassword({ email: data.get('email'), password: data.get('password') });
      if (error) { showAuthMessage('E-mail eller adgangskode er forkert.'); button.disabled = false; button.textContent = 'Log ind'; return; }
      await applySession(result.session);
    }
  });
}

function showAccessGate(status) {
  appShell.hidden = true;
  authRoot.hidden = false;
  const blocked = status === 'blocked';
  authRoot.innerHTML = `<section class="auth-card access-card"><img class="auth-logo" src="assets/club-logo.png" alt=""><span class="kicker">Medlemsadgang</span><h1>${blocked ? 'Adgang blokeret' : 'Afventer godkendelse'}</h1><p>${blocked ? 'Kontakt klubben, hvis du mener, at dette er en fejl.' : 'Din bruger er oprettet. Du får adgang, så snart administratoren har godkendt dig.'}</p><button class="auth-submit" id="gateLogout">Log ud</button></section>`;
  document.querySelector('#gateLogout').addEventListener('click', () => authClient.auth.signOut());
}

function showApp(profile) {
  authRoot.hidden = true;
  appShell.hidden = false;
  adminButton.hidden = !profile.is_admin;
  logoutButton.hidden = false;
  window.currentAccessProfile = profile;
}

async function applySession(session) {
  if (!session?.user) { showLogin(); return; }
  const { data: profile, error } = await authClient.from('member_profiles').select('id, full_name, email, access_status, is_admin').eq('id', session.user.id).single();
  if (error || !profile) { showAccessGate('pending'); return; }
  if (profile.access_status !== 'approved') { showAccessGate(profile.access_status); return; }
  showApp(profile);
}

async function loadAdminPanel() {
  closeSheet();
  window.adminReturnView = currentView.startsWith('lesson:') ? 'course' : currentView;
  authRoot.hidden = true;
  appShell.hidden = false;
  document.body.classList.remove('home-view');
  app.innerHTML = `<section class="page-hero admin-hero"><span class="kicker light">Kontrolpanel</span><h1>Brugere</h1><p>Godkend medlemmer, administrér adgang og vælg flere administratorer.</p></section><section class="section admin-page"><div class="admin-toolbar"><button class="admin-back" id="closeAdmin">← Tilbage til appen</button></div><div id="memberList" class="member-list"><p>Henter brugere…</p></div></section>`;
  document.querySelectorAll('.bottom-nav button').forEach(button => button.classList.remove('active'));
  window.scrollTo({top: 0, behavior: 'smooth'});
  document.querySelector('#closeAdmin').addEventListener('click', () => {
    showApp(window.currentAccessProfile);
    render(window.adminReturnView || 'home');
  });
  await refreshMembers();
}

async function refreshMembers() {
  const list = document.querySelector('#memberList');
  const { data, error } = await authClient.rpc('admin_list_members');
  if (error) { list.innerHTML = '<p>Brugerne kunne ikke hentes.</p>'; return; }
  list.innerHTML = data.map(user => {
    const ownAccount = user.id === window.currentAccessProfile.id;
    const accessButtons = user.is_admin
      ? ''
      : user.access_status === 'approved'
        ? `<button data-access="${user.id}" data-status="blocked">Blokér</button>`
        : `<button data-access="${user.id}" data-status="approved">Godkend</button>`;
    const roleButton = ownAccount ? '' : `<button class="admin-role-button" data-admin-role="${user.id}" data-is-admin="${user.is_admin}">${user.is_admin ? 'Fjern admin' : 'Gør til admin'}</button>`;
    const deleteButton = user.is_admin ? '' : `<button class="delete-member" data-delete="${user.id}">Slet</button>`;
    return `<article class="member-row"><div><strong>${escapeHtml(user.full_name || 'Uden navn')}</strong><span>${escapeHtml(user.email || '')}</span><small class="last-login">${formatLastLogin(user.last_sign_in_at)}</small><small class="status ${user.access_status}">${user.is_admin ? 'Administrator' : user.access_status === 'approved' ? 'Godkendt' : user.access_status === 'blocked' ? 'Blokeret' : 'Afventer'}</small></div><div class="member-actions">${ownAccount ? '<em>Din konto</em>' : `${accessButtons}${roleButton}${deleteButton}`}</div></article>`;
  }).join('');
  list.querySelectorAll('[data-access]').forEach(button => button.addEventListener('click', async () => { button.disabled = true; await authClient.rpc('admin_set_member_access', { target_user_id: button.dataset.access, new_status: button.dataset.status }); await refreshMembers(); }));
  list.querySelectorAll('[data-admin-role]').forEach(button => button.addEventListener('click', async () => {
    const makeAdmin = button.dataset.isAdmin !== 'true';
    const question = makeAdmin ? 'Vil du gøre denne bruger til administrator?' : 'Vil du fjerne administratorrollen fra denne bruger?';
    if (!confirm(question)) return;
    button.disabled = true;
    const { error: roleError } = await authClient.rpc('admin_set_member_admin', { target_user_id: button.dataset.adminRole, new_is_admin: makeAdmin });
    if (roleError) alert(roleError.message);
    await refreshMembers();
  }));
  list.querySelectorAll('[data-delete]').forEach(button => button.addEventListener('click', async () => { if (!confirm('Vil du slette denne bruger permanent?')) return; await authClient.rpc('admin_delete_member', { target_user_id: button.dataset.delete }); await refreshMembers(); }));
}

function hourOptions(selected) {
  return Array.from({ length: 25 }, (_, hour) => `<option value="${hour}" ${Number(selected) === hour ? 'selected' : ''}>${String(hour).padStart(2, '0')}:00</option>`).join('');
}

function urlBase64ToUint8Array(value) {
  const padding = '='.repeat((4 - value.length % 4) % 4);
  const base64 = (value + padding).replace(/-/g, '+').replace(/_/g, '/');
  return Uint8Array.from(atob(base64), character => character.charCodeAt(0));
}

async function savePushSubscription() {
  if (!('serviceWorker' in navigator) || !('PushManager' in window)) throw new Error('Denne browser understøtter ikke vindbeskeder.');
  const permission = await Notification.requestPermission();
  if (permission !== 'granted') throw new Error('Tillad beskeder i browserens indstillinger for at aktivere funktionen.');
  const registration = await navigator.serviceWorker.ready;
  let subscription = await registration.pushManager.getSubscription();
  if (!subscription) subscription = await registration.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: urlBase64ToUint8Array(authConfig.vapidPublicKey) });
  const json = subscription.toJSON();
  const { error } = await authClient.from('push_subscriptions').upsert({
    user_id: window.currentAccessProfile.id,
    endpoint: json.endpoint,
    subscription: json,
    updated_at: new Date().toISOString()
  }, { onConflict: 'endpoint' });
  if (error) throw error;
}

async function loadWindAlertsPanel() {
  closeSheet();
  window.adminReturnView = currentView.startsWith('lesson:') ? 'course' : currentView;
  document.body.classList.remove('home-view');
  const { data } = await authClient.from('wind_alert_preferences').select('*').eq('user_id', window.currentAccessProfile.id).maybeSingle();
  const settings = data || { enabled: false, min_wind_ms: 4, max_wind_ms: 8, winter_start_hour: 8, winter_end_hour: 16, summer_start_hour: 8, summer_end_hour: 20 };
  app.innerHTML = `<section class="page-hero wind-alert-hero"><span class="kicker light">Personlige beskeder</span><h1>Vindbeskeder</h1><p>Få besked, når vejrudsigten viser vestlig vind i dit valgte interval.</p></section>
  <section class="section wind-alert-page"><form id="windAlertForm" class="wind-alert-form">
    <label class="alert-toggle"><input type="checkbox" name="enabled" ${settings.enabled ? 'checked' : ''}><span></span><div><strong>Aktivér vindbeskeder</strong><small>Vejrudsigten kontrolleres automatisk hver 8. time.</small></div></label>
    <div class="wind-settings-block"><span class="kicker">Vindstyrke</span><h2>Dit ønskede interval</h2><div class="wind-field-row"><label>Fra<input type="number" name="min_wind_ms" min="0" max="40" step="0.5" value="${settings.min_wind_ms}" required><small>m/s</small></label><label>Til<input type="number" name="max_wind_ms" min="0" max="40" step="0.5" value="${settings.max_wind_ms}" required><small>m/s</small></label></div></div>
    <div class="wind-settings-block"><span class="kicker">Tidsrum</span><h2>Hvornår må vi varsle?</h2><p>Sommerhalvåret er april–september. Vinterhalvåret er oktober–marts.</p><div class="season-grid"><fieldset><legend>Vinter</legend><label>Fra<select name="winter_start_hour">${hourOptions(settings.winter_start_hour)}</select></label><label>Til<select name="winter_end_hour">${hourOptions(settings.winter_end_hour)}</select></label></fieldset><fieldset><legend>Sommer</legend><label>Fra<select name="summer_start_hour">${hourOptions(settings.summer_start_hour)}</select></label><label>Til<select name="summer_end_hour">${hourOptions(settings.summer_end_hour)}</select></label></fieldset></div></div>
    <div class="offshore-warning"><strong>Vigtigt om vestenvind</strong><p>Ved Solrød er vestlig vind fralandsvind. En besked er ikke en sikkerhedsgodkendelse. Sejl aldrig i fralandsvind uden instruktør eller følgebåd.</p></div>
    <div id="windAlertMessage" class="auth-message"></div><button class="auth-submit" type="submit">Gem indstillinger</button><button class="admin-back" type="button" id="closeWindAlerts">← Tilbage til appen</button>
  </form></section>`;
  document.querySelectorAll('.bottom-nav button').forEach(button => button.classList.remove('active'));
  document.querySelector('#closeWindAlerts').addEventListener('click', () => render(window.adminReturnView || 'home'));
  document.querySelector('#windAlertForm').addEventListener('submit', async event => {
    event.preventDefault();
    const form = event.currentTarget;
    const values = new FormData(form);
    const button = form.querySelector('[type="submit"]');
    const message = document.querySelector('#windAlertMessage');
    const payload = {
      user_id: window.currentAccessProfile.id,
      enabled: values.get('enabled') === 'on',
      min_wind_ms: Number(values.get('min_wind_ms')),
      max_wind_ms: Number(values.get('max_wind_ms')),
      winter_start_hour: Number(values.get('winter_start_hour')),
      winter_end_hour: Number(values.get('winter_end_hour')),
      summer_start_hour: Number(values.get('summer_start_hour')),
      summer_end_hour: Number(values.get('summer_end_hour')),
      updated_at: new Date().toISOString()
    };
    if (payload.min_wind_ms > payload.max_wind_ms || payload.winter_start_hour >= payload.winter_end_hour || payload.summer_start_hour >= payload.summer_end_hour) {
      message.textContent = 'Kontrollér intervallerne: fra-værdien skal være lavere end til-værdien.';
      message.className = 'auth-message error';
      return;
    }
    button.disabled = true;
    button.textContent = 'Gemmer…';
    try {
      if (payload.enabled) await savePushSubscription();
      const { error } = await authClient.from('wind_alert_preferences').upsert(payload, { onConflict: 'user_id' });
      if (error) throw error;
      message.textContent = payload.enabled ? 'Vindbeskeder er aktiveret på denne enhed.' : 'Indstillingerne er gemt. Vindbeskeder er slået fra.';
      message.className = 'auth-message success';
    } catch (error) {
      message.textContent = error.message || 'Indstillingerne kunne ikke gemmes.';
      message.className = 'auth-message error';
    } finally { button.disabled = false; button.textContent = 'Gem indstillinger'; }
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

adminButton.addEventListener('click', loadAdminPanel);
windAlertsButton.addEventListener('click', loadWindAlertsPanel);
logoutButton.addEventListener('click', async () => { closeSheet(); await authClient.auth.signOut(); });

if (!authConfigured) {
  authRoot.innerHTML = `<section class="auth-card access-card"><img class="auth-logo" src="assets/club-logo.png" alt=""><span class="kicker">Opsætning mangler</span><h1>Cloudadgang er ikke klar</h1><p>Forbind appen til det nye Supabase-projekt for at aktivere brugeroprettelse og login.</p></section>`;
} else {
  authClient.auth.getSession().then(({ data }) => applySession(data.session));
  authClient.auth.onAuthStateChange((_event, session) => setTimeout(() => applySession(session), 0));
}

