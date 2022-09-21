import React from "react";
import Form from "react-bootstrap/Form";

export default function VisitedParkSwitch() {
	return (
		<Form>
			{["checkbox"].map((type) => (
				<div key={`default-${type}`} className="mb-3">
					<Form.Check type={type} id={`default-${type}`} label="Visited" />
				</div>
			))}
		</Form>
	);
}
