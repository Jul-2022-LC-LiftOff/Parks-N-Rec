import { React, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Accordion } from "react-bootstrap";

export default function ThingsToDoAccordion({ parkCode }, { parkInfo }) {
	const [thingsToDo, setThingsToDo] = useState([]);

	useEffect(() => {
		fetch(
			`https://developer.nps.gov/api/v1/thingstodo?parkCode=${parkCode}&limit=5&api_key=IJ1FjAb4SkwSyXOqFhyqxTM3xg66eDcMQoDjKS16`
		)
			.then((response) => response.json())
			.then((json) => {
				setThingsToDo(json.data);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<div>
			<h2>Things to Do in Your Park</h2>
			{thingsToDo.map((activity, index) => {
				return (
					<div key={index}>
						<Accordion>
							<Accordion.Item eventKey="index">
								<Accordion.Header>{activity.title}</Accordion.Header>
								<Accordion.Body>
									{activity.shortDescription}
									<hr />
									<p>Location</p>
									{activity.locationDescription}
									<hr />
									<p>Duration + Difficulty</p>
									{activity.duration}
									{activity.difficulty}
									<hr />
									<p>Accessibility Information</p>
									{activity.accessibilityInformation}
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</div>
				);
			})}
		</div>
	);
}
