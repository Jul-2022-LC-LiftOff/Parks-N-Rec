import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Hero from "./Hero";
import FeaturedParksCards from "./FeaturedParks";
import ViewByStateFullList from "./ViewByState";
import ParkNews from "./ParkNews";

export default function Homepage() {
	return (
		<div>
			<Hero />
			<FeaturedParksCards />
			<ParkNews />
			<ViewByStateFullList />
		</div>
	);
}
