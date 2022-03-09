const installBtn = document.getElementById('buttonInstall');

// Logic for installing the PWA

// Event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
	// Prompted Events storage
	window.deferredPrompt = event;
	installBtn.classList.toggle('hidden', false);
});

// Install button event handler
installBtn.addEventListener('click', async () => {
	const promptEvent = window.deferredPrompt;
	if (!promptEvent) {
		return;
	}
	promptEvent.prompt();
	window.deferredPrompt = null;
	installBtn.classList.toggle('hidden', true);
});

// Installed event
window.addEventListener('appinstalled', (event) => {
	window.deferredPrompt = null;
});