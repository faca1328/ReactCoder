import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { getProducts } from '../../Utils/Products';
import ItemList from './ItemList';
import './ItemListContainer.css';



const  ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([]);
    
    useEffect (() => {
        getProducts()
        .then((data) => setProducts(data))
        .catch((error) => console.warn(error))
    },[]) 
    
    
    
    return ( 
        <Container>
        
            <p className="hola"> Estos Son Nuestros Productos {greeting} </p>           
            
            <ItemList products={products} />
            
        </Container>
     );
}
 
export default ItemListContainer;