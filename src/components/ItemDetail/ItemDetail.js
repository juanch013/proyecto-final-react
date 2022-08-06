import { prettyDOM } from '@testing-library/dom'
import './ItemDetail.css'

const ItemDetail = ({nombre,imgSrc,precio,stock,desc}) => {
    return (
        <div className="containerDetalle">
           <div className="contImg">
                <img src={imgSrc} alt={nombre}/>
           </div>

           <div className="contDesc">
               <h1>{nombre}</h1>
               <h3>${precio}</h3>
               <p>{desc}</p>
           </div>
        </div>
    )
}

export default ItemDetail
