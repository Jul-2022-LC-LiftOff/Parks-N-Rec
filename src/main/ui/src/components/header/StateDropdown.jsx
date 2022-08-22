import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { states } from "../../data";

export default function StateDropdown() {
	return (
		<Nav>
			<NavDropdown id="nav-dropdown" title="View by State" menuVariant="dark">
				{states.map((item) => (
					<NavDropdown.Item href="" key={item.id}>
						{item.name}{" "}
					</NavDropdown.Item>
				))}

				<NavDropdown.Divider />
				<NavDropdown.Item href="">View All Parks</NavDropdown.Item>
			</NavDropdown>
		</Nav>
	);
}
