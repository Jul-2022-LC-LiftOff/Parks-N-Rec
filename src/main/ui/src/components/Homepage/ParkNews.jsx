import { React, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Accordion } from "react-bootstrap";
import { API_KEY } from "../../api";

export default function ParkNews() {
	const [npsNews, setNpsNews] = useState([]);

	useEffect(() => {
		fetch(
			`https://developer.nps.gov/api/v1/newsreleases?parkCode=all&limit=5&api_key=${API_KEY}`
		)
			.then((response) => response.json())
			.then((json) => {
				setNpsNews(json.data);
			});
	}, [npsNews]);

	return (
		<div>
			<h2>Recent NPS News</h2>
			{npsNews.map((news, index) => {
				return (
					<div key={index}>
						<Accordion defaultActiveKey="index">
							<Accordion.Item eventKey="index">
								<Accordion.Header>{news.title}</Accordion.Header>
								<Accordion.Body>
									{news.abstract}
									<br></br>
									<a href={news.url}>Keep Reading</a>
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</div>
				);
			})}
		</div>
	);
}
