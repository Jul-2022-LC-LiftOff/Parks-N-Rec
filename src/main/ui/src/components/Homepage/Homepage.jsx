import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import HeroImageAndSearch from './HeroImageAndSearch';
import FeaturedParksCards from './FeaturedParks';
import ViewByState from './ViewByState';
import ParkNews from './ParkNews';

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
