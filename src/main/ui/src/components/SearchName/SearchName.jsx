import React from 'react';
import {useState} from 'react'

export default function SearchName() {
  const [data, setData] = React.useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  React.useEffect(() => {
    let url = `https://developer.nps.gov/api/v1/parks?StateCode="all"&limit=469&api_key=iemcdp722ZKWNmS5oMOwf64LiOd3fw6XSsq9tzUf`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
        console.log('data!: ', json);
      })
      .catch((error) => console.log(error));
  }, []);


    const handleChange = (e) => {
        e.preventDefault();
        setData(e.target.value);
    };

     function handleSearch(e) {
            e.preventDefault();
            setSearchTerm(e.target.value)
            }

    if (data.length > 0) {
    let url = data.filter((i)  => {
        return i.fullName.match(data);
    });
    }



return (

     <div>
        <input
           type="text"
         placeholder="Search parks by name"
          onChange = {handleSearch}
      />
    {}
     {data.filter((park)=> {
       if (searchTerm == ""){
            return park
        } else if (park.fullName.toLowerCase().includes(searchTerm.toLowerCase())) {
            return park
      }
  }).map((park, key) => {
       return (
          < div key={key}>
             {park.fullName}
             <p>locations: {park.states}</p>
             <p> About: {park.description} </p>
             <br />
           </ div>
        )
      })}
     </div>


  );
};

