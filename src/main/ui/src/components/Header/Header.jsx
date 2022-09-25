import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import LoginPage from "./Login";
import SearchBar from "../SearchBar/SearchBar";
import StateDropdown from "./StateDropdown";

export const Header = () => {
	return (
		<Navbar variant="light" bg="light" expand="lg">
			<Container fluid>
				<Navbar.Brand href="/Home">Park It</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbar" />
				<Navbar.Collapse id="navbar">
					<Nav>
						<SearchBar />
						<StateDropdown />
					</Nav>
				</Navbar.Collapse>
				<LoginPage />
			</Container>
		</Navbar>
	);
};
