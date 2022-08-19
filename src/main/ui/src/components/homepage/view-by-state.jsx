import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function ViewByStateFullList() {
	return (
		<container className="fluid  p-3">
			<h1 m-3> View Parks by State</h1>
			<Row xs={3} md={3} className="g-3 m-5">
				{Array.from({ length: 50 }).map((_, idx) => (
					<Col>
						<a href="url">State</a>
					</Col>
				))}
			</Row>
		</container>
	);
}
