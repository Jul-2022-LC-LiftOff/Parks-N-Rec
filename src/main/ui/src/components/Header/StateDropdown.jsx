import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { states } from "../../data";
import { Link } from "react-router-dom";

       function StateDropdown({setState, state}) {

         const handleChange = (e) => {
            const selectedState = e.target.value;
            setState(selectedState);
         }

	return (
		<Nav>
                <NavDropdown name="stateSelecter"  title="View by state" >
                   {
                     states.map (data => (
                        <NavDropdown.Item as={Link} to="/results" onChange={handleChange} value={state} key={data.abbreviation} > {data.name} </NavDropdown.Item>
                         ))
                   }
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="">View All Parks</NavDropdown.Item>
                </NavDropdown>
		</Nav>
	);
};


export default StateDropdown;