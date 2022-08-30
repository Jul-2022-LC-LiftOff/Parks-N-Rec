import { React, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Accordion } from "react-bootstrap";
import { API_KEY } from "../../api";

export default function ParkNews() {
	const [npsNews, setNpsNews] = useState([]);

	useEffect(() => {
		let newsData = [];
		(async () => {
			try {
				const response = await fetch(
					`https://developer.nps.gov/api/v1/newsreleases?parkCode=all&limit=5&api_key=${API_KEY}`
				);
				newsData = (await response.json()).data;
			} catch (error) {
				console.log("error", error);
				newsData = [];
			}

			setNpsNews(newsData);
		})();
	}, []);

	return (
		<div>
			<h2>Recent NPS News</h2>
			{npsNews.map((news, index) => {
				return (
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
				);
			})}
		</div>
	);
}
