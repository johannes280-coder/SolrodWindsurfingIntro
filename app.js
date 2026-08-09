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

const app = document.querySelector('#app');
const completed = new Set(JSON.parse(localStorage.getItem('ssw-completed') || '[]'));
let currentView = 'home';
let deferredInstallPrompt = null;

const icon = name => ({wave:'≈', compass:'◇', people:'◌', sail:'◢', shield:'✦', pin:'●'}[name] || '•');
const progress = () => Math.round((completed.size / lessons.length) * 100);

function homeView() {
  return `
    <section class="hero">
      <img class="hero-club-logo" src="assets/club-logo.png" alt="Solrød Strand Windsurfing logo"><div class="hero-wave one"></div><div class="hero-wave two"></div>
      <div class="hero-content"><span class="kicker light">Velkommen til</span><h1>Solrød Strand<br><em>Windsurfing</em></h1><div class="hero-actions"><button class="primary coral" data-view="club">Info omkring klubben <span>→</span></button><button class="primary coral" data-view="course">Lær at windsurfe <span>→</span></button></div></div>
    </section>
    <section class="section welcome-grid">
      <div><span class="kicker">Godt at se dig</span><h2>Her begynder<br>dit surfeventyr</h2></div>
      <div><p>Du behøver hverken eget udstyr eller erfaring. Klubben har udstyr og uddannede instruktører, som hjælper dig sikkert fra strand til board.</p><div class="mini-stats"><span><strong>6</strong> lektioner</span><span><strong>57</strong> minutter</span><span><strong>0</strong> erfaring krævet</span></div></div>
    </section>
    <section class="section progress-card">
      <div class="progress-ring" style="--progress:${progress() * 3.6}deg"><span>${progress()}%</span></div>
      <div><span class="kicker">Din læring</span><h3>${completed.size ? 'Godt i gang!' : 'Klar til første lektion?'}</h3><p>${completed.size} af ${lessons.length} lektioner gennemført. Din status gemmes automatisk på telefonen.</p></div>
      <button class="text-link" data-view="course">Fortsæt →</button>
    </section>
    <section class="section"><div class="section-heading"><div><span class="kicker">Før du starter</span><h2>Tre ting at huske</h2></div></div>
      <div class="feature-grid">
        <article class="feature blue"><span>${icon('shield')}</span><h3>Sikkerhed først</h3><p>Brug vest, sejl aldrig alene og undgå fralandsvind som begynder.</p><button data-view="safety">Læs sikkerhedsguiden →</button></article>
        <article class="feature yellow"><span>${icon('people')}</span><h3>Spørg os</h3><p>Ingen spørgsmål er dumme. En instruktør hjælper dig med udstyr og forhold.</p><button data-view="club">Find klubben →</button></article>
        <article class="feature coral"><span>${icon('wave')}</span><h3>Små skridt</h3><p>Balance først, fart senere. Lær én bevægelse ad gangen og hold pauser.</p><button data-lesson="balance">Se lektion 3 →</button></article>
      </div>
    </section>`;
}

function courseView() {
  return `<section class="page-hero course-hero"><span class="kicker light">Fra landkrabbe til windsurfer</span><h1>Begynder&shy;guiden</h1><p>Følg lektionerne i rækkefølge. Tag telefonen med på stranden og brug hvert trin som støtte.</p><div class="course-progress"><div><span style="width:${progress()}%"></span></div><strong>${completed.size}/${lessons.length}</strong></div></section>
  <section class="section video-section"><div class="video-heading"><div><span class="kicker">Se og lær</span><h2>Windsurfing på video</h2></div><p>Se hele videoserien i dit eget tempo. Brug playlistens menu i afspilleren til at vælge den næste video.</p></div><div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/videoseries?list=PLKPL5ocqBu1gVXunqPIYDhJcoKp4cy5kV" title="YouTube-playliste med windsurfingundervisning" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><a class="youtube-link" href="https://youtube.com/playlist?list=PLKPL5ocqBu1gVXunqPIYDhJcoKp4cy5kV" target="_blank" rel="noreferrer">Åbn playlisten på YouTube →</a></section>
  <section class="section lesson-list"><div class="lesson-section-head"><span class="kicker">Trin for trin</span><h2>De seks lektioner</h2></div>${lessons.map(l => `<button class="lesson-card ${completed.has(l.id) ? 'done' : ''}" data-lesson="${l.id}"><span class="lesson-number">${completed.has(l.id) ? '✓' : l.number}</span><span class="lesson-copy"><small>${l.level} · ${l.time}</small><strong>${l.title}</strong><em>${l.intro}</em></span><span class="lesson-arrow">→</span></button>`).join('')}</section>`;
}

