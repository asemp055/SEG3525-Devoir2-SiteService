document.addEventListener('DOMContentLoaded', function() {
    // Création du modal
    const modal = document.createElement('div');
    modal.className = 'booking-modal';
    modal.id = 'bookingModal';
    modal.style.display = 'none';

    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <h2>Réserver une Création Capillaire</h2>
            <form id="bookingForm">
                <div class="form-group">
                    <label for="serviceType">Type de Service:</label>
                    <select id="serviceType" required>
                        <option value="">Choisissez votre style</option>
                        <option value="box-braids">Box Braids</option>
                        <option value="fulani">Fulani Braids</option>
                        <option value="vanilles">Vanilles/Twists</option>
                        <option value="dreads">Dreads</option>
                        <option value="accessoires">Pose d'Accessoires</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="appointmentDate">Date:</label>
                    <input type="date" id="appointmentDate" required>
                </div>
                
                <div class="form-group">
                    <label for="appointmentTime">Heure:</label>
                    <select id="appointmentTime" required>
                        <option value="">Sélectionnez une heure</option>
                        <option value="09:00">9:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                    </select>
                </div>
                
                <button type="submit" class="btn-submit">Confirmer la Réservation</button>
            </form>
        </div>
    `;

    document.body.appendChild(modal);

    // Gestion des événements
    document.querySelector('.btn-book').addEventListener('click', function() {
        modal.style.display = 'block';
    });

    document.querySelector('.close-btn').addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Soumission du formulaire
    document.getElementById('bookingForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Réservation confirmée! Nous vous contacterons pour confirmation.');
        modal.style.display = 'none';
    });
}); bookingModal.js
