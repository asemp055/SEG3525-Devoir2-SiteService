// src/components/Hero.js

import React, { useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import gsap from 'gsap';

const Hero = ({ onBookClick }) => {
  useEffect(() => {
    gsap.from(".hero-title", { duration: 1, y: 50, opacity: 0, ease: "power3.out" });
    gsap.from(".hero-subtitle", { duration: 1, y: 40, opacity: 0, ease: "power3.out", delay: 0.3 });
    gsap.from(".hero-buttons", { duration: 1, y: 30, opacity: 0, ease: "power3.out", delay: 0.6 });
  }, []);

  return (
    <section className="hero bg-light text-center py-5">
      <Container>
        <h1 className="hero-title display-4 mb-3">L'Art des Tresses Africaines</h1>
        <p className="hero-subtitle lead mb-4">
          SALON COMPLET | TRESSES AFRICAINES | SOINS CAPILLAIRES
        </p>
        <div className="hero-buttons">
          <Button variant="outline-dark" className="me-3" href="#services">
            Nos Services
          </Button>
          <Button variant="primary" onClick={onBookClick}>
            Prendre RDV
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
