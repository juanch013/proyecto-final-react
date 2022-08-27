import './App.css';
import NavbarSF from '../src/components/NavbarSF/NavbarSF';
import ItemListContainer from '../src/components/itemListContainer/itemListConatainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { ContextoCarritoProvider } from './context/ContextoCarrito';
import Carrito from '../src/components/Carrito/Carrito'
import Checkout from './components/Checkout/Checkout';

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
                <Route path='/Carrito' element={<Carrito/>}/>
                <Route path='/Checkout' element={<Checkout/>}/>
              </Routes>
          </BrowserRouter>
       </ContextoCarritoProvider>
    </div>
  );
}

export default App;
