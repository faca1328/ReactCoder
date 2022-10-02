
import Item from "./Item";


const ItemList = ({ products }) => {
    return (
        <div>
            <h1> ItemList :</h1>
            {products.map((product) => (
                <Item key={product.id} product={product} />
            ))}
        </div>
    )
};

export default ItemList;