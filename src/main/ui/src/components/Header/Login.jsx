import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import Register from './Register';

export default function Login() {
  let isValid = true;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInput,setUserInput]=useState({
  email: "",
  password: ""
  })
  const [user, setUser] = useState(null);
//   const [userEmail, setUserEmail] = useState([]);


const handleChange = (e) => {
setUserInput({...userInput, [e.target.name]:e.target.value});
}

const handleSubmit = (e) => {
    e.preventDefault();
//     validateUserInput(userInput);
    fetch("http://localhost:8080/login/hi", {
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(userInput)
        }).then(res => res.json()).then( res => {
            console.log(res);
             setUser(res)
            if (user !== null){
            console.log("User signed in")
             setIsLoggedIn(true);
 handleClose();
 } else {
 console.log("error");
 }
        })

        console.log(isLoggedIn);
}


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (event) => {
    setShow(true);
    event.preventDefault();
  };

    const handleLogout = (event) => {
      isLoggedIn = false;
      event.preventDefault();
      setUser(null);
    };

  return (
    <div>
  <div>{isLoggedIn ? (<div  style={{ display: 'block', height: 49 }}>
     <Button  href="/" variant="primary" onClick={handleLogout} >
       Logout
      </Button>
  </div>):(<div  style={{ display: 'block', height: 49 }}>
   <Button  href="login" variant="primary" onClick={handleShow}>
      Login
</Button>
 </div>)}</div>

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
            <Button type="submit" variant="primary" className="mb-4" >
                        Sign In
            </Button>

          <Register className="text-center" />

          </Form>
            
        </Modal.Body>
      </Modal>
    </div>
  )
};