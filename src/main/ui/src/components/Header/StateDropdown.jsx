import React from "react";
import { states } from "../../data";
import { Link } from "react-router-dom";
import { useState } from 'react';


       function StateDropdown() {
            const [state, setState] = useState('');
//          const handleChange = (e) => {
//             console.log("selected is " + e);
//          }

         const handleChange=(e) => {
             const selectedState = e.target.value;
            setState(selectedState);
         }

        console.log("the state is " + {state})
	return (


        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" value={state}
        onChange={(e) => {
                 const selectedState = e.target.value;
                 setState(selectedState);
                 }}
        >

          <option to='/results'> Search by State </option>
            {
                states.map (data => (
                <option  value={data.name}  key={data.abbreviation}> {data.name} </option>
                    ))
            }
        </select>


	);
};


export default StateDropdown;