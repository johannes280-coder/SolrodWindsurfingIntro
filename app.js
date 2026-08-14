const lessons = [
  {
    id: 'gear', number: '01', title: 'Kend dit udstyr', time: '8 min', level: 'På land',
    intro: 'Lær de fem vigtigste dele at kende, før du rigger til.',
    steps: [
      ['Boardet', 'Et stort begynderboard er stabilt og har ofte en sværd-fin midt under boardet. Næsen peger frem, finnen sidder bagest.'],
      ['Sejlet', 'Sejlets størrelse angives i m². Et mindre sejl er lettere at styre, mens et større sejl giver mere kraft. Begynd altid med instruktørens anbefaling.'],
      ['Mast, bom og mastfod', 'Masten holder sejlet oppe. Bommen er dit håndtag. Mastfoden forbinder riggen med boardet og skal være låst helt fast.'],
      ['Rig udstyret', 'Før masten gennem mastelommen, montér masteforlænger og træk nedhalet. Sæt bommen på i skulderhøjde og stram udhalet uden folder i sejlets bagkant.'],
      ['Lav makkerkontrol', 'Kontrollér mastfod, finne, sværd, liner og redningsvest sammen med en anden. Spørg en instruktør, hvis noget føles løst.']
    ],
    tip: 'Bær altid riggen med masten mod vinden. Så løfter vinden ikke ukontrolleret i sejlet.'
  },
  {
    id: 'wind', number: '02', title: 'Forstå vinden', time: '7 min', level: 'På stranden',
    intro: 'Vindretningen bestemmer, hvor du kan sejle – og om forholdene er sikre.',
    steps: [
      ['Find vindretningen', 'Se på flag, bølger og græs. Stil dig med ansigtet mod vinden: den kommer nu direkte imod dig.'],
      ['Kend vindøjet', 'Du kan ikke sejle direkte mod vinden. Området cirka 45° på hver side af vindretningen kaldes vindøjet.'],
      ['Start på tværs', 'Som begynder er det lettest at sejle på tværs af vinden. Så kan du sejle ud og tilbage til omtrent samme sted.'],
      ['Undgå fralandsvind', 'Fralandsvind blæser dig væk fra stranden. Gå ikke ud i fralandsvind som begynder – heller ikke hvis vandet ser roligt ud.']
    ],
    tip: 'Tegn en pil i sandet, der viser vindretningen. Brug den som reference, mens du gør udstyret klar.'
  },
  {
    id: 'balance', number: '03', title: 'Op på boardet', time: '10 min', level: 'Lavt vand',
    intro: 'Find balancen og få sejlet sikkert op af vandet.',
    steps: [
      ['Placér udstyret', 'Læg boardet på tværs af vinden med sejlet i læ side. Masten skal pege omtrent 90° væk fra boardet.'],
      ['Stig op', 'Gå op fra vindsiden. Placér fødderne på hver side af mastfoden, omtrent i skulderbredde, og hold knæene bløde.'],
      ['Tag optrækslinen', 'Hold ryggen lang, bøj benene og brug kropsvægten. Træk langsomt sejlet op – ikke med et hurtigt ryk.'],
      ['Lad sejlet dryppe af', 'Hold masten lodret og vent et øjeblik, mens vandet løber ud. Boardet finder ro, når riggen er neutral.'],
      ['Find grundstillingen', 'Forreste hånd tager bommen tæt ved masten. Bagerste hånd følger efter. Kig frem, hold armene let bøjede og vægten midt over boardet.']
    ],
    tip: 'Kig mod horisonten. Når du kigger ned på fødderne, følger overkroppen med, og balancen bliver vanskeligere.'
  },
  {
    id: 'sail', number: '04', title: 'Sejl frem og stop', time: '12 min', level: 'På vandet',
    intro: 'Brug sejlets vinkel som speeder – roligt og gradvist.',
    steps: [
      ['Åbn sejlet', 'Hold mastarmen næsten strakt og lad sejlets bagkant pege væk fra dig. Sejlet er nu uden meget kraft.'],
      ['Fang vinden', 'Træk langsomt ind med bagerste hånd. Når sejlet fyldes, læner du kroppen en smule væk fra riggen.'],
      ['Sejl afslappet', 'Hold skuldrene nede, hofterne ind og knæene bløde. Lad kropsvægten arbejde, så armene ikke bliver trætte.'],
      ['Styr med riggen', 'Flyt riggen lidt frem for at dreje væk fra vinden. Flyt den lidt bagud for at dreje op mod vinden. Små bevægelser er nok.'],
      ['Stop', 'Slip gradvist med bagerste hånd, så sejlet åbner og mister kraft. Hold stadig fast med forreste hånd og bliv midt over boardet.']
    ],
    tip: 'Hvis du får for meget fart, skal du åbne sejlet – ikke hoppe af boardet.'
  },
  {
    id: 'turn', number: '05', title: 'Lav din første vending', time: '12 min', level: 'På vandet',
    intro: 'En stagvending lader dig skifte retning med boardets næse gennem vinden.',
    steps: [
      ['Drej op mod vinden', 'Flyt riggen roligt mod boardets bagende. Boardets næse begynder at dreje mod vinden.'],
      ['Gå rundt om masten', 'Når næsen peger ind i vinden, sæt den forreste fod foran masten og tag små skridt rundt om mastfoden.'],
      ['Hold riggen neutral', 'Hold i masten eller helt forrest på bommen. Sejlet skal være åbent, mens du skifter side.'],
      ['Tag den nye side', 'Placér fødderne på hver side af mastfoden. Tag først bommen med den nye forreste hånd og derefter den bagerste.'],
      ['Sejl væk', 'Vip riggen en smule frem, træk forsigtigt ind med bagerste hånd og kig i den nye sejlretning.']
    ],
    tip: 'Vendingen må gerne være langsom. Små skridt og et neutralt sejl giver mest balance.'
  },
  {
    id: 'fall', number: '06', title: 'Fald og kom sikkert op', time: '8 min', level: 'Sikkerhed',
    intro: 'Alle falder. Det vigtige er at bevare roen og blive ved udstyret.',
    steps: [
      ['Slip kontrolleret', 'Hold armene foran ansigtet, hvis du falder mod sejlet. Undgå at lande på mast eller bom.'],
      ['Find boardet', 'Kom op til overfladen, orientér dig og få fat i boardet. Boardet er dit største og bedste flydemiddel.'],
      ['Bliv ved udstyret', 'Forlad aldrig boardet for at svømme mod land. Et board er meget lettere at se fra stranden og driver langsommere end dig.'],
      ['Gør klar igen', 'Svøm riggen til læ side, placér boardet på tværs af vinden, kravl op og brug optrækslinen igen.'],
      ['Bed om hjælp', 'Vink med begge arme over hovedet, hvis du har brug for hjælp. Brug klubbens aftalte nødsignal og følg instruktørens anvisning.']
    ],
    tip: 'Er du træt, så læg sejlet i vandet, kravl op på boardet og hvil. Du behøver ikke skynde dig.'
  }
];


