function initCountdown() {
    const safeDate = weddingData.date.replace(/-/g, '/').replace('T', ' ');
    const weddingDate = new Date(safeDate).getTime();

    function updateDisplay() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        const countdownContainer = document.querySelector('.countdown-container');
        if (!countdownContainer) return false;

        if (distance < 0) {
            countdownContainer.innerHTML = "<h3>Just Married!</h3>";
            return true; // Stop interval
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const dEl = document.getElementById('days');
        const hEl = document.getElementById('hours');
        const mEl = document.getElementById('minutes');
        const sEl = document.getElementById('seconds');

        if(dEl) dEl.textContent = days.toString().padStart(2, '0');
        if(hEl) hEl.textContent = hours.toString().padStart(2, '0');
        if(mEl) mEl.textContent = minutes.toString().padStart(2, '0');
        if(sEl) sEl.textContent = seconds.toString().padStart(2, '0');
        return false;
    }

    if (!updateDisplay()) {
        setInterval(updateDisplay, 1000);
    }
}
