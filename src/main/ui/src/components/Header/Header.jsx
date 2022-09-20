import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchBar from '../SearchBar/SearchBar';
import StateDropdown from './StateDropdown';
import Login from '../Login/Login';
import Register from '../Register/Register';

export const Header = () => {
  return (
    <Navbar variant="light" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/Home">Park It</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav>
            <SearchBar />
            <StateDropdown />
          </Nav>
        </Navbar.Collapse>
        <Link to="/login" className="login-page">
          {' '}
          Login | Register{' '}
        </Link>
      </Container>
    </Navbar>
  );
};
