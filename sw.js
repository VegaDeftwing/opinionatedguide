const CACHE_NAME = 'opguides-cache-v0.2';

const INSTALL_CACHE = ['/404.html', '/offline/'];

/**
 * Create a new cache and add all install dependencies
 */
self.addEventListener('install', (event) => {
    event.waitUntil(
        (async function () {
            let cache = await caches.open(CACHE_NAME);
            await cache.addAll(INSTALL_CACHE);
        })()
    );
});

/**
 * Delete all old caches when outdated service worker exits
 * (This only runs when this file is updated)
 */
self.addEventListener('activate', (event) => {
    event.waitUntil(
        (async function () {
            let cacheNames = await caches.keys();
            for (let cacheName of cacheNames) {
				if (cacheName != CACHE_NAME) {
					await caches.delete(cacheName);
				}
            }
        })()
    );
});

/**
 * Implementation of the Stale-while-revalidate pattern
 * (https://web.dev/offline-cookbook/#stale-while-revalidate)
 *
 * Essentially, take cache first for faster load times, but update the cache
 * in the background so that page edits will load on the second visit.
 */
self.addEventListener('fetch', (event) => {
    event.respondWith(
        (async function () {
            let cache = await caches.open(CACHE_NAME);
			let url = new URL(event.request.url);

            // Get cached response first
            let cacheResponse = await caches.match(event.request);
            // Send network request next and allow it to run in the background
            let networkResponsePromise = fetch(event.request).then(async function (response) {
                // Don't cache a 404 page for a random URL and
				// only return a 404 page if this resource is ours
                if (
					(!response || response.status == 404)
					&& url.origin == location.origin
				) {
                    return await caches.match('/404.html');
                }
                if (!/^\/api\//.test(url.pathname)) {
                    cache.put(event.request, response.clone());
                }
                return response;
            });

            if (cacheResponse) {
                // We return the cached response if it's not the first time visiting this page
                return cacheResponse;
            } else {
                // only await on the network promise if it's needed
                try {
                    return await networkResponsePromise;
                } catch (ex) {
					// only return an offline page if this resource is ours
					if (url.origin == location.origin) {
						return await caches.match('/offline/');
					}
                }
            }
        })()
    );
});
