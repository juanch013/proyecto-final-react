
import './ItemDetail.css'
import '../Contador/Contador'
import Contador from '../Contador/Contador'
const ItemDetail = ({nombre,imgSrc,precio,stock,desc}) => {
    const onAdd = ()=>{
        console.log("click en el contador")
    }

    const handeOnClickDescripcion= (e)=>{
        // e.stopPropagation()
        console.log("click en container descripcion")
    }

    return (
        <div className="containerDetalle" onClick={ ()=>{console.log("click en container deatlle")}}>
           <div className="contImg">
                <img src={imgSrc} alt={nombre}/>
           </div>

           <div className="contDesc" onClick={ handeOnClickDescripcion}>
               <h1>{nombre}</h1>
               <h3>${precio}</h3>
               <p>{desc}</p>

               <Contador valorInicial={0} stock={stock} onAdd={onAdd}/>
           </div>

           
        </div>
    )
}

export default ItemDetail
