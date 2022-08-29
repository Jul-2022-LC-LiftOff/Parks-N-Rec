import { Card, Col, Row, Button } from "react-bootstrap";

const ParkCard = ({ parkData }) => {
	return (
		<Row xs={3} md={3} className="g-3 m-5">
			{Array.from({ length: 1 }).map((_, idx) => (
				<Col key={idx}>
					<Card>
						<Card.Img variant="top" src={parkData.images[0].url} />
						<Card.Body>
							<Card.Title>{parkData.fullName}</Card.Title>
							<Card.Text>{parkData.description}</Card.Text>
							<Button href={parkData.url}>Learn More</Button>
						</Card.Body>
					</Card>
				</Col>
			))}
		</Row>
	);
};

export default ParkCard;
