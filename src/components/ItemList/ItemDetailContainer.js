import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getIDProducts } from "../../Utils/Products";
import ItemDetailList from "./ItemDetailList";




const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const {id} = useParams();

    useEffect(() => {
        getIDProducts(id)
        .then((data) => setProduct(data))
        .catch(error => console.warn(error))
    }, [id])

    return (
        <section>
            <h1>
                Contenedero con el detalle Unico Item :
            </h1>

            <ItemDetailList product={product} />


        </section>
    );
}

export default ItemDetailContainer;