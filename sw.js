const CACHE = 'solrod-windsurf-intro-v10';
const FILES = ['./', './index.html', './styles.css', './config.js', './auth.js', './app.js', './assets/club-logo.png', './assets/beginner-equipment-land-1.jpg', './assets/beginner-equipment-land-2.jpg', './assets/sejladsudsigt-preview.png', './assets/dmi-solrod-preview.png'];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES))));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))));
self.addEventListener('fetch', event => event.respondWith(fetch(event.request).catch(() => caches.match(event.request))));
