import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Hero from "./hero";
import FeaturedParksCards from "./featured-parks";
import ViewByStateFullList from "./view-by-state";
import { API_KEY, API_URL } from "../../api";

export default function Homepage() {

	




	return (
		<div>
			<Hero />
			<FeaturedParksCards />
			<ViewByStateFullList />
		</div>
	);
}
