import React, { useState, useEffect } from "react";
import { slice } from "lodash";
import { API_KEY } from "../../api";
import ResultCard from "./ResultCard";
import searchTerm from "../SearchByName/SearchByName";

export default function ResultsDisplay() {
	const [post, setPost] = useState([]);
	const [searchTerm, setSearchTerm] = useState('')
	const [isCompleted, setIsCompleted] = useState(false);
	const [index, setIndex] = useState(5);
	const initialPosts = slice(post, 0, index);
	React.useEffect(() => {
	  let url = `https://developer.nps.gov/api/v1/parks?StateCode="all"&limit=469&api_key=${API_KEY}`
		fetch(url)
			.then((res) => res.json())
			.then((json) => setPost(json.data))
			.catch((e) => console.log(e));
	}, [searchTerm]);

	function handleSearch(e) {
        e.preventDefault();
        setSearchTerm(e.target.value)
        } if (post.length > 0) {
            post.filter((i)  => {
            return i.fullName.match(post);
            });
    }

    function filterParkNames(park) {
       if (searchTerm === ""){
           return park
       } if (park.fullName.toLowerCase().includes(searchTerm.toLowerCase())) {
           return park
       }
    }

	const loadMore = () => {
		setIndex(index + 5);
		console.log(index);
		if (index >= post.length) {
			setIsCompleted(true);
		} else {
			setIsCompleted(false);
		}
	};


	return (
		<div>

			<input
              type="text"
              placeholder="Search parks by name"
              onChange = {handleSearch}
            />

            {post.filter((park) => {
                return filterParkNames(park)
            })
			 .map((parkData, index) => {
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