const windsurferChecklist = [
  { id: 'samle-rig', group: 'kan', text: 'Samle mast, bom, sejl, mastfod og ophalerline' },
  { id: 'montere-board', group: 'kan', text: 'Montere finne, sværd og mastfod' },
  { id: 'klargoere-vand', group: 'kan', text: 'Løfte board og sejl i vandet og gøre klar til at sejle' },
  { id: 'snorestart', group: 'kan', text: 'Snorestarte og komme i den sikre position' },
  { id: 'statisk-vending', group: 'kan', text: 'Lave en statisk vending af boardet (feje boardet rundt)' },
  { id: 'kropsposition', group: 'kan', text: 'Windsurfe med en god kropsposition' },
  { id: 'sejladskurser', group: 'kan', text: 'Styre boardet på forskellige kurser: bidevind, halvvind og læns' },
  { id: 'vindretning', group: 'kan', text: 'Udpege vindens retning' },
  { id: 'navne', group: 'kan', text: 'Navnene på de andre sejlere og instruktører' },
  { id: 'undgaa-ulykker', group: 'ved', text: 'Hvordan man undgår ulykker' },
  { id: 'noedsignal', group: 'ved', text: 'Hvordan man tiltrækker sig opmærksomhed i en nødsituation' },
  { id: 'mulige-kurser', group: 'ved', text: 'Hvilke kurser man kan windsurfe' },
  { id: 'krydse', group: 'ved', text: 'Hvordan man krydser op mod vinden' },
  { id: 'ikke-planende', group: 'ved', text: 'Hvordan en windsurfer fungerer i ikke-planende forhold' },
  { id: 'soevejsregler', group: 'ved', text: 'Hvordan de grundlæggende søvejsregler er' },
  { id: 'komme-videre', group: 'ved', text: 'Hvordan man kommer videre med windsurfing efter begynderniveauet' },
  { id: 'vindstyrker', group: 'ved', text: 'Hvilke vindstyrker der egner sig godt til windsurfing på begynderniveau' },
  { id: 'klubregler', group: 'ved', text: 'Hvordan klubbens sikkerhedsregler er for begyndere' },
  { id: 'rigstyring', group: 'ved', text: 'Hvordan man forskyder riggen for at dreje i ikke-planende forhold' },
  { id: 'stagvending', group: 'proevet', text: 'Lave en stagvending' },
  { id: 'bomning', group: 'proevet', text: 'Lave en bomning' }
];

const masteryStorageKey = 'windsurfer-1-mestring';
function getMasteredSkills() {
  try { return new Set(JSON.parse(localStorage.getItem(masteryStorageKey) || '[]')); }
  catch (_error) { return new Set(); }
}
function saveMasteredSkills(skills) {
  try { localStorage.setItem(masteryStorageKey, JSON.stringify([...skills])); }
  catch (_error) {}
}
function updateMasteryProgress() {
  const checked = document.querySelectorAll('[data-mastery-skill]:checked').length;
  const count = document.querySelector('#masteryCount');
  const bar = document.querySelector('#masteryProgressBar');
  if (count) count.textContent = `${checked} af ${windsurferChecklist.length} mestret`;
  if (bar) bar.style.setProperty('--mastery-progress', `${checked / windsurferChecklist.length * 100}%`);
}

const windsurfVideos = [
  ['75Fhnr1Pgv8', 'Vælg det rigtige board'],
  ['bS3VtjB9MLo', 'Beachstart og vandstart'],
  ['dVhIQM3yUkk', 'Ikke-planende carve gybe'],
  ['PbyBlfzJ3XU', 'Windsurfing for begyndere'],
  ['VfbATiUNizI', 'Sådan laver du en gybe'],
  ['NsB4eoIiSSA', 'Sådan laver du en stagvending'],
  ['KU98d8JZ_ZE', 'Placering af trapezliner'],
  ['fUP9YQnUMrA', 'Sådan rigger du sejlet'],
  ['ON9Qp5S9qfI', 'Carve gybe: fodskifte og afslutning'],
  ['CSu4ZAV3GVI', 'Bomhøjde, liner og trim'],
  ['WB30KgpTnZ4', 'Planing og fodstropper'],
  ['jHhiaW9Iwc4', 'Ikke-planende gybe']
];

const app = document.querySelector('#app');
let currentView = 'home';
let deferredInstallPrompt = null;

const icon = name => ({wave:'≈', compass:'◇', people:'◌', sail:'◢', shield:'✦', pin:'●'}[name] || '•');

