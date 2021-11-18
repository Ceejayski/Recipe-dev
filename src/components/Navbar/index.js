import React from 'react';
import {
  Container, Nav, Navbar, NavDropdown,
} from 'react-bootstrap';
import Logo from '../../assets/img/logo.png';
import SearchBar from '../searchBar';

export default function NavBar() {
  return (
    <header>
      <Navbar bg="light" expand="md" fixed="top">
        <Container>
          <Navbar.Brand href="#home" className="brand">
            <img
              src={Logo}
              alt="logo"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            RecipeDev
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="mx-auto w-50">
              <SearchBar />
            </div>
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
