import React from 'react';
import {useState} from 'react'

//connecting with the api & setting the "searchTerm"
export default function SearchByName() {
  const [data, setData] = React.useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  React.useEffect(() => {
    let url = `https://developer.nps.gov/api/v1/parks?StateCode="all"&limit=20&api_key=iemcdp722ZKWNmS5oMOwf64LiOd3fw6XSsq9tzUf`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
<<<<<<<< HEAD:src/main/ui/src/components/SearchByName.jsx
========
        console.log('data!: ', json);
>>>>>>>> f00781046249b22b66470b2757d767a1c5c24fae:src/main/ui/src/components/SearchName/SearchName.jsx
      })
      .catch((error) => console.log(error));
  }, [searchTerm]);




     function handleSearch(e) {
            e.preventDefault();
            setSearchTerm(e.target.value)
            }

    if (data.length > 0) {
    data.filter((i)  => {
        return i.fullName.match(data);
    });
    }



    function filterParkNames(park) {
        if (searchTerm === ""){
            return park
        } if (park.fullName.toLowerCase().includes(searchTerm.toLowerCase())) {
            return park
       }
    }

return (

     <div>
        <input
<<<<<<<< HEAD:src/main/ui/src/components/SearchByName.jsx
            type="text"
            placeholder="Search parks by name"
            onChange = {handleSearch}
        />






      {data.filter((park)=> {
        return filterParkNames(park)
      })
      .map((park, key) => {
        return (
        <article className='park'>
            <div>
          <p key={key}>
            <h2>{park.fullName}</h2>
            <br />
            {park.states}
            <br />
            {park.description}
          </p>
          </div>
          </article>
========
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
>>>>>>>> f00781046249b22b66470b2757d767a1c5c24fae:src/main/ui/src/components/SearchName/SearchName.jsx
        )
      })}
     </div>


  );
};

