import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

export default function Register() {
	const [formErrors, setFormErrors] = useState({});
	const [setIsSubmit] = useState(false);
	const [user, setUserDetails] = useState({
		email: "",
		password: "",
		verifyPassword: "",
	});

	const changeHandler = (e) => {
		const { name, value } = e.target;
		setUserDetails({
			...user,
			[name]: value,
		});
	};

	const validateForm = (values) => {
		const error = {};
		const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;

		if (!values.email) {
			error.email = "Email is required";
		} else if (!regex.test(values.email)) {
			error.email = "This is not a valid email format!";
		}
		if (!values.password) {
			error.password = "Password is required";
		} else if (values.password.length < 4) {
			error.password = "Password must be more than 4 characters";
		} else if (values.password.length > 10) {
			error.password = "Password cannot exceed more than 10 characters";
		}
		if (!values.verifyPassword) {
			error.verifyPassword = "Confirm Password is required";
		} else if (values.verifyPassword !== values.password) {
			error.verifyPassword = "Confirm password and password should be same";
		}
		return error;
	};
	const signupHandler = (e) => {
		e.preventDefault();
		setFormErrors(validateForm(user));
		setIsSubmit(true);
		handleClose();
	};

	//determines whether modal is visible or not
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = (event) => {
		setShow(true);
		event.preventDefault();
	};

	return (
		<>
			{/* button on header that opens the sign up page/modal */}
			<div style={{ display: "block", height: 49 }}>
				<Button href="Register" variant="primary" onClick={handleShow}>
					Sign Up
				</Button>
			</div>

			{/* log in modal - same as your form but uses a pre-made react-bootstrap component so it works as a popup */}
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Sign Up</Modal.Title>
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
						<Form.Group className="mb-3">
							<Form.Label>Verify Password</Form.Label>
							<Form.Control
								type="password"
								name="verifyPassword"
								id="verifyPassword"
								placeholder="Confirm Password"
								onChange={changeHandler}
								value={user.verifyPassword}
							/>
							<p>{formErrors.verifyPassword}</p>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={signupHandler}>
						Sign Up
					</Button>
				</Modal.Footer>
			</Modal>
		</>

		// TODO: Original form code, delete if not needed
		// <div>
		//   <form>
		//     <h1>Create a New Account</h1>

		//     <p>{formErrors.lname}</p>
		//     <input
		//       type="email"
		//       name="email"
		//       id="email"
		//       placeholder="Email"
		//       onChange={changeHandler}
		//       value={user.email}
		//     />
		//     <p>{formErrors.email}</p>
		//     <input
		//       type="password"
		//       name="password"
		//       id="password"
		//       placeholder="Password"
		//       onChange={changeHandler}
		//       value={user.password}
		//     />
		//     <p>{formErrors.password}</p>
		//     <input
		//       type="password"
		//       name="verifyPassword"
		//       id="verifyPassword"
		//       placeholder="Confirm Password"
		//       onChange={changeHandler}
		//       value={user.verifyPassword}
		//     />
		//     <p>{formErrors.verifyPassword}</p>
		//     <button onClick={signupHandler}>Register</button>
		//   </form>
		// </div>
	);
}
