import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
  const [userInput,setUserInput]=useState({
  email: "",
  password: ""
  })
  const [user, setUser] = useState([]);




  const validateUserInput = (userInput) => {

    for (const key in user) {
        if (key.email === userInput.email) {
        return console.log(userInput.email + key.email + "matched")

    }  }
    };
// loop through user.email til you find a match to emailInput
// then compare (&& user.password to passwordInput) or throw incorrect password, redirect back to cleared login page




const handleChange = (e) => {
setUserInput({...userInput, [e.target.name]:e.target.value});
}

const handleSubmit = (e) => {
    e.preventDefault();
    validateUserInput(userInput);
    fetch("http://localhost:8080/login/hi", {
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(userInput)
        }).then(res => res.json()).then( res => {
            console.log(res);
            console.log("New user added")
        })
}



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
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange= {handleChange}
                value={userInput.email}
              />
{/*               <p>{formErrors.email}</p> */}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange= {handleChange}
                 value={userInput.password}/>
{/*               <p>{formErrors.password}</p> */}
            </Form.Group>
            <Button type="submit" variant="primary"  >
                        Sign In
                      </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
};