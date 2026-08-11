const authRoot = document.querySelector('#authRoot');
const appShell = document.querySelector('#appShell');
const adminButton = document.querySelector('#adminButton');
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
  authRoot.innerHTML = `<section class="auth-card"><img class="auth-logo" src="assets/club-logo.png" alt="Solrød Strand Windsurfing logo"><span class="kicker">Medlemsadgang</span><h1>${registering ? 'Opret bruger' : 'Velkommen tilbage'}</h1><p>${registering ? 'Opret din konto. En administrator skal godkende den, før du får adgang.' : 'Log ind for at åbne klubguiden.'}</p><form id="authForm">${registering ? '<label>Navn<input name="name" autocomplete="name" required></label>' : ''}<label>E-mail<input name="email" type="email" autocomplete="email" required></label><label>Adgangskode<input name="password" type="password" autocomplete="current-password" minlength="8" required></label>${registering ? '' : `<label class="remember-login"><input name="remember" type="checkbox" ${localStorage.getItem(rememberPreferenceKey) === 'true' ? 'checked' : ''}><span class="remember-check" aria-hidden="true"></span><span>Husk mig på denne enhed</span></label>`}<div id="authMessage" class="auth-message"></div><button class="auth-submit" type="submit">${registering ? 'Opret bruger' : 'Log ind'}</button></form><button class="auth-switch" id="authSwitch">${registering ? 'Har du allerede en bruger? Log ind' : 'Ny i klubben? Opret bruger'}</button></section>`;
  document.querySelector('#authSwitch').addEventListener('click', () => showLogin(registering ? 'login' : 'register'));
  document.querySelector('#authForm').addEventListener('submit', async event => {
    event.preventDefault();
    const button = event.currentTarget.querySelector('button');
    const data = new FormData(event.currentTarget);
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

adminButton.addEventListener('click', loadAdminPanel);
logoutButton.addEventListener('click', async () => { closeSheet(); await authClient.auth.signOut(); });

if (!authConfigured) {
  authRoot.innerHTML = `<section class="auth-card access-card"><img class="auth-logo" src="assets/club-logo.png" alt=""><span class="kicker">Opsætning mangler</span><h1>Cloudadgang er ikke klar</h1><p>Forbind appen til det nye Supabase-projekt for at aktivere brugeroprettelse og login.</p></section>`;
} else {
  authClient.auth.getSession().then(({ data }) => applySession(data.session));
  authClient.auth.onAuthStateChange((_event, session) => setTimeout(() => applySession(session), 0));
}
