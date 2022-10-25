import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemList/ItemDetailContainer';
import { CartProvider } from './Context/CartContext';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <BrowserRouter>
    <CartProvider>
      <NavBar />
      <div>
        <h1>
          Bienvenidos a mi Tienda :
        </h1>
      </div>
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/carrito' element={<Cart />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/category/:categoryName' element={<ItemListContainer greeting={'Estos Son Nuestros Productos'} />} />
      </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;