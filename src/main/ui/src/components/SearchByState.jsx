import React from 'react';
import {useState} from 'react'

export default function SearchByState() {
    const [data, setData] = React.useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    React.useEffect(() => {
    let url = `https://developer.nps.gov/api/v1/parks?parkCode="all"&limit=469&api_key=JMZizGv6gAcjBzoD4TbqW9RQSe9K8fEt9Cdb2Zta`;
    fetch(url)
        .then((response) => response.json())
        .then((json) => {
            setData(json.data);
        })
    .catch((error) => console.log(error));
}, [searchTerm]);

    function handleSearch(e) {
        e.preventDefault();
        setSearchTerm(e.target.value);
    }

    if (data.length > 0) {
        let url = data.filter((i) => {
            return i.states.match(data);
        });
    }

    function filterParkStates(park) {
        if (searchTerm === "") {
            return park
        } if (park.states.toLowerCase().includes(searchTerm.toLowerCase())) {
            return park
        }
    }

return (
<div>
    <input
        type="text"
        placeholder = "Search Parks By State"
        onChange = {handleSearch}
/>

    {data.filter((park) => {
        return filterParkStates(park)
        }).map((park, key) => {
            return (
                <p key={key}>
                {park.states}
                <br/>
                {park.fullName}
                </p>
            )
            })}
</div>
);
};

