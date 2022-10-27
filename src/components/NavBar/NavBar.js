import { Container, Navbar, NavDropdown } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import CartWidget from "./CartWidget";
import './NavBar.css';
import { Link } from "react-router-dom";



const NavBar = () => {

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home" as={Link} to="/">FaStick</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" >Inicio</Nav.Link>
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1" as={Link} to='/category/Cine y TV'>Cine y TV</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" as={Link} to='/category/Deportes'>Deportes</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" as={Link} to='/category/Musica'>Musica</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <Container className="cart">
                <Nav>
                    <CartWidget/>
                </Nav>
            </Container>
            <Container className="cart">
                <Nav>
                    <Nav.Link href="#login">Ingresar</Nav.Link>
                </Nav>
            </Container>            
       </Navbar>
    )
};

export default NavBar;
