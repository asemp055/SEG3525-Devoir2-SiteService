document.addEventListener('DOMContentLoaded', function() {
    const servicesSection = document.createElement('section');
    servicesSection.className = 'services-section';
    servicesSection.id = 'services';

    servicesSection.innerHTML = `
        <div class="container">
            <h2>Nos Services Exclusifs</h2>
            <div class="services-grid">
                <div class="service-card">
                    <img src="assets/images/box-braids.jpg" alt="Box Braids">
                    <h3>Tresses Collées</h3>
                    <p>Box braids, Fulani braids, cornrows et plus. Protection 4-6 semaines.</p>
                    <p class="price">À partir de 120$</p>
                </div>
                
                <div class="service-card">
                    <img src="assets/images/vanilles.jpg" alt="Vanilles">
                    <h3>Vanilles & Twists</h3>
                    <p>Style doux et naturel pour cheveux texturés. Durée 2-3 semaines.</p>
                    <p class="price">À partir de 80$</p>
                </div>
                
                <div class="service-card">
                    <img src="assets/images/accessoires.jpg" alt="Accessoires">
                    <h3>Pose d'Accessoires</h3>
                    <p>Perles, cauris et bijoux pour personnaliser vos tresses.</p>
                    <p class="price">À partir de 15$</p>
                </div>
            </div>
        </div>
    `;

    document.getElementById('root').appendChild(servicesSection);
});services.js
