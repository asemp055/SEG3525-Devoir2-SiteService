document.addEventListener('DOMContentLoaded', function() {
    const teamData = [
        {
            name: "Adriane",
            specialty: "Tresses Collées & Fulani",
            image: "assets/images/adriane.jpg",
            bio: "10 ans d'expérience en tresses traditionnelles"
        },
        {
            name: "Marie",
            specialty: "Vanilles & Protections",
            image: "assets/images/marie.jpg",
            bio: "Spécialiste des soins capillaires naturels"
        },
        {
            name: "Marie.T",
            specialty: "Dreads & Locs",
            image: "assets/images/Marie T.jpg",
            bio: "Artiste certifiée en dreadlocks"
        }
    ];

    const teamContainer = document.getElementById('teamMembers');
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    modalOverlay.innerHTML = `
        <div class="modal-content">
            <h3>Confirmer votre choix</h3>
            <p id="modalText"></p>
            <button class="btn btn-gold" id="confirmBooking">Prendre RDV</button>
            <button class="btn btn-transparent" id="cancelSelection">Annuler</button>
        </div>
    `;
    document.body.appendChild(modalOverlay);

    // Générer les membres de l'équipe
    teamData.forEach(member => {
        const memberElement = document.createElement('div');
        memberElement.className = 'team-member';
        memberElement.innerHTML = `
            <div class="member-image">
              <img src="${member.image}" alt="${member.name}" onerror="this.style.display='none'">
              <div class="image-placeholder"></div>
            </div>
            <div class="member-info">
                <h3>${member.name}</h3>
                <span class="member-specialty">${member.specialty}</span>
                <p>${member.bio}</p>
                <button class="select-btn" data-member="${member.name}">Sélectionner</button>
            </div>
        `;
        teamContainer.appendChild(memberElement);
    });

    // Gestion des événements
    document.querySelectorAll('.select-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const memberName = this.getAttribute('data-member');
            document.getElementById('modalText').textContent = 
                `Vous avez sélectionné ${memberName} pour votre prochain RDV. Souhaitez-vous continuer vers le calendrier de réservation?`;
            modalOverlay.style.display = 'flex';
        });
    });

    document.getElementById('confirmBooking').addEventListener('click', function() {
        // Rediriger vers le système de réservation
        window.location.href = "#booking";
    });

    document.getElementById('cancelSelection').addEventListener('click', function() {
        modalOverlay.style.display = 'none';
    });
});