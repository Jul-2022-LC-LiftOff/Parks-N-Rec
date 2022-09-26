import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { states } from '../../states';

export default function ViewByState() {
  return (
    <Container className="fluid  p-3">
      <h1> View Parks by State</h1>
      <Row xs={3} md={3} className="g-3 m-5">
        {states.map((state, index) => (
          <div key={index}>
            <Col>
              <a href="url">{state.name}</a>
            </Col>
          </div>
        ))}
      </Row>
    </Container>
  );
}
