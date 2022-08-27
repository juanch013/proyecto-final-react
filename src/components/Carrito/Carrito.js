import CarritoContext from '../../context/ContextoCarrito'
import './Carrito.css'
import { useContext } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';


const Carrito = () =>{
    const { Carrito , eliminarItemCarrito, getPrecioTotal} = useContext(CarritoContext);
    return(
        <div>
            <h2>Items agregados al Carrito</h2>
            <div className="itemCarritoContainer-bordless" key="head">
                <div className="imgContainer-carrito">
                    <h5>Imagen</h5>
                </div>
                <div className="infoContainer-carrito">
                    <h5>Nombre</h5>
                    <h5>Cant</h5>
                    <h5>Precio unit</h5>
                </div>
                <div className="btnEliminatItem-head">
                    
                </div>
            </div>
            
            <div className="carritoContainer">
                {Carrito.length == 0 ? <h1>No tiene items Agregados al Carrito!</h1> : Carrito.map( i=>
                                <div className="itemCarritoContainer" key={i.id}>
                                    <div className="imgContainer-carrito">
                                        <img src={i.imgSrc}/>
                                    </div>
                                    <div className="infoContainer-carrito">
                                        <h5>{i.nombre}</h5>
                                        <h5>{i.cant}</h5>
                                        <h5>{i.precio}</h5>
                                    </div>
                                    <div className="btnEliminatItem" onClick={()=>eliminarItemCarrito(i.id)}>
                                        <h5>Eliminar</h5>
                                    </div>
                                </div>
                ) } 
            </div>
            <div className="containerPrecioToal">
                <h2>
                   Total: ${getPrecioTotal()}
                </h2>
                <Link to='../Checkout'><Button>Ir al Checkout</Button></Link>
                
            </div>
        </div>
    )
}

export default Carrito