import React, { useState } from 'react';

// connecting with the api & setting the "searchTerm"
export default function SearchByName() {
  const [data, setData] = React.useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  React.useEffect(() => {
    const url = `https://developer.nps.gov/api/v1/parks?StateCode="all"&limit=469&api_key=iemcdp722ZKWNmS5oMOwf64LiOd3fw6XSsq9tzUf`;
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
    data.filter((i) => i.fullName.match(data));
  }

  function filterParkNames(park) {
    if (searchTerm === '') {
      return park;
    }
    if (park.fullName.toLowerCase().includes(searchTerm.toLowerCase())) {
      return park;
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search parks by name"
        onChange={handleSearch}
      />

      {data
        .filter((park) => filterParkNames(park))
        .map((park, key) => (
          <div key={key}>
            <h2>{park.fullName}</h2>
            <br />
            {park.states}
            <br />
            {park.description}
          </div>
        ))}
    </div>
  );
}