function homeView() {
  return `
    <section class="hero">
      <img class="hero-club-logo" src="assets/club-logo.png" alt="Solrød Strand Windsurfing logo"><div class="hero-wave one"></div><div class="hero-wave two"></div>
      <div class="hero-content"><span class="kicker light">Velkommen til</span><h1>Solrød Strand<br><em>Windsurfing</em></h1><div class="hero-actions"><button class="primary coral" data-view="club">Info omkring klubben <span>→</span></button><button class="primary coral" data-view="course">Lær at windsurfe <span>→</span></button></div></div>
    </section>
    <section class="section weather-section">
      <div class="current-weather" id="currentWeather" aria-live="polite"><div class="current-weather-loading"><span></span><p>Henter det aktuelle vejr ved Solrød Strand…</p></div></div>
      <div class="weather-heading"><div><span class="kicker">Før du tager afsted</span><h2>Hvornår er det gode forhold for begyndere?</h2></div></div>
      <div class="beginner-weather-guide"><div class="wind-range"><strong>4–8</strong><span>m/s</span><small>Vestlig vind</small></div><div><p>En vindstyrke på 4–8 m/s er passende, når du skal lære at windsurfe. Ved Solrød giver vestlig vind fladt vand, men vinden blæser væk fra kysten og er derfor fralandsvind. Østlig vind blæser ind mod stranden og skaber hurtigt store bølger. Bølgeforholdene kan gøre det meget svært at lære at surfe og bør derfor undgås som nybegynder.</p><p class="offshore-warning"><strong>Livsfare:</strong> Sejl aldrig i fralandsvind uden følgebåd – heller ikke selvom vandet ser fladt og roligt ud. Fralandsvind kan hurtigt føre dig væk fra kysten og gøre det umuligt at komme tilbage.</p></div></div>
      <div class="forecast-links-heading"><span class="kicker">Aktuelle prognoser</span><h3>Se vejrudsigterne for Solrød Strand her</h3></div>
      <div class="weather-links">
        <a class="weather-card marine" href="https://app.fcoo.dk/ifm-maps/index.html#domain=denmark&zoom=11&lat=55.5358&lon=12.4269&overlays=Short%20range%20forecasts.wind%252CShort%20range%20forecasts.windspeed%252CShort%20range%20forecasts.winddirection" target="_blank" rel="noreferrer"><img class="weather-preview" src="assets/sejladsudsigt-preview.png" alt="Skærmbillede af Danmarkskortet på Sejladsudsigt"><span class="weather-icon" aria-hidden="true">≈</span><span><small>Vind og vand</small><strong>Sejladsudsigt.dk</strong><em>Marine prognoser for klubbens farvand med vindretning og vindhastighed.</em></span><b>Åbn →</b></a>
        <a class="weather-card dmi" href="https://www.dmi.dk/lokation/show/DK/2613233/Solr%C3%B8d_Strand/" target="_blank" rel="noreferrer"><img class="weather-preview" src="assets/dmi-solrod-preview.png" alt="Skærmbillede af DMI-udsigten for Solrød Strand"><span class="weather-icon" aria-hidden="true">☀</span><span><small>Lokalt vejr</small><strong>DMI · Solrød Strand</strong><em>Temperatur, nedbør, middelvind, vindstød og vandstand.</em></span><b>Åbn →</b></a>
      </div>
    </section>
    <section class="section"><div class="section-heading"><div><span class="kicker">Før du starter</span><h2>Tre ting at huske</h2></div></div>
      <div class="feature-grid">
        <article class="feature blue"><span>${icon('shield')}</span><h3>Sikkerhed først</h3><p>Brug vest, sejl aldrig alene og undgå fralandsvind som begynder.</p><button data-view="safety">Læs sikkerhedsguiden →</button></article>
        <article class="feature yellow"><span>${icon('people')}</span><h3>Spørg os</h3><p>Ingen spørgsmål er dumme. En instruktør hjælper dig med udstyr og forhold.</p><button data-view="club">Find klubben →</button></article>
        <article class="feature coral"><span>${icon('wave')}</span><h3>Små skridt</h3><p>Balance først, fart senere. Lær én bevægelse ad gangen og hold pauser.</p><button data-lesson="balance">Se lektion 3 →</button></article>
      </div>
    </section>`;
}

function windDirection(degrees) {
  const names = ['nord', 'nordøst', 'øst', 'sydøst', 'syd', 'sydvest', 'vest', 'nordvest'];
  return names[Math.round(degrees / 45) % 8];
}

function meanWindDirection(points) {
  const radians = points.map(point => point.direction * Math.PI / 180);
  const x = radians.reduce((sum, angle) => sum + Math.cos(angle), 0);
  const y = radians.reduce((sum, angle) => sum + Math.sin(angle), 0);
  return (Math.atan2(y, x) * 180 / Math.PI + 360) % 360;
}

function coastalWindType(degrees) {
  if (degrees >= 67.5 && degrees < 112.5) return { label: 'Pålandsvind', className: 'onshore' };
  if (degrees >= 247.5 && degrees < 292.5) return { label: 'Fralandsvind · Kræver følgebåd', className: 'offshore' };
  if ((degrees >= 22.5 && degrees < 67.5) || (degrees >= 112.5 && degrees < 157.5)) return { label: 'Skrå pålandsvind', className: 'cross-onshore' };
  if ((degrees >= 202.5 && degrees < 247.5) || (degrees >= 292.5 && degrees < 337.5)) return { label: 'Skrå fralandsvind · Kræver følgebåd', className: 'cross-offshore' };
  return { label: 'Sidevind', className: 'cross-shore' };
}

function localWaterDescription(direction, speed) {
  const coast = coastalWindType(direction);
  if (coast.className === 'offshore') return 'Ofte fladt ved stranden';
  if (coast.className === 'cross-offshore') return 'Forholdsvis fladt ved stranden';
  if (coast.className === 'onshore') return speed >= 8 ? 'Store bølger sandsynlige' : speed >= 4 ? 'Bølger sandsynlige' : 'Små bølger mulige';
  if (coast.className === 'cross-onshore') return speed >= 6 ? 'Uroligt vand og bølger' : 'Nogle bølger mulige';
  return speed >= 7 ? 'Uroligt vand muligt' : 'Skiftende bølgeforhold';
}

