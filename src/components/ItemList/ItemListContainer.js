import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getCategoryProducts, getProducts } from '../../Utils/Products';

import ItemList from './ItemList';
import './ItemListContainer.css';



const  ItemListContainer = ({greeting}) => {

    const { categoryName } = useParams();
    const [product, setProducts] = useState([]);
    
    useEffect (() => {  
    if (categoryName) {
        getCategoryProducts(categoryName)
          .then((data) => setProducts(data))
          .catch((error) => console.warn(error))
      } else {
        getProducts()
          .then((data) => setProducts(data))
          .catch((error) => console.warn(error))
      }
    }, [categoryName])

    
    
    return ( 
        <Container>
        
            <p className="hola">  {greeting} </p>           
            
            <ItemList products={product} />
            
        </Container>
     );
}
 
export default ItemListContainer;