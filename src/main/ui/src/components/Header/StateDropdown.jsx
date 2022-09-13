import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { states } from "../../data";
import {useState} from 'react';
import { Link } from "react-router-dom";

export default function StateDropdown(props) {
        const [data, setData] = React.useState([]);
        const [selectState, setSelect] = useState('');
         React.useEffect(() => {
         let url = `https://developer.nps.gov/api/v1/parks?parkCode="all"&limit=469&api_key=JMZizGv6gAcjBzoD4TbqW9RQSe9K8fEt9Cdb2Zta`;
         fetch(url)
             .then((response) => response.json())
             .then((json) => {
                 setData(json.data);
             })
         .catch((error) => console.log(error));
     }, [selectState]);

         if (data.length > 0) {
             data.filter((parkApi) => {
                 return parkApi.states.match(data);
             });
         }

	return (
		<Nav>
                <NavDropdown name="stateSelecter"  title="View by state" >
                   {
                     states.map (data => (
                        <NavDropdown.Item as={Link} to="/results" key={data.abbreviation} onChange={e=> setSelect(e.target.value)} value={props.selectState}> {data.name} </NavDropdown.Item>
                         ))
                   }

                    <NavDropdown.Divider />
                    <NavDropdown.Item href="">View All Parks</NavDropdown.Item>
                </NavDropdown>

		</Nav>

	);
console.log(props.selectState)
}
