import { Container, Nav } from 'react-bootstrap';
import { BsCartCheck } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './CartWidget.css';


const CartWidget = () => {
    return (
        <Container>
            <div className='cart_container cart_img'>
                <BsCartCheck/>
                <Nav.Link as={Link} to="/carrito">Carrito</Nav.Link>
            </div>
        </Container>

    );
}

export default CartWidget;