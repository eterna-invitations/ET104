// ==========================================
// WEDDING CONFIGURATION OBJECT
// Edit this object to customize the website
// ==========================================
const weddingData = {
    groomName: "Khaled",
    brideName: "Soha",
    // Date format: YYYY-MM-DDTHH:MM:SS
    date: "2026-05-23T20:00:00",
    displayDate: "May 23, 2026",
    time: "8:00 PM",
    location: "El-Sayed Hall - El-Mahalla El-Kubra",
    quote: "“Whatever our souls are made of, his and mine are the same.” – Emily Brontë",

    // Images
    heroImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1920",
    groomImage: "./assets/images/groom.jpg",
    brideImage: "./assets/images/bride.jpg",

    // Gallery Images
    images: [
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600"
    ],
    // Optional Sections Data
    showStory: true,
    ourStory: [
        { date: "June 2018", title: "First Meeting", description: "It was a warm summer evening when we first met at a small coffee shop in downtown. Time seemed to stand still." },
        { date: "August 2019", title: "First Vacation", description: "Our memorable trip to Paris, where we explored the city of love and realized we were meant for each other." },
        { date: "December 2021", title: "The Proposal", description: "Underneath a sky full of stars and the soft glow of fairy lights, he got down on one knee and asked the most important question." },
        { date: "May 2026", title: "The Wedding", description: "The beginning of our forever. We can't wait to celebrate our eternal love surrounded by our favorite people." }
    ],

    showMap: true,
    mapIframeUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2407.6574378467444!2d31.171061716858443!3d30.950729829239197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7bb580edbc6f9%3A0x83199d2bd50ea38f!2z2YbYp9iv2Ykg2KfZhNi12YrYryDYqNin2YTZhdit2YTYqSDYp9mE2YPYqNix!5e1!3m2!1sar!2seg!4v1776443919511!5m2!1sar!2seg",

    showNotices: true,
    notices: [
        { icon: "fa-ban", title: "Adults Only", description: "We politely request no children at the venue to allow all guests to relax and enjoy the evening." },
        { icon: "fa-champagne-glasses", title: "Dress Code", description: "Formal Evening Attire. Please avoid wearing white out of respect for the bride." },
        { icon: "fa-gift", title: "Registry & Gifts", description: "Your presence is our biggest gift! However, if you wish to honor us with a gift, a wishing well will be available at the reception." }
    ]
};
