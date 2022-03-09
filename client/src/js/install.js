const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

// Event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Prompted Events storage
	window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

// Install button event handler
butInstall.addEventListener('click', async () => {
    const prmptListener = window.deferredPrompt;

    if (!prmptListener) {
        return }
    
    prmptListener.prompt();
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
});

// Installed event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});