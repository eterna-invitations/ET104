async function loadComponent(placeholderId, filePath) {
    const placeholder = document.getElementById(placeholderId);
    if (!placeholder) return;
    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const html = await response.text();
        placeholder.outerHTML = html;
    } catch (e) {
        console.error('Error loading ' + filePath, e);
    }
}

async function loadAllComponents() {
    await Promise.all([
        loadComponent('loading-screen-placeholder', 'components/loading-screen.html'),
        // No placeholder for particles, let JS create it or just add it in index.html
        loadComponent('hero-placeholder', 'components/hero.html'),
        loadComponent('couple-placeholder', 'components/couple.html'),
        loadComponent('story-placeholder', 'components/story.html'),
        loadComponent('event-placeholder', 'components/event.html'),
        loadComponent('map-placeholder', 'components/map.html'),
        loadComponent('gallery-placeholder', 'components/gallery.html'),
        loadComponent('lightbox-placeholder', 'components/lightbox.html'),
        loadComponent('notices-placeholder', 'components/notices.html'),
        loadComponent('footer-placeholder', 'components/footer.html')
    ]);
    
    // Once everything is loaded, we dispatch a custom event
    document.dispatchEvent(new Event('componentsLoaded'));
}

// Start loading immediately
loadAllComponents();
