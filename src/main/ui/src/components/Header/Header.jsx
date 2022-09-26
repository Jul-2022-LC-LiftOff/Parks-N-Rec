import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import LoginPage from "./Login";
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
				<LoginPage />

			</Container>
		</Navbar>
	);
};
