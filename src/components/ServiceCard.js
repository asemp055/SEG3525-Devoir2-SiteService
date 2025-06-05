import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ServiceCard = ({ service, onBook }) => {
  return (
    <Card className="service-card mb-4">
      <Card.Body>
        <Card.Title>{service.name}</Card.Title>
        <Card.Text>{service.description}</Card.Text>
        <p><strong>Prix :</strong> {service.price} $</p>
        <p><strong>Durée :</strong> {service.duration}</p>
        <Button
          variant="primary"
          onClick={() => onBook(service.name)}
        >
          Réserver
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;
