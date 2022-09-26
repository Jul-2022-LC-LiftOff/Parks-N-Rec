import React from "react";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { states } from "../../states";

export default function ViewByState() {
  const navigate = useNavigate();
  const { value, setValue } = useContext(UserContext);

  return (
    <Container className="fluid  p-3">
      <h1> View Parks by State</h1>
      <Row xs={3} md={3} className="g-3 m-5">
        {states.map((state, index) => (
          <div key={index}>
            <Col>
              <button
                onClick={function setSingleState() {
                  setValue(state.abbreviation);
                  navigate("/singleStateView");
                }}
              >
                {state.name}
              </button>
            </Col>
          </div>
        ))}
      </Row>
    </Container>
  );
}
