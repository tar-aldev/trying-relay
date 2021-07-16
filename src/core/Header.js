import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "found";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Relay struggle</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" exact>
            User info
          </Nav.Link>
          <Nav.Link as={Link} to="/repositories">
            Repositories
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
