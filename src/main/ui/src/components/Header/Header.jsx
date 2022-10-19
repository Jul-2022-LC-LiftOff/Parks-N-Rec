import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { Alert, Button, Form, Modal } from "react-bootstrap";
import About from "./About";
import Login from "./Login";
import StateDropdown from "./StateDropdown";



export const Header = () => {
	return (
		<Navbar variant="light" bg="light" expand="lg">
			<Container fluid>
				<Navbar.Brand href="/Home">
					<img
						src="headerlogo.svg"
						width="30"
						height="30"
                        className="logo"
						alt="React Bootstrap logo"
					></img>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbar" />
				<Navbar.Collapse id="navbar">
					<Nav>
						<StateDropdown />
					</Nav>
				</Navbar.Collapse>
				<Navbar.Toggle aria-controls="navbar" />
				<Navbar.Collapse id="navbar">
				</Navbar.Collapse>
                <div style={{ display: "block", height: 49 }}>
						<Button href="about" variant="primary" >
							About
						</Button>&nbsp;&nbsp;&nbsp;
					</div>
					<Login />

			</Container>
		</Navbar>
	);
};