function beginnerConditionPeriod(points) {
  const suitable = point => point.speed >= 4 && point.speed <= 8 && point.direction >= 225 && point.direction <= 337.5;
  const periods = [];
  let start = null;
  points.forEach((point, index) => {
    if (suitable(point) && start === null) start = index;
    const periodEnds = start !== null && (!suitable(point) || index === points.length - 1);
    if (periodEnds) {
      const endIndex = suitable(point) && index === points.length - 1 ? index : index - 1;
      if (endIndex - start + 1 >= 2) periods.push({ start, end: endIndex });
      start = null;
    }
  });
  if (!periods.length) return null;
  const best = periods.sort((a, b) => (b.end - b.start) - (a.end - a.start))[0];
  const startHour = points[best.start].time.slice(11, 13);
  const endHour = String(Number(points[best.end].time.slice(11, 13)) + 1).padStart(2, '0');
  return `Gode begynderforhold kl. ${startHour}–${endHour}`;
}

function weatherDescription(code) {
  if (code === 0) return 'Klart vejr';
  if ([1, 2, 3].includes(code)) return 'Delvist skyet';
  if ([45, 48].includes(code)) return 'Tåget';
  if ([51, 53, 55, 56, 57].includes(code)) return 'Støvregn';
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return 'Regn';
  if ([71, 73, 75, 77, 85, 86].includes(code)) return 'Sne';
  if ([95, 96, 99].includes(code)) return 'Torden';
  return 'Skiftende vejr';
}

function weatherIcon(code) {
  if (code === 0) return '☀️';
  if (code === 1) return '🌤️';
  if ([2, 3].includes(code)) return '☁️';
  if ([45, 48].includes(code)) return '🌫️';
  if ([51, 53, 55, 56, 57].includes(code)) return '🌦️';
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return '🌧️';
  if ([71, 73, 75, 77, 85, 86].includes(code)) return '🌨️';
  if ([95, 96, 99].includes(code)) return '⛈️';
  return '🌥️';
}

