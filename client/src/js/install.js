const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    console.log('beforeinstallprompt fired');
    event.preventDefault();
    deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    self.addEventListener('install', (e) =>
        e.waitUntil(
            caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
        )
    );
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('a2hs installed');
});
