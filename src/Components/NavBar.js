import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/mynav.css';
function NavBar() {

  return (
    <Navbar expand="lg" className="mynav" variant="dark" >
      <Container >
        <Navbar.Brand as={Link} to="/home">CarZ</Navbar.Brand>
        <Navbar.Toggle  aria-controls="navbar-nav"/>
        <Navbar.Collapse iid="navbar-nav" className="justify-content-between">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/mercedescars">Merceds </Nav.Link>
          <Nav.Link as={Link} to="/bmwcars">Bmw </Nav.Link>
                       <Nav.Link as={Link} to="/contact">Contact us</Nav.Link>
          </Nav>
          {/* RIGHT SIDE - LOGIN + SIGNUP */}
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/login" className="me-2">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default NavBar;