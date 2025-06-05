document.addEventListener('DOMContentLoaded', function() {
    // Animation d'entrée
    gsap.from('.hero h1', { 
        duration: 1, 
        y: 50, 
        opacity: 0, 
        ease: 'power3.out' 
    });
    
    // Gestion du bouton RDV
    document.querySelector('.open-booking').addEventListener('click', function() {
        // À connecter avec votre bookingModal.js
        console.log('Ouverture du formulaire de RDV');
        // Exemple: new BookingModal().open();
    });
         // Animation d'entrée
    gsap.from(".hero-content", {
         duration: 1.5,
         y: 50,
         opacity: 0,
         ease: "power3.out",
         stagger: 0.2
    });
    
});