import { createContext, useState } from "react";

const CartContext = createContext({});
export default CartContext;

export const CartProvider = ({ children }) => {

    const [cart, setcart] = useState([]);

    const isInCart = (id) => cart.find((item) => item.id === id);

    const addItem = (product, quantity) => {

        if (!isInCart(product.id)) {
            const item =
            {
                ...product,
                quantity
            };
            setcart([...cart, item]); console.log(item.id); console.log("if");
        } else { /* No me diferencia el item por id */

            const itemx = (item) => cart.find((product) => product.id === item.id);

            console.log(itemx);
            console.log(itemx.quantity);
            console.log(itemx.id);
            console.log("producto", product.id);
            console.log("productoquantity", product.quantity);

            product.quantity = product.quantity + quantity;
            setcart([...cart]);

            console.log("else");

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
