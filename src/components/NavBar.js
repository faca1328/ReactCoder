import { Container, Navbar, NavDropdown } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import CartWidget from "./CartWidget";



const NavBar = () => {

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">FaStick</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#link">Personalizados</Nav.Link>
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Cine y TV</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Deportes</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Musica</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <Container>
                <Nav>
                    <CartWidget/>
                </Nav>
            </Container>
            <Container>
                <Nav>
                    <Nav.Link href="#login">Ingresar</Nav.Link>
                </Nav>
            </Container>            
       </Navbar>
    )
};

export default NavBar;
