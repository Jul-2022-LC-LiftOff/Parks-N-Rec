import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default function FeaturedParksCards() {
	return (
		<container className="fluid  p-3">
			<h1 m-3> Featured Parks</h1>
			<Row xs={3} md={3} className="g-3 m-5">
				{Array.from({ length: 3 }).map((_, idx) => (
					<Col>
						<Card>
							<Card.Img variant="top" src="holder.js/100px160" />
							<Card.Body>
								<Card.Title>Card title</Card.Title>
								<Card.Text>
									This is a longer card with supporting text below as a natural
									lead-in to additional content. This content is a little bit
									longer.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</container>
	);
}
