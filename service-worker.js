const CACHE_NAME = "nihonshi-no11-22-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css?v=10",
  "./app.js?v=10",
  "./manifest.webmanifest",
  "./assets/prints/nihonshi/nihonshi-01.jpg",
  "./assets/prints/nihonshi/nihonshi-02.jpg",
  "./assets/prints/nihonshi/nihonshi-03.jpg",
  "./assets/prints/nihonshi/nihonshi-04.jpg",
  "./assets/prints/nihonshi/nihonshi-05.jpg",
  "./assets/prints/nihonshi/nihonshi-06.jpg",
  "./assets/prints/nihonshi/nihonshi-07.jpg",
  "./assets/prints/nihonshi/nihonshi-08.jpg",
  "./assets/prints/nihonshi/nihonshi-09.jpg",
  "./assets/prints/nihonshi/nihonshi-10.jpg",
  "./assets/prints/nihonshi/nihonshi-11.jpg",
  "./assets/prints/nihonshi/nihonshi-12.jpg",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) {
        return cached;
      }

      return fetch(event.request).then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      });
    })
  );
});
