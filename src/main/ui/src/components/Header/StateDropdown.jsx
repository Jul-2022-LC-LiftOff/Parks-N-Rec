import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

       function StateDropdown() {

	return (
		<Nav>
                <NavDropdown name="stateSelecter"  title="Search"  >
                        <NavDropdown.Item as={Link} to="/SearchByName"  > Search by name </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/SearchByState"  > Search by State </NavDropdown.Item>
                </NavDropdown>

		</Nav>


	);
};


export default StateDropdown;