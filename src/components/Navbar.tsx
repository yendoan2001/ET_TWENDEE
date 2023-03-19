import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand>
          <Link className="text-light text-decoration-none" to="/">
            Twendee
          </Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Link className="text-light text-decoration-none" to="/users">
            Users
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
