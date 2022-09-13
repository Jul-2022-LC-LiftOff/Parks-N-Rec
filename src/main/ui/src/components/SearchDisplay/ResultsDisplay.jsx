import { React, useState, useEffect } from "react";
import ParkCard from "../Homepage/ParkCard";
import { API_KEY } from "../../api";
import { Container } from "react-bootstrap";
import searchTerm from "../SearchByName/SearchByName";
import ResultCard from "./ResultCard";

export default function ResultsDisplay() {
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		fetch(
			`https://developer.nps.gov/api/v1/parks?StateCode="all"&limit=469&api_key=${API_KEY}`
		)
			.then((response) => response.json())
			.then((json) => {
				setSearchResults(json.data);
			});
	}, []);

	return (
		<Container className="fluid  p-3">
			<h1>Search Results for {searchTerm}</h1>

			{searchResults.map((park, index) => {
				return <ResultCard parkData={park} key={index} />;
			})}
		</Container>
	);
}
