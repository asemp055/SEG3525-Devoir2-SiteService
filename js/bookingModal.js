/**
 * COMPOSANT : MODAL DE RENDEZ-VOUS (Marie)
 * Rôle : Formulaire interactif de prise de RDV
 * À faire :
 * - Champs : Date, Heure, Type de tresses, Taille des cheveux
 * - Validation : Vérifier que tous les champs sont remplis
 * - Style : Utiliser React-Bootstrap
 */
import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';

const BookingModal = ({ show, onHide }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    style: '',
    length: '',
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const { date, time, style, length } = formData;
    if (!date || !time || !style || !length) {
      setError(true);
    } else {
      setError(false);
      // Traitement ou envoi vers backend ici
      alert('Rendez-vous réservé avec succès !');
      onHide();
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Prendre un rendez-vous</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <Alert variant="danger">Veuillez remplir tous les champs.</Alert>}
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Heure</Form.Label>
            <Form.Control
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Type de tresses</Form.Label>
            <Form.Select
              name="style"
              value={formData.style}
              onChange={handleChange}
              required
            >
              <option value="">Choisissez un style</option>
              <option value="Box Braids">Box Braids</option>
              <option value="Vanilles">Vanilles</option>
              <option value="Twists">Twists</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Taille des cheveux</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ex : Mi-longs, crépus..."
              name="length"
              value={formData.length}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Annuler</Button>
        <Button variant="primary" onClick={handleSubmit}>Confirmer</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BookingModal;
