import "./Counter.css";

import { useState } from "react"


const Counter = () => {
    const [count, setCount] = useState(0);


    const CountClick = () => {
        setCount(count + 1);
    };

    const CountClickLess = () => {
        setCount(count - 1);
    };

    return (
        <section className="Contenedor__img"  >
            <div><img src="https://kinsta.com/es/wp-content/uploads/sites/8/2020/10/tipos-de-archivos-de-imagen.png" alt="imagen"></img></div>
            <div>
                <h3>producto</h3>
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



export default Counter