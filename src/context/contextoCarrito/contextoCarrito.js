import {useState, createContext } from "react";

const contextoCarrito = createContext()

export const ContextoCarritoProvider = ({contenido})=>{
  const [carrito, setCarrito] = useState([])
  
  const agregarItemAlCarrito = (productoParaAgregar) => {
  console.log(!carrito.some(it => it.id === productoParaAgregar.id))
    if(!carrito.some(it => it.id === productoParaAgregar.id)){
        carrito.push(productoParaAgregar)
      setCarrito(carrito)
    }else{
        carrito.forEach((it)=>{
        if(it.id == productoParaAgregar.id){
          it.cant = parseInt(it.cant) + parseInt(productoParaAgregar.cant)
        }
      })
    }
    console.log(carrito)
    
  }

  const getCantidadItems = () => {
    let ret = 0 
    carrito.forEach(prod => {
      ret += prod.cant
    })
    return ret
  }

  return(
    <contextoCarrito.Provider value={{carrito,agregarItemAlCarrito,getCantidadItems}}>
        {contenido}    
    </contextoCarrito.Provider>
  )
}

export default contextoCarrito