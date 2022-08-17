import {useState, createContext } from "react";


const CarritoContext = createContext()

export const ContextoCarritoProvider = ({ children })=>{
       
      const [Carrito, setCarrito] = useState([]);
    
      const agregarItemAlCarrito = (ProductoParaAgregar) => {
        eliminarItemCarrito(3)
      // const carritoActualizado = [...Carrito, ProductoParaAgregar]
      // console.log(carritoActualizado) 
      // setCarrito(carritoActualizado)
      // console.log(Carrito)
        

    //     if(!estaEnCarrito(productoParaAgregar.id)){
    //       setCarrito([...Carrito, productoParaAgregar])
    //     }else{
    //       
    //     }
    }

    const estaEnCarrito = (id)=>{
      return Carrito.some(it => it.id === id)
    }

    const getCantidadItems = () => {
      let ret = 0 
      Carrito.forEach(prod => {
        ret += prod.cant
      })
      return ret
    }

    const eliminarItemCarrito = (id) =>{
      
      let carritoActualizado = Carrito.filter(it => it.id !== id)
      setCarrito(carritoActualizado)
      
    }
    
    return(
      <CarritoContext.Provider value = {{ Carrito, agregarItemAlCarrito, getCantidadItems }}>
          { children }
      </CarritoContext.Provider>
    )
  }

export default CarritoContext