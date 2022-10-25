import { createContext, useState } from "react";

const CartContext = createContext({});
export default CartContext;

export const CartProvider = ({ children }) => {

    const [cart, setcart] = useState([]);


    const addItem = ( product, quantity ) => {

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
            const item = cart.find((item) => item.id === parseInt(product.id));
            item.quantity = item.quantity + quantity;
            setcart([...cart]);

            console.log(item.quantity);
            console.log("hola");
        }
    }
    const isInCart = (id) => cart.some((item) => item.id === parseInt(id));


    const removeItem = (itemId) => {
        const remove = cart.filter((item)=> item.id !== itemId);
        setcart(remove);
    }

    const clear = () => {
        setcart([]);
    }

    const total = cart.reduce((count, item) => count + (item.price * item.quantity), 0);

    const totalQuantity = cart.reduce((count, item) => count + item.quantity, 0);

    

    return (<CartContext.Provider value={{cart,addItem,removeItem,clear,total,totalQuantity,isInCart}}>
        {children}
      </CartContext.Provider>)
};
