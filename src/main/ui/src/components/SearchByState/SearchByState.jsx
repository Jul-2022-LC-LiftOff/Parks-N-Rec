import React from 'react';
import {useState} from 'react';
import ParkData from './data.json';

export default function SearchByState() {
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
         data.filter((i) => {
             return i.states.match(data);
         });
     }

     function filterParkStates(park) {
         if (selectState === "") {
            return park
        } if (park.states.toLowerCase().includes(selectState.toLowerCase())) {
             return park
         }
   }

return (
<div>

    <div>
        <label htmlFor="stateSelecter"> View parks by state: </label>
        <select name="stateSelecter" value={selectState} onChange={e=> setSelect(e.target.value)}>
            {
                ParkData.map (data => (
                 <option key={data.abbreviation}> {data.abbreviation} </option>
                ))
            }
        </select>
        {data.filter((park) => {
                 return filterParkStates(park)
                 })
                 .map((park, key) => {
                     return (
                         <div key={key}>
                         {park.states}
                         <br/>
                         {park.fullName}
                         </div>
                     )
                     })
                    }
    </div>

</div>
);
};