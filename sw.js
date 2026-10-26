const CACHE_NAME = "fanplusfollow-pwa-v1";
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./background.png",
  "./landscape.png",
  "./banner.png",
  "./brand_logo.png",
  "./like.png",
  "./share.png",
  "./shorts.png",
  "./youtube.png",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    // Local app files are required for installation to succeed.
    await cache.addAll(APP_SHELL);
    // Best-effort cache of styling/font CDNs used by the existing page.
    // Failure here must not prevent the local app and images from being cached.
    const optional = ["https://cdn.tailwindcss.com",
                     "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"];
    await Promise.all(optional.map(async (url) => {
      try {
        const response = await fetch(url, { mode: "no-cors" });
        if (response) await cache.put(url, response);
      } catch (_) {}
    }));
    self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith("fanplusfollow-pwa-") && key !== CACHE_NAME)
      .map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  // Only serve app-shell files from this site's cache. Never cache user uploads or data.
  if (url.origin === self.location.origin) {
    event.respondWith((async () => {
      const cached = await caches.match(request);
      if (cached) return cached;
      try {
        const response = await fetch(request);
        if (response && response.ok) {
          const cache = await caches.open(CACHE_NAME);
          cache.put(request, response.clone()).catch(() => {});
        }
        return response;
      } catch (_) {
        if (request.mode === "navigate") {
          return (await caches.match("./index.html")) || Response.error();
        }
        return Response.error();
      }
    })());
  }
});
