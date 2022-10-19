import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ParkCard = ({ parkData }) => {

  return (
    <Col xs={true} sm={true} md={3} lg={3} className="d-inline-flex m-3 h-100">
      <Card>
        <Card.Img variant="top" src={parkData.images[0].url} />
        <Card.Body>
          <Card.Title>{parkData.fullName}</Card.Title>
          <Card.Text>{parkData.description}</Card.Text>
          <Button href={parkData.url}>Learn More</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ParkCard;
