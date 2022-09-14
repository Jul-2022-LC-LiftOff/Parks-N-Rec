import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { states } from "../../data";
import { Link } from "react-router-dom";

       function StateDropdown({state},{setState}) {
        const [data, setData] = React.useState([]);
         React.useEffect(() => {
         let url = `https://developer.nps.gov/api/v1/parks?parkCode="all"&limit=469&api_key=JMZizGv6gAcjBzoD4TbqW9RQSe9K8fEt9Cdb2Zta`;
         fetch(url)
             .then((response) => response.json())
             .then((json) => {
                 setData(json.data);
             })
         .catch((error) => console.log(error));
     }, []);

         if (data.length > 0) {
             data.filter((parkApi) => {
                 return parkApi.states.match(data);
             });

         const handleChange = (e) => {
            const selectedState = e.target.value;
            setState(selectedState);
         }

	return (
		<Nav>
                <NavDropdown name="stateSelecter"  title="View by state" onChange={handleChange} value={state}>
                   {
                     states.map (data => (
                        <NavDropdown.Item as={Link} to="/results" key={data.abbreviation} > {data.name} </NavDropdown.Item>
                         ))
                   }
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="">View All Parks</NavDropdown.Item>
                </NavDropdown>
		</Nav>
	);
};
}

export default StateDropdown;