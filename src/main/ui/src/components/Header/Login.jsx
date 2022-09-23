import  { React, useState } from 'react';
import { Button, Modal, Form, Alert } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Register from './Register';

export default function Login() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInput,setUserInput]=useState({
  email: "",
  password: ""
  })
  const [formErrors, setFormErrors] = useState(null);
  const [user, setUser] = useState(null);
  const [alertShow, setAlertShow] = useState(false);
    const [show, setShow] = useState(false);


const handleChange = (e) => {
setUserInput({...userInput, [e.target.name]:e.target.value});
}

const handleSubmit = (e) => {
    e.preventDefault();
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
 setFormErrors("Email or password incorrect.")
 setAlertShow(true);
 }
        })
}

  const handleClose = () => setShow(false);
  const handleShow = (event) => {
    setShow(true);
    event.preventDefault();
  };

    const handleLogout = (event) => {
      setIsLoggedIn(false)
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
               <Alert show={alertShow} variant="danger" >{formErrors}</Alert>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange= {handleChange}
                value={userInput.email}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange= {handleChange}
                value={userInput.password}
/>
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