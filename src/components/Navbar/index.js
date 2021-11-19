import React, { useState } from 'react';
import {
  Container, Nav, Navbar, NavDropdown,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import SearchBar from '../searchBar';

export default function NavBar() {
  const [scroll, setScroll] = useState(false);
  const changeBackground = () => {
    if (window.scrollY > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener('scroll', changeBackground);
  return (
    <header>
      <Navbar expand="md" fixed="top" className={!scroll ? 'transparent' : 'bg-light'}>
        <Container>

          <Link to="/" className="brand navbar-brand">
            <img
              src={Logo}
              alt="logo"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            RecipeDev

          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="mx-auto w-50">
              <SearchBar />
            </div>
            <Nav>
              <Link to="/" className="nav-link">Home</Link>
            </Nav>
            <NavDropdown title="Recipe Categories" id="basic-nav-dropdown">
              <Link to="/diets" className="dropdown-item">Diets</Link>
              <Link to="/meals" className="dropdown-item">Meal Types</Link>
              <NavDropdown.Divider />
              <Link to="/category" className="dropdown-item">Other Categories</Link>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
