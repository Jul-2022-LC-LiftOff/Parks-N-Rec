import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { states } from "../../data";

class StateDropdown extends Component {
	render() {
		return (
			<Nav>
				<NavDropdown
					id="nav-dropdown-dark-example"
					title="View by State"
					menuVariant="dark"
				>
					{states.map((item) => (
						<NavDropdown.Item href="#action/3.1" key={item.id}>
							{item.name}{" "}
						</NavDropdown.Item>
					))}

					<NavDropdown.Divider />
					<NavDropdown.Item href="#action/3.4">View All Parks</NavDropdown.Item>
				</NavDropdown>
			</Nav>
		);
	}
}

export default StateDropdown;