async function loadCurrentWeather() {
  const container = document.querySelector('#currentWeather');
  if (!container) return;
  try {
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=55.5358&longitude=12.4269&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,apparent_temperature,precipitation_probability,wind_speed_10m,wind_gusts_10m,wind_direction_10m,weather_code&wind_speed_unit=ms&timezone=Europe%2FCopenhagen&forecast_days=6');
    if (!response.ok) throw new Error('Vejret kunne ikke hentes');
    const { current, hourly } = await response.json();
    const direction = windDirection(current.wind_direction_10m);
    const currentCoast = coastalWindType(current.wind_direction_10m);
    const offshore = currentCoast.className.includes('offshore');
    const today = current.time.slice(0, 10);
    const currentHour = Number(current.time.slice(11, 13));
    const allWeatherPoints = hourly.time.map((time, index) => ({
      time,
      temperature: Number(hourly.temperature_2m[index]),
      feelsLike: Number(hourly.apparent_temperature[index]),
      precipitation: Number(hourly.precipitation_probability[index]),
      speed: Number(hourly.wind_speed_10m[index]),
      gust: Number(hourly.wind_gusts_10m[index]),
      direction: Number(hourly.wind_direction_10m[index]),
      code: hourly.weather_code[index]
    }));
    const remainingHours = allWeatherPoints.filter(point => point.time.startsWith(today) && Number(point.time.slice(11, 13)) > currentHour && Number(point.time.slice(11, 13)) <= 20);
    const remainingToday = remainingHours.filter((_point, index) => index % 2 === 0 || index === remainingHours.length - 1);
    const todayTimeline = remainingToday.length ? remainingToday.map(point => { const coast = coastalWindType(point.direction); return `<article class="hour-weather"><time>${point.time.slice(11, 16)}</time><i role="img" aria-label="${weatherDescription(point.code)}">${weatherIcon(point.code)}</i><strong>${Math.round(point.temperature)}°</strong><span>${point.speed.toFixed(1)} m/s</span><span class="forecast-wind-direction"><i class="forecast-wind-arrow" style="--forecast-wind-angle:${point.direction}deg" aria-hidden="true">↑</i><small>Fra ${windDirection(point.direction)}</small></span><em class="coast-label ${coast.className}">${coast.label}</em><small class="wave-label">🌊 ${localWaterDescription(point.direction, point.speed)}</small></article>`; }).join('') : '<p class="day-weather-finished">Dagens vejrforløb er slut. Se udsigten for i morgen nedenfor.</p>';
    const dates = [...new Set(hourly.time.map(time => time.slice(0, 10)))].filter(date => date > today).slice(0, 5);
    const forecastCards = dates.map(date => {
      const points = allWeatherPoints.filter(point => point.time.startsWith(date) && Number(point.time.slice(11, 13)) >= 8 && Number(point.time.slice(11, 13)) < 20);
      const min = Math.min(...points.map(point => point.speed));
      const max = Math.max(...points.map(point => point.speed));
      const minTemperature = Math.round(Math.min(...points.map(point => point.temperature)));
      const maxTemperature = Math.round(Math.max(...points.map(point => point.temperature)));
      const averageDirection = meanWindDirection(points);
      const coast = coastalWindType(averageDirection);
      const midday = points.find(point => point.time.slice(11, 13) === '12') || points[Math.floor(points.length / 2)];
      const status = beginnerConditionPeriod(points) || '';
      const dayName = new Intl.DateTimeFormat('da-DK', { weekday: 'short', day: 'numeric', month: 'short' }).format(new Date(`${date}T12:00:00`));
      return `<article class="surf-day ${status ? 'possible' : ''}" data-weather-date="${date}" role="button" tabindex="0" aria-label="Se detaljeret vejr for ${dayName}"><span>${dayName}</span><i class="surf-weather-icon" role="img" aria-label="${weatherDescription(midday.code)}">${weatherIcon(midday.code)}</i><small class="surf-weather-text">${weatherDescription(midday.code)}</small><strong class="surf-temperature">${minTemperature}–${maxTemperature}°</strong><strong>${min.toFixed(1)}–${max.toFixed(1)} <small>m/s</small></strong><span class="forecast-wind-direction"><i class="forecast-wind-arrow" style="--forecast-wind-angle:${averageDirection}deg" aria-hidden="true">↑</i><em>Fra ${windDirection(averageDirection)}</em></span><em class="coast-label ${coast.className}">${coast.label}</em><small class="wave-label">🌊 ${localWaterDescription(averageDirection, max)}</small>${status ? `<b>${status}</b>` : ''}</article>`;
    }).join('');
    container.innerHTML = `<div class="current-weather-head"><div><span class="kicker">Lige nu ved stranden</span><h2>${weatherDescription(current.weather_code)}</h2></div><span class="weather-updated">Opdateret kl. ${current.time.slice(11, 16)}</span></div><div class="current-weather-values"><div><strong>${Math.round(current.temperature_2m)}°</strong><span>Temperatur</span><small>Føles som ${Math.round(current.apparent_temperature)}°</small></div><div><strong>${Number(current.wind_speed_10m).toFixed(1)}</strong><span>m/s vind</span><small>Fra ${direction}</small></div><div class="wind-compass"><span style="--wind-angle:${current.wind_direction_10m}deg">↑</span><strong>${Math.round(current.wind_direction_10m)}°</strong><small>${direction}</small></div></div>${offshore ? '<p class="current-weather-warning"><strong>Fralandsvind:</strong> Sejl aldrig uden følgebåd.</p>' : ''}<div class="surf-forecast"><div><span class="kicker light">De kommende dage</span><h3>Surfvejret i Solrød Strand</h3></div><div class="surf-days">${forecastCards}</div></div><a class="weather-source" href="https://open-meteo.com/" target="_blank" rel="noreferrer">Vejrdata: Open-Meteo →</a>`;
    const currentHeading = container.querySelector('.current-weather-head > div');
    if (currentHeading) {
      currentHeading.innerHTML = `<i class="current-weather-icon" role="img" aria-label="${weatherDescription(current.weather_code)}">${weatherIcon(current.weather_code)}</i><div class="current-condition-copy">${currentHeading.innerHTML}</div>`;
      currentHeading.classList.add('current-condition');
    }
    container.querySelector('.surf-forecast')?.insertAdjacentHTML('beforebegin', `<div class="day-weather" data-weather-date="${today}" role="button" tabindex="0" aria-label="Se detaljeret vejr for i dag"><span class="kicker light">Resten af dagen</span><h3>Sådan udvikler vejret sig</h3><div class="hour-weather-list">${todayTimeline}</div></div>`);
    container.querySelector('.current-weather-values')?.insertAdjacentHTML('afterend', `<div class="current-coast-info"><span class="coast-label ${currentCoast.className}">${currentCoast.label}</span><span>🌊 ${localWaterDescription(current.wind_direction_10m, current.wind_speed_10m)}</span></div>`);
    container.insertAdjacentHTML('beforeend', '<div class="weather-detail-backdrop" id="weatherDetailBackdrop" hidden><section class="weather-detail-dialog" role="dialog" aria-modal="true" aria-labelledby="weatherDetailTitle"><div class="weather-detail-head"><div><span class="kicker">Time for time</span><h3 id="weatherDetailTitle"></h3></div><button type="button" class="weather-detail-close" aria-label="Luk vejrdetaljer">×</button></div><div class="weather-detail-summary"></div><div class="weather-detail-hours"></div></section></div>');
    const detailBackdrop = container.querySelector('#weatherDetailBackdrop');
    const closeWeatherDetails = () => { detailBackdrop.hidden = true; };
    const openWeatherDetails = date => {
      const points = allWeatherPoints.filter(point => point.time.startsWith(date) && Number(point.time.slice(11, 13)) >= 6 && Number(point.time.slice(11, 13)) <= 22 && Number(point.time.slice(11, 13)) % 2 === 0);
      if (!points.length) return;
      const label = date === today ? 'I dag' : new Intl.DateTimeFormat('da-DK', { weekday: 'long', day: 'numeric', month: 'long' }).format(new Date(`${date}T12:00:00`));
      const minTemperature = Math.round(Math.min(...points.map(point => point.temperature)));
      const maxTemperature = Math.round(Math.max(...points.map(point => point.temperature)));
      const maxWind = Math.max(...points.map(point => point.speed));
      const maxGust = Math.max(...points.map(point => point.gust));
      const maxRain = Math.max(...points.map(point => point.precipitation));
      detailBackdrop.querySelector('#weatherDetailTitle').textContent = label;
      detailBackdrop.querySelector('.weather-detail-summary').innerHTML = `<span><strong>${minTemperature}–${maxTemperature}°</strong>Temperatur</span><span><strong>${maxWind.toFixed(1)} m/s</strong>Maks. middelvind</span><span><strong>${maxGust.toFixed(1)} m/s</strong>Kraftigste vindstød</span><span><strong>${Math.round(maxRain)}%</strong>Største regnrisiko</span>`;
      detailBackdrop.querySelector('.weather-detail-hours').innerHTML = points.map(point => {
        const coast = coastalWindType(point.direction);
        return `<article><time>${point.time.slice(11, 16)}</time><i role="img" aria-label="${weatherDescription(point.code)}">${weatherIcon(point.code)}</i><div><strong>${Math.round(point.temperature)}°</strong><small>Føles som ${Math.round(point.feelsLike)}° · ${weatherDescription(point.code)}</small></div><div><strong>${point.speed.toFixed(1)} m/s</strong><small>Vindstød ${point.gust.toFixed(1)} m/s · Fra ${windDirection(point.direction)}</small></div><div><strong>${Math.round(point.precipitation)}%</strong><small>Risiko for nedbør</small></div><em class="coast-label ${coast.className}">${coast.label}</em><small class="weather-detail-water">🌊 ${localWaterDescription(point.direction, point.speed)}</small></article>`;
      }).join('');
      detailBackdrop.hidden = false;
      detailBackdrop.querySelector('.weather-detail-close').focus();
    };
    container.querySelectorAll('[data-weather-date]').forEach(day => {
      day.addEventListener('click', () => openWeatherDetails(day.dataset.weatherDate));
      day.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openWeatherDetails(day.dataset.weatherDate); }
      });
    });
    detailBackdrop.querySelector('.weather-detail-close').addEventListener('click', closeWeatherDetails);
    detailBackdrop.addEventListener('click', event => { if (event.target === detailBackdrop) closeWeatherDetails(); });
    detailBackdrop.addEventListener('keydown', event => { if (event.key === 'Escape') closeWeatherDetails(); });
  } catch (_error) {
    container.innerHTML = '<p class="current-weather-error">Det aktuelle vejr kunne ikke hentes. Brug vejrtjenesterne nedenfor.</p>';
  }
}

