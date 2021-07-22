import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, useParams } from "react-router-dom";
import { ParamsWithLogin } from "../../interfaces/ParamsWithLogin";

const Header = () => {
  const { login } = useParams<ParamsWithLogin>();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Relay struggle</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to={`/${login}`} exact>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to={`/${login}/repositories`}>
            Repositories
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
