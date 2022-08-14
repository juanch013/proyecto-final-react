import './Contador.css'
import {Button} from 'reactstrap'
import { useState } from 'react';

const Contador = ({stock, valorInicial, onAdd}) =>{
    const [cont, setcontador] = useState(valorInicial)

    const sumar = ()=>{
        if(cont < stock){
            setcontador(cont+1)
        }
    }

    const restar = ()=>{
        if(cont > 0){
            setcontador(cont-1)
        }
    }
        return(
        <div className="container-fila">
            <div className="container-contador">
                <div className="containerCant">
                    <Button className="btnCant" onClick={sumar}>+</Button>
                    <h3>{cont}</h3>
                    <Button  className="btnCant" onClick ={restar}>-</Button>
                </div>
                <div className="buttonsContainer">
                    <Button className="btnCarrito" onClick={()=> onAdd(cont)} color="dark">Aniadir al carrito</Button>
                </div>
            </div>
        </div>
    )
    

    
}

export default Contador