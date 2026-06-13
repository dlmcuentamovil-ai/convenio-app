const CACHE_NAME = "mi-app-cache-v1";

const URLS_TO_CACHE = [
  "/",
  "/index.html",
  "/styles.css",
  "/config.js",
  "/estructura.js",
  "/respuestas_basico.js",
  "/respuestas_pintadas.js",
  "/image_0.png",
  "/portada_convenio.jpg",
  "/manifest.json",
  "/sw.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});