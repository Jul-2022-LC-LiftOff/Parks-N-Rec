import React from 'react';
import {useState} from 'react'
import { Card, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SearchByName() {
  const [data, setData] = React.useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  React.useEffect(() => {
    let url = `https://developer.nps.gov/api/v1/parks?StateCode="all"&limit=469&api_key=iemcdp722ZKWNmS5oMOwf64LiOd3fw6XSsq9tzUf`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
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
        <div>
             <input
                 type="text"
                 placeholder="Search parks by name"
                 onChange = {handleSearch}
             />
        </div>
           {data.filter((park)=> {
             return filterParkNames(park)
           })
           .map((park, key) => {
             return (
                 <Col xs={true} sm={true} md={3} lg={3} className="d-inline-flex m-3 h-100" key={key}>
                   <Card className="resultCard">
                   <Card.Img
                   		variant="top"
                   		src={park.images[0].url}
                   		href={park.url}
                   />
                       <Card.Body>
                         <p> {park.name} </p>
                         <p>{park.description}</p>
                         <a href={park.url}>Visit Park site</a>
                       </Card.Body>
                   </Card>
                 </Col>
             )
             })
             }
          </div>
       );
     };
