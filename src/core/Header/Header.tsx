import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  // const {
  //   match: { params },
  // } = useRouter();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Relay struggle</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink
            component={Nav.Link}
            activeClassName="text-white"
            to={`/`}
            exact
          >
            Home
          </NavLink>
          <NavLink
            component={Nav.Link}
            activeClassName="text-white"
            to={`/repositories`}
            exact
          >
            Repositories
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
