import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export default function ViewByStateFullList() {
	return (
		<Container className="fluid  p-3">
			<h1> View Parks by State</h1>
			<Row xs={3} md={3} className="g-3 m-5">
				{Array.from({ length: 50 }).map((_, idx) => (
					<Col>
						<a href="url" key={idx}>
							State
						</a>
					</Col>
				))}
			</Row>
		</Container>
	);
}
