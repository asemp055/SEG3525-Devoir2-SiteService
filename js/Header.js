//Adriane barre de navigation en haut 
/**
 * COMPOSANT : HEADER (Adriane)
 * Rôle : Barre de navigation fixe avec logo et menu
 * À faire :
 * - Ajouter les liens (Accueil, Services, Galerie, Contact)
 * - Style : Couleur foncée, logo centré
 * - Responsive (Bootstrap)
 */
-document.addEventListener('DOMContentLoaded', function() {
    const header = document.createElement('header'); // L'élément HTML doit être en minuscule
    header.className = 'header'; // La classe CSS en minuscule
    
    header.innerHTML = `
        <nav class="navbar">
            <div class="logo">Madri Braids</div>
            <ul class="nav-links">
                <li><a href="/">Accueil</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#team">Équipe</a></li>
                <li><a href="#about">À PROPOS</a></li>
                <li><button class="btn-book">Prendre RDV</button></li>
            </ul>
        </nav>
    `;
    
    document.getElementById('header').appendChild(header);
});