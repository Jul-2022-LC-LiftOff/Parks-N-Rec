import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Register() {
  let isValid = true;
  const [formErrors, setFormErrors] = useState({});
  const [password,setPassword]=useState('')
  const [email,setEmail]=useState('')
  const [validated, setValidated]=useState("");

  const validateForm = (email, password, verifyPassword) => {

    const error = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!email) {
      error.email = 'Email is required';
      isValid = false;

    } else if (!regex.test(email)) {
        error.email = 'Please enter a valid email address';
        isValid = false;
    }
    if (!password) {
        isValid = false;
        error.password = 'Password is required';
    } if (!verifyPassword) {
            error.verifyPassword = 'Confirm Password is required';
            isValid = false;
          } else if (verifyPassword !== password) {
          isValid = false;
            error.verifyPassword = 'Confirm password and password should be same';
          }
    return error;
  };



  const registerHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(email, password, validated) );
    console.log(isValid);

    if (isValid) {
        const login={password,email}
        console.log(login)
        fetch("http://localhost:8080/register/add", {
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(login)
        }).then(() => {
            console.log("New user added")
        })
//         handleClose();
    }

//     setIsSubmit(true);

  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (event) => {
    setShow(true);
    event.preventDefault();
  };

  return (
    <div>
      <div  style={{ display: 'block', height: 49 }}>
        <Button  href="login" variant="primary" onClick={handleShow}>
          Login
        </Button>
      </div>

      {/* log in modal - same as your form but uses a pre-made react-bootstrap component so it works as a popup */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange= {(e) => setEmail(e.target.value)}
                value={email}
              />
              <p>{formErrors.email}</p>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange= {(e) => setPassword(e.target.value)}
                value={password}
              />
              <p>{formErrors.password}</p>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Verify Password</Form.Label>
              <Form.Control
                type="password"
                name="verifyPassword"
                id="verifyPassword"
                placeholder="Confirm Password"
                onChange= {(e) => setValidated(e.target.value)}
                value={validated}
              />
              <p>{formErrors.verifyPassword}</p>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button  variant="primary" onClick={registerHandler}>
            Sign Up
          </Button>

        </Modal.Footer>
      </Modal>
    </div>
  );
}
