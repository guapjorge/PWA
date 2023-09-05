const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event 
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredEvent = event
    butInstall.classList.remove("hidden");
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    let event = window.deferredEvent;
    if (!event) return;
    event.prompt();
    window.deferredEvent = null;
    butInstall.classList.add("hidden");
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredEvent = null;
    butInstall.classList.add("hidden");

});
