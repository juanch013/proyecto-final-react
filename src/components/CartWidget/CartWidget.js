import './CartWidget.css'
import { useState,useEffect } from 'react'
const CartWidget = () =>{
    const [nroCart,setNroCart] = useState(0)
    return (
        <div className="navCartContainer">
            <div className="cartWidgetContainer">
                <img src={`${process.env.PUBLIC_URL}/images/cart.png`} alt="carro"/>
                <span>{nroCart}</span>
            </div>
        </div>
    )
}

export default CartWidget