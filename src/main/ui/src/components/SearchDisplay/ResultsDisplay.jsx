import React, { useState, useEffect } from "react";
import { slice } from "lodash";
import { API_KEY } from "../../api";
import ResultCard from "./ResultCard";
import searchTerm from "../SearchByName/SearchByName";

export default function ResultsDisplay() {
	const [post, setPost] = useState([]);
	const [isCompleted, setIsCompleted] = useState(false);
	const [index, setIndex] = useState(5);
	const initialPosts = slice(post, 0, index);
	const getData = () => {
		fetch(
			`https://developer.nps.gov/api/v1/parks?StateCode="all"&limit=469&api_key=${API_KEY}`
		)
			.then((res) => res.json())
			.then((json) => setPost(json.data))
			.catch((e) => console.log(e));
	};

	const loadMore = () => {
		setIndex(index + 5);
		console.log(index);
		if (index >= post.length) {
			setIsCompleted(true);
		} else {
			setIsCompleted(false);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div>
			<h2 className="mb-3">Search results for {searchTerm} </h2>
			{initialPosts.map((parkData, index) => {
				return <ResultCard parkData={parkData} key={index} />;
			})}
			<div className="d-grid mt-3 mb-5">
				{isCompleted ? (
					<button
						onClick={loadMore}
						type="button"
						className="btn btn-danger disabled"
					>
						That's It
					</button>
				) : (
					<button onClick={loadMore} type="button" className="btn btn-danger">
						Load More +
					</button>
				)}
			</div>
		</div>
	);
}
