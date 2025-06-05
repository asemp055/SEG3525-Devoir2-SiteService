// src/pages/Home.js

import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { services } from '../data/services';
import BookingModal from '../components/BookingModal';
import ServiceCard from '../components/ServiceCard';
import Hero from '../components/Hero';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState('');

  const handleBook = (style) => {
    setSelectedStyle(style);
    setShowModal(true);
  };

  return (
    <>
      <Hero onBookClick={() => handleBook('')} />
      <Container className="my-5">
        <h2 className="text-center mb-4">Nos Services</h2>
        <Row>
          {services.map((service) => (
            <Col md={4} key={service.id}>
              <ServiceCard service={service} onBook={handleBook} />
            </Col>
          ))}
        </Row>
      </Container>

      <BookingModal
        show={showModal}
        onHide={() => setShowModal(false)}
        defaultStyle={selectedStyle}
      />
    </>
  );
};

export default Home;
