import "./Item.css";
import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import { useState } from "react"
import { Link } from "react-router-dom";


const Item = ({ product }) => {
    const [count, setCount] = useState(1);


    const CountClick = () => {
            setCount(count + 1);
    };

    const CountClickLess = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const onAdd = (count) => {
        if (count <= 1) 
            return        
    };

    const { addItem } = useContext(CartContext);

    const handleClick = () => {addItem(product);
    };

    return (
            <section className="Contenedor__img"  >
                <Link to={`/item/${product.id}`}><img src={product.pictureURL}alt="imagen"></img></Link>
                <div>
                    <h3>{product.title}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, enim.</p>
                </div>
                <div>
                    <button onClick={CountClickLess}>-</button>
                    <input type="number" value={count} min="0"></input>
                    <button onClick={CountClick} >+</button>
                </div>
                <div>
                    <button onClick={handleClick}>Agregar al Carrito</button>
                </div>
            </section>
    );

}



export default Item