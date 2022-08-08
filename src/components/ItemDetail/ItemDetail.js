
import './ItemDetail.css'
import '../Contador/Contador'
import Contador from '../Contador/Contador'
const ItemDetail = ({nombre,imgSrc,precio,stock,desc}) => {
    const onAdd = ()=>{
        
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

               <Contador valorInicial={0} stock={stock} onAdd={onAdd}/>
           </div>

           
        </div>
    )
}

export default ItemDetail
