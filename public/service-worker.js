self.addEventListener("fetch", (event) => {
    let url = new URL(event.request.url);
    let method = event.request.method;


    if (method.toLowerCase() !== "get") return;

    if (url.pathname.startsWith("/fonts/") ||
        url.pathname.startsWith("/build/")
    ) {
        event.respondWith(
            caches.open("assets").then(async (cache) => {
                let cacheResponse = await cache.match(event.request);
                if (cacheResponse) return cacheResponse;


                let fetchResponse = await fetch(event.request);
                cache.put(event.request, fetchResponse.clone());

                return fetchResponse;
            })
        );
    }

    return;
});