import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { states } from '../../states';
import { Link } from 'react-router-dom';


export default function ViewByState(select, setSelect) {
    

  return (
    <Container className="fluid  p-3">
      <h1> View Parks by State</h1>
        
      <Row xs={3} md={3} className="g-3 m-5">
        {states.map((state, index) => (
          <span key={index}>
            <Col>
            <Link to='/searchByState'  >
              <p value={setSelect}  >{state.name}</p>
              </Link>
            </Col>
          </span>
        ))}
      </Row>
     
      
    </Container>
  );
}
