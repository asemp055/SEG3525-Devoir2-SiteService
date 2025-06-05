document.addEventListener('DOMContentLoaded', function () {
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

                <div class="form-group">
                    <label for="coiffeuse">Coiffeuse :</label>
                    <select id="coiffeuse" required>
                        <option value="">Choisissez votre coiffeuse</option>
                        <option value="Marie Haby">Marie Haby</option>
                        <option value="Adriane">Adriane</option>
                        <option value="Marie.T">Marie.T</option>
                    </select>
                </div>
                
                <button type="submit" class="btn-submit">Confirmer la Réservation</button>
            </form>
        </div>
    `;

    document.body.appendChild(modal);

    // Affichage du modal
    document.querySelectorAll('.open-booking, .btn-book').forEach(button => {
        button.addEventListener('click', function () {
            modal.style.display = 'block';
        });
    });

    // Fermeture du modal
    modal.querySelector('.close-btn').addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Soumission du formulaire
    document.getElementById('bookingForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const service = document.getElementById('serviceType').value;
        const date = document.getElementById('appointmentDate').value;
        const time = document.getElementById('appointmentTime').value;
        const coiffeuse = document.getElementById('coiffeuse').value;

        alert(
          `🎉 Réservation confirmée !\n\n✅ Service : ${service}\n📅 Date : ${date}\n🕒 Heure : ${time}\n💇🏽‍♀️ Coiffeuse : ${coiffeuse}`
        );

        modal.style.display = 'none';
        this.reset();
    });
});
