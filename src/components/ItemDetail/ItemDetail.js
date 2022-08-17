
import './ItemDetail.css'
import '../Contador/Contador'
import Contador from '../Contador/Contador'
import { useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import CarritoContext from '../../context/ContextoCarrito'

const ItemDetail = ({id,nombre,imgSrc,precio,stock,desc}) => {
    const [cantidad, setCantidad] = useState(0);

    const { agregarItemAlCarrito } = useContext(CarritoContext);

    const agregarCarrito = (cant)=>{
        setCantidad(cant)

        const productoParaAgregar = {
            id,nombre,imgSrc,precio,cant
        }
        console.log(agregarItemAlCarrito)

        agregarItemAlCarrito(productoParaAgregar)
      }

    return (
        <div className="containerDetalle">
           <div className="contImg">
                <img src={imgSrc} alt={nombre}/>
           </div>

           <div className="contDesc">
               <h1>{nombre}</h1>
               <h3>${precio}</h3>
               <p>{desc}</p>

                {
                    cantidad === 0 ? (<Contador valorInicial={0} stock={stock} onAdd={agregarCarrito}/>) 
                    : (
                    <div className="container-link-to-carrito">
                        <Link className='link-to-carrito' to='/Carrito'>Ir Al Carrito</Link>
                    </div>
                    )
                }
               
           </div>

           
        </div>
    )
}

export default ItemDetail
