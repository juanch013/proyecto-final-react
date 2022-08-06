import './CartWidget.css'
const CartWidget = () =>{
    return (
        <div className="navCartContainer">
            <div className="cartWidgetContainer">
                <img src={`${process.env.PUBLIC_URL}/images/cart.png`} alt="carro"/>
                <span>5</span>
            </div>
        </div>
    )
}

export default CartWidget