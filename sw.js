self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('factory-apps-v1').then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './barberia.html',
        './estetica.html',
        './gastronomia.html'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});