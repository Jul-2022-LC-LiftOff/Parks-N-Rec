import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { states } from "../../data";

export default function StateDropdown() {
	return (
		<Nav>
			<NavDropdown id="nav-dropdown" title="View by State" menuVariant="dark">
				{states.map((item, index) => (
					<NavDropdown.Item href="" key={index}>
						{item.name}{" "}
					</NavDropdown.Item>
				))}

				<NavDropdown.Divider />
				<NavDropdown.Item href="">View All Parks</NavDropdown.Item>
			</NavDropdown>
		</Nav>
	);
}
