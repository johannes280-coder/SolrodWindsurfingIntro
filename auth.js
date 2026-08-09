const authRoot = document.querySelector('#authRoot');
const appShell = document.querySelector('#appShell');
const adminButton = document.querySelector('#adminButton');
const logoutButton = document.querySelector('#logoutButton');
const authConfig = window.APP_CONFIG || {};
const authConfigured = Boolean(authConfig.supabaseUrl && authConfig.supabaseAnonKey && window.supabase);
const authClient = authConfigured ? window.supabase.createClient(authConfig.supabaseUrl, authConfig.supabaseAnonKey) : null;

function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' }[char]));
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
  authRoot.innerHTML = `<section class="auth-card"><img class="auth-logo" src="assets/club-logo.png" alt="Solrød Strand Windsurfing logo"><span class="kicker">Medlemsadgang</span><h1>${registering ? 'Opret bruger' : 'Velkommen tilbage'}</h1><p>${registering ? 'Opret din konto. En administrator skal godkende den, før du får adgang.' : 'Log ind for at åbne klubguiden.'}</p><form id="authForm">${registering ? '<label>Navn<input name="name" autocomplete="name" required></label>' : ''}<label>E-mail<input name="email" type="email" autocomplete="email" required></label><label>Adgangskode<input name="password" type="password" autocomplete="current-password" minlength="8" required></label><div id="authMessage" class="auth-message"></div><button class="auth-submit" type="submit">${registering ? 'Opret bruger' : 'Log ind'}</button></form><button class="auth-switch" id="authSwitch">${registering ? 'Har du allerede en bruger? Log ind' : 'Ny i klubben? Opret bruger'}</button></section>`;
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
  authRoot.hidden = false;
  appShell.hidden = true;
  authRoot.innerHTML = `<section class="admin-page"><div class="admin-title"><div><span class="kicker">Kontrolpanel</span><h1>Brugere</h1></div><button class="round-button" id="closeAdmin" aria-label="Luk">×</button></div><div id="memberList" class="member-list"><p>Henter brugere…</p></div></section>`;
  document.querySelector('#closeAdmin').addEventListener('click', () => showApp(window.currentAccessProfile));
  await refreshMembers();
}

async function refreshMembers() {
  const list = document.querySelector('#memberList');
  const { data, error } = await authClient.rpc('admin_list_members');
  if (error) { list.innerHTML = '<p>Brugerne kunne ikke hentes.</p>'; return; }
  list.innerHTML = data.map(user => `<article class="member-row"><div><strong>${escapeHtml(user.full_name || 'Uden navn')}</strong><span>${escapeHtml(user.email || '')}</span><small class="status ${user.access_status}">${user.is_admin ? 'Administrator' : user.access_status === 'approved' ? 'Godkendt' : user.access_status === 'blocked' ? 'Blokeret' : 'Afventer'}</small></div>${user.is_admin ? '<em>Din konto</em>' : `<div class="member-actions"><button data-access="${user.id}" data-status="approved">Godkend</button><button data-access="${user.id}" data-status="blocked">Blokér</button><button class="delete-member" data-delete="${user.id}">Slet</button></div>`}</article>`).join('');
  list.querySelectorAll('[data-access]').forEach(button => button.addEventListener('click', async () => { button.disabled = true; await authClient.rpc('admin_set_member_access', { target_user_id: button.dataset.access, new_status: button.dataset.status }); await refreshMembers(); }));
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
