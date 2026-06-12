// ==========================================
// DOM POPULATION
// ==========================================

document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

function populateData() {
    const setElemText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    };
    const setElemSrc = (id, src) => {
        const el = document.getElementById(id);
        if (el) el.src = src;
    };
    const setElemBg = (id, url) => {
        const el = document.getElementById(id);
        if (el) el.style.backgroundImage = `url('${url}')`;
    };

    // Hero
    setElemText('hero-bride-name', weddingData.brideName);
    setElemText('hero-groom-name', weddingData.groomName);
    setElemBg('hero', weddingData.heroImage);

    // Couple
    setElemText('couple-quote', weddingData.quote);
    setElemSrc('bride-img', weddingData.brideImage);
    setElemText('bride-name-display', weddingData.brideName);
    setElemSrc('groom-img', weddingData.groomImage);
    setElemText('groom-name-display', weddingData.groomName);

    // Event
    setElemText('event-date', weddingData.displayDate);
    setElemText('event-time', weddingData.time);
    setElemText('event-location', weddingData.location);

    // Footer
    const bNameEl = document.querySelector('.footer-names .b-name');
    if (bNameEl) bNameEl.textContent = weddingData.brideName;

    const gNameEl = document.querySelector('.footer-names .g-name');
    if (gNameEl) gNameEl.textContent = weddingData.groomName;

    // Gallery
    const galleryContainer = document.getElementById('gallery-container');
    if (galleryContainer && weddingData.images) {
        weddingData.images.forEach(imgSrc => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            item.innerHTML = `
                <img src="${imgSrc}" alt="Wedding Moment" loading="lazy">
                <div class="gallery-overlay">
                    <i class="fa-solid fa-expand"></i>
                </div>
            `;
            item.addEventListener('click', () => openLightbox(imgSrc));
            galleryContainer.appendChild(item);
        });
    }

    // Story
    if (weddingData.showStory && weddingData.ourStory.length > 0) {
        document.getElementById('story-section').classList.remove('hidden');
        const storyContainer = document.getElementById('story-container');
        weddingData.ourStory.forEach((story, index) => {
            storyContainer.innerHTML += `
                <div class="timeline-item reveal ${index % 2 === 0 ? 'reveal-left' : 'reveal-right'}">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content glass-panel">
                        <span class="timeline-date">${story.date}</span>
                        <h3 class="timeline-title">${story.title}</h3>
                        <p>${story.description}</p>
                    </div>
                </div>
            `;
        });
    }

    // Map
    if (weddingData.showMap && weddingData.mapIframeUrl) {
        document.getElementById('map-section').classList.remove('hidden');
        document.getElementById('map-container').innerHTML = `<iframe src="${weddingData.mapIframeUrl}" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
    }

    // Notices
    if (weddingData.showNotices && weddingData.notices.length > 0) {
        document.getElementById('notices-section').classList.remove('hidden');
        const noticesContainer = document.getElementById('notices-container');
        weddingData.notices.forEach(notice => {
            noticesContainer.innerHTML += `
                <div class="notice-card glass-panel reveal reveal-bottom">
                    <i class="fa-solid ${notice.icon} notice-icon"></i>
                    <h3>${notice.title}</h3>
                    <p>${notice.description}</p>
                </div>
            `;
        });
    }
}