function courseView() {
  return `<section class="page-hero course-hero"><span class="kicker light">Fra landkrabbe til windsurfer</span><h1>Begynder&shy;guiden</h1><p>Følg lektionerne i rækkefølge. Tag telefonen med på stranden og brug hvert trin som støtte.</p></section>
  <section class="section video-section"><div class="video-heading"><div><span class="kicker">Se og lær</span><h2>Windsurfing på video</h2></div><p>Vælg en video nedenfor. Den åbner direkte i afspilleren, så du nemt kan finde den teknik, du vil øve.</p></div><div class="video-frame"><iframe id="windsurfVideoPlayer" src="https://www.youtube-nocookie.com/embed/${windsurfVideos[0][0]}?rel=0" title="${windsurfVideos[0][1]}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><div class="video-picker" aria-label="Vælg undervisningsvideo">${windsurfVideos.map((video, index) => `<button class="video-card ${index === 0 ? 'active' : ''}" data-video="${video[0]}" data-video-title="${video[1]}"><span class="video-thumb"><img src="https://i.ytimg.com/vi/${video[0]}/mqdefault.jpg" alt="" loading="lazy"><span class="video-play" aria-hidden="true">▶</span></span><span class="video-card-copy"><small>Video ${index + 1}</small><strong>${video[1]}</strong></span></button>`).join('')}</div><a class="youtube-link" href="https://youtube.com/playlist?list=PLKPL5ocqBu1gVXunqPIYDhJcoKp4cy5kV" target="_blank" rel="noreferrer">Åbn playlisten på YouTube →</a></section>
  <section class="section lesson-list"><div class="lesson-section-head"><span class="kicker">Trin for trin</span><h2>De seks lektioner</h2></div>${lessons.map(l => `<button class="lesson-card" data-lesson="${l.id}"><span class="lesson-number">${l.number}</span><span class="lesson-copy"><small>${l.level} · ${l.time}</small><strong>${l.title}</strong><em>${l.intro}</em></span><span class="lesson-arrow">→</span></button>`).join('')}</section>
  <section class="section mastery-section">
    <div class="mastery-heading"><div><span class="kicker">Windsurfer 1</span><h2>Det skal du mestre</h2><p>Markér punkterne, efterhånden som du mestrer dem. Din fremgang gemmes på denne enhed.</p></div><div class="mastery-progress"><strong id="masteryCount">${getMasteredSkills().size} af ${windsurferChecklist.length} mestret</strong><span id="masteryProgressBar" style="--mastery-progress:${getMasteredSkills().size / windsurferChecklist.length * 100}%"></span></div></div>
    ${[
      ['kan', 'Jeg kan', 'Praktiske færdigheder'],
      ['ved', 'Jeg ved', 'Viden og sikkerhed'],
      ['proevet', 'Jeg har prøvet', 'De første vendinger']
    ].map(([group, title, subtitle]) => `<div class="mastery-group"><div class="mastery-group-title"><span>${title}</span><small>${subtitle}</small></div><div class="mastery-list">${windsurferChecklist.filter(item => item.group === group).map(item => `<label class="mastery-item"><input type="checkbox" data-mastery-skill="${item.id}" ${getMasteredSkills().has(item.id) ? 'checked' : ''}><span class="mastery-check" aria-hidden="true"></span><span>${item.text}</span></label>`).join('')}</div></div>`).join('')}
  </section>`;
}

function lessonView(id) {
  const lesson = lessons.find(item => item.id === id);
  return `<section class="lesson-hero"><button class="back" data-view="course">← Alle lektioner</button><span class="lesson-big-number">${lesson.number}</span><span class="kicker light">${lesson.level} · ${lesson.time}</span><h1>${lesson.title}</h1><p>${lesson.intro}</p></section>
    <section class="lesson-body">${lesson.id === 'gear' ? `<div class="equipment-gallery"><figure><img src="assets/beginner-equipment-land-1.jpg" alt="Et komplet begynderssejl med mast, bom og optræksline lagt på græs"><figcaption><strong>Den komplette rig</strong><span>Sejl, mast, bom og optræksline samlet.</span></figcaption></figure><figure><img src="assets/beginner-equipment-land-2.jpg" alt="Nærbillede af bommen monteret på masten og sejlet"><figcaption><strong>Bom og mast</strong><span>Bommen er monteret rundt om masten og bruges til at styre sejlet.</span></figcaption></figure><p class="photo-credit">Fotos: ILA-boy / <a href="https://commons.wikimedia.org/wiki/File:Windsurfing_equipment_2008_01.JPG" target="_blank" rel="noreferrer">Wikimedia Commons</a> · GNU GPL 2.0 eller nyere</p></div>` : ''}<div class="step-list">${lesson.steps.map((step, i) => `<article class="step"><span>${String(i + 1).padStart(2,'0')}</span><div><h2>${step[0]}</h2><p>${step[1]}</p></div></article>`).join('')}</div>
    <aside class="coach-tip"><span>Instruktørens tip</span><p>“${lesson.tip}”</p></aside></section>`;
}

