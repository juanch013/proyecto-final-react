import logo from './logo.svg';
import './App.css';
import NavbarSF from '../src/components/NavbarSF/NavbarSF';
import Item from '../src/components/Item/Item'
import ItemListContainer from '../src/components/itemListContainer/itemListConatainer';
import Contador from './components/Contador/Contador';
import {createContext, useState} from 'react'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ContextoCarritoProvider  from './context/contextoCarrito/contextoCarrito';

function App() {
  return (
    <div className="App">

      <ContextoCarritoProvider>
          <BrowserRouter>
              <NavbarSF/>
              <Routes>
                <Route path='/' element={<ItemListContainer text="Bienvenido a Spot Foods!"/>}/>
                <Route path ='/detalle/:IdPlato' element={<ItemDetailContainer/>}/>
                <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
                <Route path='/categoria/:cat' element={<ItemListContainer/>}/>
              </Routes>
          </BrowserRouter>
       </ContextoCarritoProvider>
    </div>
  );
}

export default App;
