import { useContext, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import CartContext from "../../Context/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import OrderModal from "../OrderModal/OrderModal";
import { createOrder } from "../../Utils/Orders";

const buyerMock = {
  name: 'Facu',
  phone: '1134657878',
  email: 'facu@hotmail.com'
}

const Cart = () => {

  const { cart, total, removeItem, clear } = useContext(CartContext);

  const [user, setUser] = useState(buyerMock);

  const [showModal, setShowModal] = useState(false);
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const [orderId, setOrderId] = useState();

  const handleRemove = (itemId) => {
    removeItem(itemId);
  }


  const handleBuy = async () => {
    const newOrder = {
      buyer: buyerMock,
      items: cart,
      total
    };
    const newOrderId = await createOrder(newOrder);
    setOrderId(newOrderId);
    clear();
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
                  <td><FaTrashAlt onClick={() => handleRemove(item.id)} /></td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h3>Total: $ {total}</h3>
          <Button variant="success" onClick={handleOpen}>Finalizar compra</Button>
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
      <OrderModal
        showModal={showModal}
        onClose={handleClose}
        onBuy={handleBuy}
        orderId={orderId}
      />
    </Container>
  );
}

export default Cart;