function safetyView() {
  const items = [
    ['Sejl aldrig alene', 'Fortæl nogen, hvor du sejler, og følg klubbens regler for bemanding og instruktørvagt.'],
    ['Brug altid vest', 'En CE-godkendt svømme- eller redningsvest skal passe tæt og kunne lukkes korrekt.'],
    ['Tjek vejret', 'Undgå torden, tåge, kraftig strøm og fralandsvind. Spørg en instruktør, hvis du er i tvivl.'],
    ['Bliv ved boardet', 'Boardet holder dig flydende og gør dig synlig. Forlad det aldrig for at svømme mod land.'],
    ['Kend dine grænser', 'Vend om, før du bliver træt. Kulde, vind og koncentration bruger mere energi, end man mærker.'],
    ['Hjælp og nødsignal', 'Vink med begge arme over hovedet, hvis du behøver hjælp. Ved akut fare ringes 112.']
  ];
  return `<section class="page-hero safety-hero"><span class="kicker light">Tryghed giver overskud</span><h1>Sikkerhed<br>på vandet</h1><p>Læs dette før hver tur. Lokale anvisninger fra klubbens instruktører gælder altid først.</p></section>
  <section class="section checklist"><span class="kicker">Din sikkerhedstjekliste</span><h2>Før du går ud</h2>${items.map((x,i)=>`<label><input type="checkbox"><span class="fake-check"></span><span><strong>${x[0]}</strong><small>${x[1]}</small></span></label>`).join('')}</section>
  <section class="section emergency"><span>!</span><div><h2>Hvis noget går galt</h2><p>Bevar roen, bliv ved boardet, gør dig synlig og tilkald hjælp. Ring 112 ved akut fare.</p></div></section>`;
}

function clubView() {
  return `<section class="page-hero club-hero"><img src="assets/club-logo.png" alt="Solrød Strand Windsurfing logo"><div><span class="kicker light">Velkommen i fællesskabet</span><h1>Solrød Strand<br>Windsurfing</h1><p>Surf, læring og fællesskab direkte ved Køge Bugt.</p></div></section>
  <section class="section club-intro"><div><span class="kicker">Om os</span><h2>Plads til både<br>nybegyndere og fart</h2></div><p>Vi er en frivillig forening med cirka 200 medlemmer. Her mødes børn, unge og voksne om windsurfing, wingfoil, windfoil og SUP i et inkluderende og anerkendende miljø.</p></section>
  <section class="section info-grid">
    <article><span>${icon('pin')}</span><small>Find os</small><h3>Strandens Hus</h3><p>Østre Strandvej 26<br>2680 Solrød Strand</p><a href="https://maps.google.com/?q=Østre+Strandvej+26+2680+Solrød+Strand" target="_blank" rel="noreferrer">Åbn kort →</a></article>
    <article><span>${icon('people')}</span><small>Medlemskab</small><h3>Bliv en del af klubben</h3><p>800 kr. for enkeltmedlem<br>1.000 kr. for familie</p><a href="https://www.facebook.com/ss.windsurfing.dk/" target="_blank" rel="noreferrer">Kontakt klubben →</a></article>
    <article><span>${icon('sail')}</span><small>Faciliteter</small><h3>Alt ved stranden</h3><p>Klubudstyr, instruktører, motorbåde, badefaciliteter og sauna.</p></article>
  </section>
  <section class="section club-links-section"><div class="club-links-heading"><span class="kicker">Klubbens genveje</span><h2>Tilmelding, beskeder og nyheder</h2><p>Her finder du de tjenester, vi bruger til at administrere klubben og holde kontakten med medlemmerne.</p></div><div class="club-link-grid">
    <a class="club-service holdsport" href="https://www.holdsport.dk/" target="_blank" rel="noreferrer"><span aria-hidden="true">H</span><div><small>Klubadministration</small><strong>Holdsport</strong><p>Tilmelding, aktiviteter og administration af medlemskab.</p></div><b>Åbn Holdsport →</b></a>
    <a class="club-service messenger" href="https://www.messenger.com/t/2231502496966727" target="_blank" rel="noreferrer"><span aria-hidden="true">✉</span><div><small>Medlemschat</small><strong>Messenger-tråden</strong><p>Beskeder, spørgsmål og hurtig kontakt med klubben.</p></div><b>Åbn Messenger →</b></a>
    <a class="club-service facebook" href="https://www.facebook.com/ss.windsurfing.dk/?locale=da_DK" target="_blank" rel="noreferrer"><span aria-hidden="true">f</span><div><small>Nyheder og billeder</small><strong>Facebook-siden</strong><p>Følg klubbens opslag, arrangementer og aktiviteter.</p></div><b>Åbn Facebook →</b></a>
  </div></section>
  <section class="section contact-card"><div><span class="kicker light">Har du spørgsmål?</span><h2>Vi hjælper dig gerne i gang</h2></div><div><a href="tel:+4522938182">22 93 81 82</a><a href="mailto:mikkel@schildt.dk">mikkel@schildt.dk</a></div></section>`;
}

