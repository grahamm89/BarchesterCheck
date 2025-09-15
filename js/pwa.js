// Register the service worker and handle install prompt
(function(){
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./service-worker.js')
        .then(reg => console.log('[PWA] SW registered', reg.scope))
        .catch(err => console.warn('[PWA] SW failed', err));
    });
  }

  let deferredPrompt = null;
  const btn = document.getElementById('installBtn');

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (btn) btn.classList.remove('d-none');
  });

  if (btn){
    btn.addEventListener('click', async () => {
      if (!deferredPrompt) return;
      btn.disabled = true;
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log('[PWA] Install choice:', outcome);
      deferredPrompt = null;
      btn.classList.add('d-none');
    });
  }

  window.addEventListener('appinstalled', () => {
    console.log('[PWA] App installed');
    if (btn) btn.classList.add('d-none');
  });
})();
