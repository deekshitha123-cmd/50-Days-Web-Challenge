// sw.js


// ========================================
// CACHE VERSION
// ========================================

const CACHE_NAME =
    "platform-cache-v1";


// ========================================
// FILES TO CACHE
// ========================================

const ASSETS_TO_CACHE = [

    "/",

    "/index.html",

    "/style.css",

    "/main.js"

];


// ========================================
// INSTALL EVENT
// ========================================

self.addEventListener(
    "install",
    (event) => {

        console.log(
            "Service Worker installing..."
        );

        event.waitUntil(

            caches.open(CACHE_NAME)

                .then((cache) => {

                    console.log(
                        "Caching core assets..."
                    );

                    return cache.addAll(
                        ASSETS_TO_CACHE
                    );

                })

        );

        // Activate the new worker immediately

        self.skipWaiting();

    }
);


// ========================================
// ACTIVATE EVENT
// ========================================

self.addEventListener(
    "activate",
    (event) => {

        console.log(
            "Service Worker activated."
        );

        event.waitUntil(

            caches.keys()

                .then((cacheNames) => {

                    return Promise.all(

                        cacheNames.map(
                            (cacheName) => {

                                if (
                                    cacheName !==
                                    CACHE_NAME
                                ) {

                                    console.log(
                                        "Deleting old cache:",
                                        cacheName
                                    );

                                    return caches.delete(
                                        cacheName
                                    );

                                }

                            }
                        )

                    );

                })

        );

        // Take control of open pages

        self.clients.claim();

    }
);


// ========================================
// FETCH EVENT
// ========================================

self.addEventListener(
    "fetch",
    (event) => {

        event.respondWith(

            caches.match(
                event.request
            )

                .then((cachedResponse) => {

                    // --------------------------------
                    // CACHE HIT
                    // --------------------------------

                    if (cachedResponse) {

                        console.log(
                            "Serving from cache:",
                            event.request.url
                        );

                        return cachedResponse;
                    }


                    // --------------------------------
                    // CACHE MISS
                    // --------------------------------

                    console.log(
                        "Fetching from network:",
                        event.request.url
                    );

                    return fetch(
                        event.request
                    );

                })

        );

    }
);