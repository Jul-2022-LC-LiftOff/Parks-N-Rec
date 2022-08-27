import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function SearchBar() {
	return (
		<div style={{ display: "block", height: 50 }}>
			<InputGroup
				className="mdb-5-search-input d-none d-md-flex input-group w-auto my-auto"
				type="search"
			>
				<Form.Control aria-label="Text input to search by park name" />
				<Button aria-label="search" variant="primary" type="submit">
					Search
				</Button>
			</InputGroup>
		</div>
	);
}
