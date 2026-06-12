// ==========================================
// INITIALIZATION
// ==========================================

function initApp() {
    try {
        if(typeof initLightbox === 'function') initLightbox();
        if(typeof initMusicPlayer === 'function') initMusicPlayer();
        
        if(typeof populateData === 'function') populateData();
        if(typeof initCountdown === 'function') initCountdown();
        if(typeof createParticles === 'function') createParticles();
        if(typeof initScrollReveal === 'function') initScrollReveal();
        
        initLoadingScreen();
    } catch (e) {
        console.error("Error initializing app components:", e);
    }
}

// Loading logic
function initLoadingScreen() {
    let isReadySequenceStarted = false;
    const loadingScreen = document.getElementById('loading-screen');
    const btn = document.getElementById('open-invitation');
    const bgMusic = document.getElementById('bg-music');
    const loaderText = document.querySelector('.loader-text');

    if (!loadingScreen) return;

    function enableOpenButton() {
        if (isReadySequenceStarted) return;
        isReadySequenceStarted = true;

        if (loaderText) loaderText.style.display = 'none';
        if (btn) {
            btn.style.opacity = '1';
            btn.style.pointerEvents = 'auto';
            btn.addEventListener('click', () => {
                loadingScreen.style.opacity = '0';
                loadingScreen.style.visibility = 'hidden';
                document.body.style.overflow = 'auto';
            });
        }
    }

    if (bgMusic && bgMusic.readyState < 3) {
        bgMusic.addEventListener('canplaythrough', enableOpenButton);
        setTimeout(enableOpenButton, 8000); 
    } else {
        setTimeout(enableOpenButton, 1500);
    }
}

document.addEventListener('componentsLoaded', () => {
    initApp();
});
