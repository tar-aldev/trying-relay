import { Nav, Navbar } from "react-bootstrap";
import { Link, useRouter } from "found";

const Header = () => {
  const {
    match: { params },
  } = useRouter();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Relay struggle</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link
            as={Nav.Link}
            activeClassName="text-white"
            to={`/${params.login}`}
            exact
          >
            Home
          </Link>
          <Link
            as={Nav.Link}
            activeClassName="text-white"
            to={`/${params.login}/repositories`}
            exact
          >
            Repositories
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
