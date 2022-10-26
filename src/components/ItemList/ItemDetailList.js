

import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import Item from "../ItemList/Item"

const ItemDetailList = ({ product }) => {

  const { addItem } = useContext(CartContext);

  const handleAdd = (value) => {
    addItem(product, value);
  };


  
    return (
    <>
      <Item product={product} onAdd={handleAdd}/>
    </>
  );
}
 
export default ItemDetailList;