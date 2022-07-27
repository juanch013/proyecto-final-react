import logo from './logo.svg';
import './App.css';
import NavbarSF from '../src/components/NavbarSF/NavbarSF';
import Item from '../src/components/Item/Item'
import ItemListContainer from '../src/components/itemListContainer/itemListConatainer';
import Contador from './components/Contador/Contador';
import {useState} from 'react'

function App() {
  
  const addCarrito = (cantidad)=>{
    alert("Agrego "+cantidad+" objetos al carrito")
  }

  return (
    <div className="App">
        <NavbarSF/>
        <Contador stock={5} valorInicial={1} onAdd={addCarrito}/>
        <ItemListContainer text="Bienvenido a Spot Foods!"/>
    </div>
  );
}

export default App;
