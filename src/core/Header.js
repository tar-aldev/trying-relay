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
          <Nav.Link as={Link} to={`/${params.login}`} exact>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to={`/${params.login}/repositories`}>
            Repositories
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
