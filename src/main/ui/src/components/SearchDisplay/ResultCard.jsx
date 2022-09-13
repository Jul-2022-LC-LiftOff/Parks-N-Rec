import { Card, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const ResultCard = ({ parkData }) => {
	return (
		<Col xs={true} sm={true} md={3} lg={3} className="d-inline-flex m-3 h-100">
			<Card className="resultCard">
				<Card.Img
					variant="top"
					src={parkData.images[0].url}
					href={parkData.url}
				/>
				<Card.Body>
					<a href={parkData.url}>{parkData.fullName}</a>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default ResultCard;
