/**
 * COMPOSANT : MODAL DE RENDEZ-VOUS (Marie)
 * Rôle : Formulaire interactif de prise de RDV
 * À faire :
 * - Champs : Date, Heure, Type de tresses, Taille des cheveux
 * - Validation : Vérifier que tous les champs sont remplis
 * - Style : Utiliser React-Bootstrap
 */
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const BookingModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Prendre un rendez-vous</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Formulaire à implémenter par Marie */}
      </Modal.Body>
    </Modal>
  );
};

export default BookingModal;