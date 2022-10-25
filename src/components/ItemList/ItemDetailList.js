

import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import Item from "../ItemList/Item"

const ItemDetailList = ({ product }) => {

  


  
    return (
    <>
      <Item product={product} />
    </>
  );
}
 
export default ItemDetailList;