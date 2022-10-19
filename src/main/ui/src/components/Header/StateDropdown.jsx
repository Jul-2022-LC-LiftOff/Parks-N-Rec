import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function StateDropdown() {
  return (
    <Nav>
      <NavDropdown name="stateSelecter" title="Find Your National Parks">
        <NavDropdown.Item as={Link} to="/SearchByName">
          {' '}
          Search by name{' '}
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/SearchByState">
          {' '}
          Search by state{' '}
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
}

export default StateDropdown;
