import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
  let isValid = true;
  const [formErrors, setFormErrors] = useState({});
  const [password,setPassword]=useState('')
  const [email,setEmail]=useState('')
  const [validated, setValidated]=useState("");
    const [user, setUser] = useState([]);


useEffect(() =>{
    loadUsers()
}, [])


const  loadUsers = () => {
       fetch("http://localhost:8080/user/getAll", {
                   method: "GET",
                   headers:{"Content-Type":"application/json"},
               }).then(() => {
                    setUser()
//                    console.log("User data fetched")
               })
    }




  const validateForm = (email, password) => {

    const error = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;


//     if (!email) {
//       error.email = 'Email is required';
//       isValid = false;
//
//     } else if (!regex.test(email)) {
//         error.email = 'Please enter a valid email address';
//         isValid = false;
//     }
//     if (!password) {
//         isValid = false;
//         error.password = 'Password is required';
//     }
    return error;
  };



  const loginHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(email, password, validated) );
    console.log(user);

    if (isValid) {

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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button  variant="primary" onClick={loginHandler}>
            Sign In
          </Button>

        </Modal.Footer>
      </Modal>
    </div>
  );
}
