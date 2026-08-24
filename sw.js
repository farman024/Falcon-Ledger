const CACHE = 'falcon-ledger-v4';
const ASSETS = ['./', './index.html', './manifest.json', './icon.svg'];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS))); self.skipWaiting(); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', (e) => {
  if (e.request.url.includes('cloudinary') || e.request.url.includes('googleapis') || e.request.url.includes('chart.js')) return;
  e.respondWith(caches.match(e.request).then((cached) => cached || fetch(e.request).then((res) => { if (res.ok && e.request.method === 'GET') { const c = res.clone(); caches.open(CACHE).then((cache) => cache.put(e.request, c)); } return res; }).catch(() => new Response('Offline', { status: 503 }))));
});
