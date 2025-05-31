function onInstall(event) {
    console.log('Service Worker installing...');
}

// Expose a function to trigger onInstall from the window (for demo/testing)

self.addEventListener('install', onInstall);


self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});