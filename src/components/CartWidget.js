import { Container, Nav } from 'react-bootstrap';
import { BsCartCheck } from 'react-icons/bs';
import './CartWidget.css';


const CartWidget = () => {
    return (
        <Container>
            <BsCartCheck />            
            <Nav.Link href="#carrito">Carrito</Nav.Link>
        </Container>
    );
}   

export default CartWidget;