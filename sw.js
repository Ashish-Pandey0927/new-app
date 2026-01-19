
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("cache").then(cache =>
      cache.addAll(["./published-app.html", "./manifest.json"])
    )
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
