import React from 'react';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export default function SearchByName() {
  const [data, setData] = React.useState([]);
  const [searchTerm, setSearchTerm] = useState('');
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
    setSearchTerm(e.target.value);
  }

  if (data.length > 0) {
    data.filter((i) => {
      return i.fullName.match(data);
    });
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
        .filter((park) => {
          return filterParkNames(park);
        })
        .map((park, key) => {
          return (
            <div key={key}>
              <Row xs={2} md={2} className="g-4">
                {Array.from({ length: 1 }).map((_, idx) => (
                  <Col>
                    <Card>
                      <Card.Img variant="top" src={park.images[0].url} />
                      <Card.Body>
                        <Card.Title>{park.fullName}</Card.Title>
                        <Card.Title> {park.states}</Card.Title>

                        <Card.Text>{park.description}</Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          );
        })}
    </div>
  );
}
