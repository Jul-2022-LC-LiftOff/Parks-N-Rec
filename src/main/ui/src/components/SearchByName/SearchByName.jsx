import React from "react";
import { useState } from "react";
import { Card, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//connecting with the api & setting the "searchTerm"
export default function SearchByName() {

    //const FavouriteComponent = props.favouriteComponent
	const [data, setData] = React.useState([]);
	const [searchTerm, setSearchTerm] = useState("");
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
		if (searchTerm === "") {
			return park;
		}
		if (park.fullName.toLowerCase().includes(searchTerm.toLowerCase())) {
			return park;
		}
	}

	return (
		<div>
			<div
				className="bg-image "
				style={{
					backgroundImage: "url('https://i.imgur.com/8IuucQZ.jpg')",
					height: 500,
				}}
			>
				<div
					className="mask bg-gradient"
					style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", height: 500 }}
				>
					<div className="d-flex justify-content-center align-items-center bg-image h-100">
						<div className="text-white">
							<h1 className="mb-3">Find Your Park</h1>
							<div>
								<input
									className="form-control"
									type="text"
									placeholder="Search by park name"
									onChange={handleSearch}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			{data
				.filter((park) => {
					return filterParkNames(park);
				})
				.map((park, key) => {
					return (
						<Col
							xs={true}
							sm={true}
							md={3}
							lg={3}
							className="d-inline-flex m-3 h-100"
							key={key}
						>
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
					);
				})}
		</div>
	);
}
