import { useContext } from "react";
import { Button, Container, Table } from "react-bootstrap";
import CartContext from "../../Context/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const Cart = () => {

    const { cart, total, removeItem, clear } = useContext(CartContext);

    const handleRemove = (itemId) => {
        removeItem(itemId);
      }


    const showTable = cart.length > 0

    return ( 
    <Container>
        <h1> Este es el Carrito </h1>
        {showTable && (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Titulo</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td><FaTrashAlt onClick={() => handleRemove(item.id)}/></td>
                  </tr>
                ))}
            </tbody>
          </Table>
          <h3>Total: $ {total}</h3>
          <Button variant="success" /* onClick={handleOpen} */>Finalizar compra</Button>
        </>
      )}
      {!showTable && (
        <>
          <h3>Carrito de compra vacio</h3>
          <Link to='/'>
            <Button variant="success">Ver productos</Button>
          </Link>
        </>
      )}
{/*       <OrderModal
        showModal={showModal}
        onClose={handleClose}
        onBuy={handleBuy}
        orderId={orderId}
      /> */}
    </Container> 
    );
}
 
export default Cart;