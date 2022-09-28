import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import Counter from './components/Counter';

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={" :) "}/>
    <div><Counter/></div>
    </>
  );
}

export default App;