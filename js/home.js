// home.js - Page d'accueil dynamique pour Madri Braids
document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('#main-content');
    
    // 1. Hero Section (Bannière principale)
    mainContent.innerHTML = `
        <section class="hero-section">
            <div class="hero-overlay">
                <h1>Madri Braids</h1>
                <p class="tagline">L'art des tresses africaines, héritage et modernité</p>
                <a href="/booking" class="btn btn-hero">Prendre RDV</a>
            </div>
        </section>

        <!-- 2. Section Services -->
        <section class="services-section">
            <h2 class="section-title">Nos Savoir-Faire</h2>
            <div class="services-grid" id="services-container"></div>
        </section>

        <!-- 3. Bandeau Engagement -->
        <div class="commitment-banner">
            <p>"Parce que nos cheveux méritent une plateforme qui leur ressemble."</p>
        </div>

        <!-- 4. Galerie Prévisualisation -->
        <section class="gallery-preview">
            <h2 class="section-title">Nos Réalisations</h2>
            <div class="gallery-grid" id="gallery-container"></div>
            <a href="/gallery" class="btn btn-gallery">Voir plus</a>
        </section>
    `;

    // Chargement dynamique des services
    const servicesContainer = document.getElementById('services-container');
    const services = [
        { name: "Tresses Collées", desc: "Box braids, Fulani, Cornrows...", icon: "✧" },
        { name: "Vanilles & Twists", desc: "Protection légère et élégante", icon: "✧" },
        { name: "Pose de Perles", desc: "Accessoires personnalisés", icon: "✧" }
    ];

    services.forEach(service => {
        servicesContainer.innerHTML += `
            <div class="service-card">
                <span class="service-icon">${service.icon}</span>
                <h3>${service.name}</h3>
                <p>${service.desc}</p>
            </div>
        `;
    });

    // Chargement dynamique de la galerie (3 images)
    const galleryContainer = document.getElementById('gallery-container');
    for (let i = 1; i <= 3; i++) {
        galleryContainer.innerHTML += `
            <img src="assets/images/gallery-${i}.jpg" alt="Tresse africaine ${i}" class="gallery-img">
        `;
    }
});