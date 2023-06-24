import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

function OffcanvasExample() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-1">
          <Container fluid>
            <Navbar.Brand href="#">BookHub</Navbar.Brand>
            <Navbar.Brand href="#">Home</Navbar.Brand>
            <Navbar.Brand href="#">About</Navbar.Brand>
            <Navbar.Brand href="#">Contact</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Collapse id="offcanvasNavbar">
              <Nav className="me-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>

            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            />
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
