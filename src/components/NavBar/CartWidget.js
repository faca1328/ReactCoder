import { useContext } from 'react';
import { Badge, Container, Nav } from 'react-bootstrap';
import { BsCartCheck } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import CartContext from '../../Context/CartContext';
import './CartWidget.css';


const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);
    return (
        <Container>
            <div className='cart_container cart_img'>
                <BsCartCheck />
                <Nav.Link as={Link} to="/carrito">Carrito
                    {totalQuantity > 0 && (
                        <Badge pill bg="danger">{totalQuantity}</Badge>)}
                </Nav.Link>
            </div>
        </Container>

    );
}

export default CartWidget;