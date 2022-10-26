import { createContext, useState } from "react";

const CartContext = createContext({});
export default CartContext;

export const CartProvider = ({ children }) => {

    const [cart, setcart] = useState([]);

    const isInCart = () => cart.some(product => product.id === product.id);

    const addItem = (product, quantity) => {

        if (!isInCart(product.id)) {
            const item =
            {
                ...product,
                quantity
            };
            setcart([...cart, item]);
            console.log(item.quantity);
            console.log("chau");
        } else {

            const itemIndex = cart.findIndex((item) => item.id === parseInt(item.id));
            console.log(itemIndex);
      // creamos un borrador del item para poder modificarlo y evidar la modificacion del estado de react
      const itemDraft = { ...cart[itemIndex] };
      // actualizamos la quantity en el borrador
      itemDraft.quantity = itemDraft.quantity + quantity;
      console.log(itemDraft.quantity);
      // creamos un borrador del carrito para poder actualizar el item
      const cartDraft = [...cart];
      // actualizamos el carrito borrador, SIN TOCAR EL ESTADO REACT
      cartDraft[itemIndex] = itemDraft;
      // cart[itemIndex] = itemDraft; PROHIBIDO, ya que modifica el estado de react
      setcart(cartDraft);

      console.log(product.quantity);
            console.log("hola");
        }
    }





    const removeItem = (itemId) => {
        const remove = cart.filter((item) => item.id !== itemId);
        setcart(remove);
    }

    const clear = () => {
        setcart([]);
    }

    const total = cart.reduce((count, item) => count + (item.price * item.quantity), 0);

    const totalQuantity = cart.reduce((count, item) => count + item.quantity, 0);



    return (<CartContext.Provider value={{ cart, addItem, removeItem, clear, total, totalQuantity, isInCart }}>
        {children}
    </CartContext.Provider>)
};
