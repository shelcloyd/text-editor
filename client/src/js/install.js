const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // store triggered events
    window.deferredPrompt = event;
    // remove hidden class from button
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const event = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    // shows the prompt
    event.prompt();
    // resets the deferred prompt variable - can only be used once
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // clears the prompt
    window.deferredPrompt = null;
});
