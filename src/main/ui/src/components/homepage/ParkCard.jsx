import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const ParkCard = ({ parkData }) => {
	return (
		<Row xs={3} md={3} className="g-3 m-5">
			{Array.from({ length: 3 }).map((_, idx) => (
				<Col>
					<Card key={idx}>
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
