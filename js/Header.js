//Adriane barre de navigation en haut 
/**
 * COMPOSANT : HEADER (Adriane)
 * Rôle : Barre de navigation fixe avec logo et menu
 * À faire :
 * - Ajouter les liens (Accueil, Services, Galerie, Contact)
 * - Style : Couleur foncée, logo centré
 * - Responsive (Bootstrap)
 */
import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            //src="/assets/images/logo.png" // À ajouter dans public/assets/images/
            width="120"
            height="40"
            className="d-inline-block align-top"
            alt="Madri Braids Logo"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;