function render(view = currentView) {
  currentView = view;
  document.body.classList.toggle('home-view', view === 'home');
  app.innerHTML = view === 'home' ? homeView() : view === 'course' ? courseView() : view === 'safety' ? safetyView() : clubView();
  if (view === 'home') loadCurrentWeather();
  if (view === 'course') {
    document.querySelectorAll('[data-mastery-skill]').forEach(item => item.closest('.mastery-item')?.classList.toggle('mastered', item.checked));
    updateMasteryProgress();
  }
  document.querySelectorAll('.bottom-nav button').forEach(btn => btn.classList.toggle('active', btn.dataset.view === (view.startsWith('lesson') ? 'course' : view)));
  window.scrollTo({top:0, behavior:'smooth'});
}

document.addEventListener('change', event => {
  const checkbox = event.target.closest('[data-mastery-skill]');
  if (!checkbox) return;
  const mastered = getMasteredSkills();
  if (checkbox.checked) mastered.add(checkbox.dataset.masterySkill);
  else mastered.delete(checkbox.dataset.masterySkill);
  saveMasteredSkills(mastered);
  checkbox.closest('.mastery-item')?.classList.toggle('mastered', checkbox.checked);
  updateMasteryProgress();
});

document.addEventListener('click', event => {
  const viewTarget = event.target.closest('[data-view]');
  const lessonTarget = event.target.closest('[data-lesson]');
  const videoTarget = event.target.closest('[data-video]');
  if (viewTarget) { closeSheet(); render(viewTarget.dataset.view); }
  if (lessonTarget) render(`lesson:${lessonTarget.dataset.lesson}`);
  if (videoTarget) {
    const player = document.querySelector('#windsurfVideoPlayer');
    player.src = `https://www.youtube-nocookie.com/embed/${videoTarget.dataset.video}?rel=0&autoplay=1`;
    player.title = videoTarget.dataset.videoTitle;
    document.querySelectorAll('.video-card').forEach(card => card.classList.toggle('active', card === videoTarget));
    document.querySelector('.video-frame').scrollIntoView({behavior:'smooth', block:'center'});
  }
});

const originalRender = render;
render = function(view = currentView) {
  if (view.startsWith('lesson:')) {
    currentView = view;
    document.body.classList.remove('home-view');
    app.innerHTML = lessonView(view.split(':')[1]);
    document.querySelectorAll('.bottom-nav button').forEach(btn => btn.classList.toggle('active', btn.dataset.view === 'course'));
    window.scrollTo({top:0, behavior:'smooth'});
  } else originalRender(view);
};

const sheet = document.querySelector('#sheetBackdrop');
function openSheet(){ sheet.hidden = false; requestAnimationFrame(()=>sheet.classList.add('open')); }
function closeSheet(){ sheet.classList.remove('open'); setTimeout(()=>sheet.hidden = true, 220); }
document.querySelector('#menuButton').addEventListener('click', openSheet);
document.querySelector('#closeMenu').addEventListener('click', closeSheet);
sheet.addEventListener('click', event => { if (event.target === sheet) closeSheet(); });

window.addEventListener('beforeinstallprompt', event => { event.preventDefault(); deferredInstallPrompt = event; });
const installGuide = document.querySelector('#installGuide');
const installGuideContent = document.querySelector('#installGuideContent');
const platformTabs = [...document.querySelectorAll('[data-platform]')];

function detectedPlatform() {
  return /iphone|ipad|ipod/i.test(navigator.userAgent) ? 'iphone' : 'android';
}

function renderInstallGuide(platform) {
  platformTabs.forEach(tab => {
    const selected = tab.dataset.platform === platform;
    tab.classList.toggle('active', selected);
    tab.setAttribute('aria-selected', selected);
  });
  const alreadyInstalled = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone;
  if (alreadyInstalled) {
    installGuideContent.innerHTML = `<div class="installed-message"><span>✓</span><div><h3>Appen er allerede installeret</h3><p>Du kan åbne den direkte fra hjemmeskærmen.</p></div></div>`;
    return;
  }
  if (platform === 'iphone') {
    installGuideContent.innerHTML = `<div class="install-note">Brug Safari på din iPhone eller iPad.</div><ol class="install-steps"><li><span>1</span><div><strong>Åbn Del-menuen</strong><p>Tryk på Del-ikonet <b class="share-symbol">⇧</b> nederst i Safari.</p></div></li><li><span>2</span><div><strong>Vælg “Føj til hjemmeskærm”</strong><p>Rul ned i menuen, hvis valget ikke vises med det samme.</p></div></li><li><span>3</span><div><strong>Tryk på “Tilføj”</strong><p>Appens ikon bliver placeret på din hjemmeskærm.</p></div></li></ol>`;
  } else {
    installGuideContent.innerHTML = `${deferredInstallPrompt ? '<button class="install-now" id="installNow">Installér appen nu</button>' : '<div class="install-note">Brug Chrome på din Android-telefon.</div>'}<ol class="install-steps"><li><span>1</span><div><strong>Åbn browserens menu</strong><p>Tryk på de tre prikker <b>⋮</b> øverst i Chrome.</p></div></li><li><span>2</span><div><strong>Vælg “Installer app”</strong><p>På nogle telefoner hedder valget “Føj til startskærm”.</p></div></li><li><span>3</span><div><strong>Bekræft installationen</strong><p>Appens ikon bliver placeret på din startskærm.</p></div></li></ol>`;
    document.querySelector('#installNow')?.addEventListener('click', async () => {
      await deferredInstallPrompt.prompt();
      await deferredInstallPrompt.userChoice;
      deferredInstallPrompt = null;
      installGuide.hidden = true;
    });
  }
}

document.querySelector('#installButton').addEventListener('click', () => {
  closeSheet();
  renderInstallGuide(detectedPlatform());
  installGuide.hidden = false;
});
platformTabs.forEach(tab => tab.addEventListener('click', () => renderInstallGuide(tab.dataset.platform)));
document.querySelector('#closeInstallGuide').addEventListener('click', () => installGuide.hidden = true);
installGuide.addEventListener('click', event => { if (event.target === installGuide) installGuide.hidden = true; });
if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('sw.js'));
render('home');
