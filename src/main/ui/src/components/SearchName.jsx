import React from 'react';
import {useState} from 'react'

export default function SearchName() {
  const [data, setData] = React.useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  React.useEffect(() => {
    let url = `https://developer.nps.gov/api/v1/parks?StateCode="all"&limit=468&api_key=iemcdp722ZKWNmS5oMOwf64LiOd3fw6XSsq9tzUf`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
        console.log('data!: ', json);
        data.fullName.forEach(v => {
        console.log("name: " + v.fullName)
        })
      })
      .catch((error) => console.log(error));
  }, []);


    const handleChange = (e) => {
        e.preventDefault();
        setData(e.target.value);
    };

    if (data.length > 0) {
    let url = data.filter((i)  => {
        return i.fullName.match(data);
    });
    }

return (
    <div>
    <input
    type="text"
    placeholder="Search Parks Name"
    onChange = {event => {setSearchTerm(event.target.value)}
    }/>
      {}
      {data.filter((park)=> {
        if (searchTerm == ""){
            return park
        } else if (park.fullName.toLowerCase().includes(searchTerm.toLowerCase())) {
            return park
        }
      }).map((park, key) => {
        return (
          <p key={key}>
            {park.fullName}
          </p>
        )
      })}
    </div>
  );
};

