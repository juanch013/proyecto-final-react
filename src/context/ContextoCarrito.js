import {useState, createContext } from "react";


const CarritoContext = createContext()

export const ContextoCarritoProvider = ({ children })=>{
       
      const [Carrito, setCarrito] = useState([]);
      console.log(Carrito)

      const agregarItemAlCarrito = (ProductoParaAgregar) => {
        if(ProductoParaAgregar.cant !== 0){

          if(!estaEnCarrito(ProductoParaAgregar.id)){
            setCarrito([...Carrito, ProductoParaAgregar])
          }else{
            let carritoAct = Carrito.map((item)=>{
              if(item.id === ProductoParaAgregar.id){
                item.cant = ProductoParaAgregar.cant
                return item
              }else{
                return item
              }
            })
            setCarrito(carritoAct)
          }
        }
      }
    const estaEnCarrito = (id)=>{
      return Carrito.some(it => it.id === id)
    }

    const getCantidadItems = () => {
      let cant = 0
      Carrito.forEach((i)=>{
        cant += i.cant
      })
      return cant
    }

    const eliminarItemCarrito = (id) =>{
      let carritoActualizado = Carrito.filter(it => it.id !== id)
      setCarrito(carritoActualizado)
    }

    const limpiarCarrito = () =>{
      setCarrito([])
    }

    const getPrecioTotal = ()=>{
      let res = 0
      Carrito.forEach(i=>{
        res += (i.precio * i.cant)
      })
      return res
    }
    
    return(
      <CarritoContext.Provider value = {{limpiarCarrito, eliminarItemCarrito, Carrito, agregarItemAlCarrito, getCantidadItems, getPrecioTotal }}>
          { children }
      </CarritoContext.Provider>
    )
  }

export default CarritoContext