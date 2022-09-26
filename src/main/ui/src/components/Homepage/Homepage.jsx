import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import FeaturedParksCards from './FeaturedParks';
import HeroImageAndSearch from './HeroImageAndSearch';
import ParkNews from './ParkNews';
import ViewByState from './ViewByState';

export default function Homepage() {
  return (
    <div>
      <HeroImageAndSearch />
      <FeaturedParksCards />
      <ParkNews />
      <ViewByState />
    </div>
  );
}
