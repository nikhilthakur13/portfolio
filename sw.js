/* =========================================================
   SERVICE WORKER CONFIGURATION
   ========================================================= */

const CACHE_NAME = "nikhil-portfolio-v6";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./manifest.webmanifest",
    "./assets/portfolio-background.png",
];


/* =========================================================
   INSTALL EVENT
   ========================================================= */

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(FILES_TO_CACHE);
        })
    );

    self.skipWaiting();
});


/* =========================================================
   ACTIVATE EVENT
   ========================================================= */

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches
            .keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames
                        .filter((cacheName) => cacheName !== CACHE_NAME)
                        .map((cacheName) => caches.delete(cacheName))
                );
            })
    );

    self.clients.claim();
});


/* =========================================================
   FETCH EVENT
   ========================================================= */

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {

            if (cachedResponse) {
                return cachedResponse;
            }

            return fetch(event.request)
                .then((response) => {

                    /*
                     * Do not cache invalid, non-successful,
                     * or opaque responses.
                     */
                    if (
                        !response ||
                        response.status !== 200 ||
                        response.type === "opaque"
                    ) {
                        return response;
                    }

                    const responseClone = response.clone();

                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseClone);
                    });

                    return response;
                })
                .catch(() => {
                    return caches.match("./index.html");
                });
        })
    );
});
