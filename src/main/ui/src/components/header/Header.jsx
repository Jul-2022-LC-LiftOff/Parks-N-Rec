import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

export default function Header() {
	// const [query, setQuery] = useState
	return (
		<Navbar variant="light" bg="light" expand="lg">
			<Container fluid>
				<Navbar.Brand href="#home">Park It</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbar-dark-example" />
				<Navbar.Collapse id="navbar-dark-example">
					<Nav>
						<InputGroup
							className="mdb-5-search-input d-none d-md-flex input-group w-auto my-auto"
							type="search"
						>
							<Form.Control
								aria-label="Text input with dropdown button"
								className=""
							/>
							<Button variant="primary" type="submit">
								Search
							</Button>
						</InputGroup>
						<NavDropdown
							id="nav-dropdown-dark-example"
							title="Dropdown"
							menuVariant="dark"
						>
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
								Another action
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">
								Separated link
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
