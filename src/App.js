import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import Item from './components/ItemList/Item';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path='/test' element={<h1>test</h1>}/>
      </Routes>  
      <div><ItemListContainer greeting=" :)" /></div>
      <h2> Abajo, Item </h2>
      <div><Item/></div>
    </BrowserRouter>
  );
}

export default App;