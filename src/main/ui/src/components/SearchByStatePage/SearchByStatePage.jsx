import React from "react";
import { useState } from "react";
import ParkData from "./data.json";
import "./styles.css";
import { Card, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SearchByStatePage() {
	const [data, setData] = React.useState([]);
	const [selectState, setSelect] = useState("");
	React.useEffect(() => {
		let url = `https://developer.nps.gov/api/v1/parks?parkCode="all"&limit=469&api_key=JMZizGv6gAcjBzoD4TbqW9RQSe9K8fEt9Cdb2Zta`;
		fetch(url)
			.then((response) => response.json())
			.then((json) => {
				setData(json.data);
			})
			.catch((error) => console.log(error));
	}, [selectState]);

	if (data.length > 0) {
		data.filter((parkApi) => {
			return parkApi.states.match(data);
		});
	}

	function filterParkStates(park) {
		if (selectState === "") {
			return park;
		}
		if (park.states.toLowerCase().includes(selectState.toLowerCase())) {
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
							<div className="search">
								<select
									name="stateSelecter"
									value={selectState}
									onChange={(e) => setSelect(e.target.value)}
									className="search form-select"
								>
									<option value="none" defaultValue="selectedState">
										{" "}
										Select a State{" "}
									</option>
									{ParkData.map((data) => (
										<option key={data.abbreviation} value={data.abbreviation}>
											{" "}
											{data.name}{" "}
										</option>
									))}
								</select>
							</div>
						</div>
					</div>
				</div>
			</div>
			{data
				.filter((park) => {
					return filterParkStates(park);
				})
				.map((park, key) => {
					return (
						<Col
							xs={true}
							sm={true}
							md={3}
							lg={3}
							className="d-inline-flex m-3 h-100"
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