function lessonView(id) {
  const lesson = lessons.find(item => item.id === id);
  return `<section class="lesson-hero"><button class="back" data-view="course">← Alle lektioner</button><span class="lesson-big-number">${lesson.number}</span><span class="kicker light">${lesson.level} · ${lesson.time}</span><h1>${lesson.title}</h1><p>${lesson.intro}</p></section>
    <section class="lesson-body">${lesson.id === 'gear' ? `<div class="equipment-gallery"><figure><img src="assets/beginner-equipment-land-1.jpg" alt="Et komplet begynderssejl med mast, bom og optræksline lagt på græs"><figcaption><strong>Den komplette rig</strong><span>Sejl, mast, bom og optræksline samlet.</span></figcaption></figure><figure><img src="assets/beginner-equipment-land-2.jpg" alt="Nærbillede af bommen monteret på masten og sejlet"><figcaption><strong>Bom og mast</strong><span>Bommen er monteret rundt om masten og bruges til at styre sejlet.</span></figcaption></figure><p class="photo-credit">Fotos: ILA-boy / <a href="https://commons.wikimedia.org/wiki/File:Windsurfing_equipment_2008_01.JPG" target="_blank" rel="noreferrer">Wikimedia Commons</a> · GNU GPL 2.0 eller nyere</p></div>` : ''}<div class="step-list">${lesson.steps.map((step, i) => `<article class="step"><span>${String(i + 1).padStart(2,'0')}</span><div><h2>${step[0]}</h2><p>${step[1]}</p></div></article>`).join('')}</div>
    <aside class="coach-tip"><span>Instruktørens tip</span><p>“${lesson.tip}”</p></aside>
    <button class="complete-button ${completed.has(id) ? 'completed' : ''}" data-complete="${id}">${completed.has(id) ? '✓ Lektionen er gennemført' : 'Markér lektionen som gennemført'}</button></section>`;
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
  <section class="section contact-card"><div><span class="kicker light">Har du spørgsmål?</span><h2>Vi hjælper dig gerne i gang</h2></div><div><a href="tel:+4522938182">22 93 81 82</a><a href="mailto:mikkel@schildt.dk">mikkel@schildt.dk</a></div></section>`;
}

function render(view = currentView) {
  currentView = view;
  document.body.classList.toggle('home-view', view === 'home');
  app.innerHTML = view === 'home' ? homeView() : view === 'course' ? courseView() : view === 'safety' ? safetyView() : clubView();
  document.querySelectorAll('.bottom-nav button').forEach(btn => btn.classList.toggle('active', btn.dataset.view === (view.startsWith('lesson') ? 'course' : view)));
  window.scrollTo({top:0, behavior:'smooth'});
}

document.addEventListener('click', event => {
  const viewTarget = event.target.closest('[data-view]');
  const lessonTarget = event.target.closest('[data-lesson]');
  const completeTarget = event.target.closest('[data-complete]');
  if (viewTarget) { closeSheet(); render(viewTarget.dataset.view); }
  if (lessonTarget) render(`lesson:${lessonTarget.dataset.lesson}`);
  if (completeTarget) {
    const id = completeTarget.dataset.complete;
    completed.has(id) ? completed.delete(id) : completed.add(id);
    localStorage.setItem('ssw-completed', JSON.stringify([...completed]));
    render(`lesson:${id}`);
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
document.querySelector('#installButton').addEventListener('click', async () => {
  if (deferredInstallPrompt) { deferredInstallPrompt.prompt(); await deferredInstallPrompt.userChoice; deferredInstallPrompt = null; closeSheet(); return; }
  alert(/iphone|ipad|ipod/i.test(navigator.userAgent) ? 'Tryk på Del i Safari og vælg “Føj til hjemmeskærm”.' : 'Vælg “Installer app” eller “Føj til startskærm” i browserens menu.');
});
if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('sw.js'));
render('home');
