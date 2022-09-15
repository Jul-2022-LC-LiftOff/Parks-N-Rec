import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

export default function Login() {
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    email: '',
    password: ''
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value
    });
  };

  const validateForm = (values) => {
    const error = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fname) {
      error.fname = 'First Name is required';
    }
    if (!values.email) {
      error.email = 'Email is required';
    } else if (!regex.test(values.email)) {
      error.email = 'Please enter a valid email address';
    }
    if (!values.password) {
      error.password = 'Password is required';
    }
    return error;
  };

  const loginHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(user));
    setIsSubmit(true);
    handleClose();
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (event) => {
    setShow(true);
    event.preventDefault();
  };

  return (
    <div>
      <div style={{ display: 'block', height: 49 }}>
        <Button href="login" variant="primary" onClick={handleShow}>
          Login
        </Button>
      </div>

      {/* log in modal - same as your form but uses a pre-made react-bootstrap component so it works as a popup */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log in</Modal.Title>
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
                onChange={changeHandler}
                value={user.email}
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
                onChange={changeHandler}
                value={user.password}
              />
              <p>{formErrors.password}</p>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={loginHandler}>
            Sign In
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
