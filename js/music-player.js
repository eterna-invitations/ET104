let musicBtn, bgMusic, isMusicPlaying = false;
const startMusicAtSeconds = 15;
const maxVolume = 1.0;
const fadeSpeed = 0.02;

function initMusicPlayer() {
    musicBtn = document.getElementById('music-toggle');
    bgMusic = document.getElementById('bg-music');

    if (!musicBtn || !bgMusic) return;

    musicBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMusic();
    });

    // Play softly with fade-in on user's first interaction
    window.addEventListener('click', () => {
        if (!isMusicPlaying) {
            playWithFadeIn();
        }
    }, { once: true });
}

function playWithFadeIn() {
    if (!bgMusic) return;
    bgMusic.volume = 0;

    try {
        bgMusic.currentTime = startMusicAtSeconds;
    } catch (e) { }

    bgMusic.play().then(() => {
        isMusicPlaying = true;
        musicBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';

        let currentVol = 0;
        const fadeIn = setInterval(() => {
            if (currentVol < maxVolume) {
                currentVol = Math.min(currentVol + fadeSpeed, maxVolume);
                bgMusic.volume = currentVol;
            } else {
                clearInterval(fadeIn);
            }
        }, 100);
    }).catch(err => {
        console.log("Autoplay blocked by browser until user interaction.");
    });
}

function toggleMusic() {
    if (!bgMusic || !musicBtn) return;
    if (isMusicPlaying) {
        bgMusic.pause();
        musicBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    } else {
        bgMusic.play();
        bgMusic.volume = maxVolume; // Restore full volume on manual play
        musicBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    }
    isMusicPlaying = !isMusicPlaying;
}
