import logo from './logo.svg';
import './App.css';
import NavbarSF from '../src/components/NavbarSF/NavbarSF';
import Item from '../src/components/Item/Item'
import ItemListContainer from '../src/components/itemListContainer/itemListConatainer';
import Contador from './components/Contador/Contador';
import {useState} from 'react'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  
  /* const addCarrito = (cantidad)=>{
    alert("Agrego "+cantidad+" objetos al carrito")
  }
  <Contador stock={5} valorInicial={1} onAdd={addCarrito}/> */

  return (
    <div className="App">
          <BrowserRouter>
              <NavbarSF/>
              <Routes>
                <Route path='/' element={<ItemListContainer text="Bienvenido a Spot Foods!"/>}/>
                <Route path ='/detalle/:IdPlato' element={<ItemDetailContainer/>}/>
                <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
                <Route path='/categoria/:cat' element={<ItemListContainer/>}/>
              </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
