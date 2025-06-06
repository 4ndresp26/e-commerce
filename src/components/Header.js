import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../Logo.png';

function Header() {
  return (
    <Navbar style={{ backgroundColor: '#f4f3ef' }} variant="white" expand="lg">
      <Container>
        <Navbar.Brand href="#home" > 
            <img src={logo} alt="logo" width={200}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Características</Nav.Link>
            <Nav.Link href="#pricing">Precios</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
            <Nav.Link href="#about">Acerca de</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;