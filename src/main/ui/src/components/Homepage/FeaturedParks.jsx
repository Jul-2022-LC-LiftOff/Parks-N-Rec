import { React, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { API_KEY } from '../../api';
import ParkCard from './ParkCard';

export default function FeaturedParks() {
  const [featuredParks, setFeaturedParks] = useState([]);

  useEffect(() => {
    fetch(`https://developer.nps.gov/api/v1/parks?limit=3a&api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((json) => {
        setFeaturedParks(json.data);
      });
  }, []);

  return (
    <Container className="fluid  p-3">
      <h1> Featured Parks</h1>
      {featuredParks.map((park, index) => (
        <ParkCard parkData={park} key={index} />
      ))}
    </Container>
  );
}
