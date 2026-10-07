const CACHE_NAME = "study-app-switcher-v11";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css?v=20",
  "./koukyo-20261007.js?v=18",
  "./chigaku-kiso-20261008.js?v=19",
  "./koten-20261008.js?v=21",
  "./app.js?v=20",
  "./manifest.webmanifest",
  "./assets/prints/koten-20261008/print-01.jpg",
  "./assets/prints/koten-20261008/print-02.jpg",
  "./assets/prints/koten-20261008/print-03.jpg",
  "./assets/prints/koten-20261008/print-04.jpg",
  "./assets/prints/koten-20261008/print-05.jpg",
  "./assets/prints/koten-20261008/print-06.jpg",
  "./assets/prints/koten-20261008/print-07.jpg",
  "./assets/prints/koten-20261008/print-08.jpg",
  "./assets/prints/koten-20261008/print-09.jpg",
  "./assets/prints/koten-20261008/print-10.jpg",
  "./assets/prints/koten-20261008/print-11.jpg",
  "./assets/prints/chigaku-kiso/print-1.jpg",
  "./assets/prints/chigaku-kiso/print-2.jpg",
  "./assets/prints/chigaku-kiso/print-3.jpg",
  "./assets/prints/chigaku-kiso/print-4.jpg",
  "./assets/prints/chigaku-kiso/print-5.jpg",
  "./assets/prints/chigaku-kiso/print-6.jpg",
  "./assets/prints/chigaku-kiso/print-7.jpg",
  "./assets/prints/koukyo-08.jpg",
  "./assets/prints/koukyo-09.jpg",
  "./assets/prints/koukyo-10.jpg",
  "./assets/prints/koukyo-11.jpg",
  "./assets/prints/koukyo-12.jpg",
  "./assets/prints/koukyo-13.jpg",
  "./assets/prints/koukyo-14.jpg",
  "./assets/prints/koukyo-20261007/print-1.jpg",
  "./assets/prints/koukyo-20261007/print-2.jpg",
  "./assets/prints/koukyo-20261007/print-3.jpg",
  "./assets/prints/koukyo-20261007/print-4.jpg",
  "./assets/prints/koukyo-20261007/print-5.jpg",
  "./assets/prints/koukyo-20261007/print-6.jpg",
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
  "./assets/prints/kenpo/2025-q-01.jpg",
  "./assets/prints/kenpo/2025-a-01.jpg",
  "./assets/prints/kenpo/2025-a-02.jpg",
  "./assets/prints/kenpo/2025-a-03.jpg",
  "./assets/prints/kenpo/2023-q-01.jpg",
  "./assets/prints/kenpo/2023-sheet-01.jpg",
  "./assets/prints/kenpo/2023-sheet-02.jpg",
  "./assets/prints/kenpo/2022-q-01.jpg",
  "./assets/prints/kenpo/2022-q-02.jpg",
  "./assets/prints/kenpo/2022-a-01.jpg",
  "./assets/prints/kenpo/2022-a-02.jpg",
  "./assets/prints/kenpo/2022-a-03.jpg",
  "./assets/prints/kenpo/2016-q-01.jpg",
  "./assets/prints/kenpo/2016-a-01.jpg",
  "./assets/prints/kenpo/2016-sheet-01.jpg",
  "./assets/prints/kenpo/2016-sheet-02.jpg",
  "./assets/prints/kenpo/2022-sheet-01.jpg",
  "./assets/prints/kenpo/2022-sheet-02.jpg",
  "./assets/prints/chigaku/chigaku-01.jpg",
  "./assets/prints/chigaku/chigaku-02.jpg",
  "./assets/prints/english-grammar/grammar-2024-q-1.jpg",
  "./assets/prints/english-grammar/grammar-2024-q-2.jpg",
  "./assets/prints/english-grammar/grammar-2024-a-1.jpg",
  "./assets/prints/english-grammar/grammar-2024-a-2.jpg",
  "./assets/prints/english-grammar/grammar-2025-q-1.jpg",
  "./assets/prints/english-grammar/grammar-2025-q-2.jpg",
  "./assets/prints/english-grammar/grammar-2025-a-1.jpg",
  "./assets/prints/english-grammar/grammar-2025-a-2.jpg",
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
