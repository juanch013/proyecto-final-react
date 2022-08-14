import './CartWidget.css'
import { useState,useEffect,useContext } from 'react'
import contextoCarrito  from '../../context/contextoCarrito/contextoCarrito'

const CartWidget = () =>{
    const  {getCantidadItems} = useContext(contextoCarrito);
    
    const cantidad = getCantidadItems()

    return (
        <div className="navCartContainer">
            <div className="cartWidgetContainer">
                <img src={`${process.env.PUBLIC_URL}/images/cart.png`} alt="carro"/>
                <span>{cantidad}</span>
            </div>
        </div>
    )
}

export default CartWidget