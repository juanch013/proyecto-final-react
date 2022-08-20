import './CartWidget.css'
import { useState,useEffect,useContext } from 'react'
import contextoCarrito  from '../../context/ContextoCarrito'
import { Link } from 'react-router-dom'

const CartWidget = () =>{
    const  {getCantidadItems} = useContext(contextoCarrito);
    
    const cantidad = getCantidadItems()

    return (
        cantidad == 0 ? <> </> :
        <div className="navCartContainer">
            <Link to="/Carrito" className="link">
            <div className="cartWidgetContainer">
                <img src={`${process.env.PUBLIC_URL}/images/cart.png`} alt="carro"/>
                <span>{cantidad}</span>
            </div>
            </Link>
        </div>
    )
}

export default CartWidget