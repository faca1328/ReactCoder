import "./Item.css";

import { useState } from "react"
import { Link } from "react-router-dom";


const Item = ({ product }) => {
    const [count, setCount] = useState(0);


    const CountClick = () => {
        setCount(count + 1);
    };

    const CountClickLess = () => {
        if (count > 0) {
            setCount(count - 1);
        }
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
            </section>
    );

}



export default Item