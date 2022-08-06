import './ItemDetailContainer.css'
import { useState,useEffect } from 'react'
import { getPlatoById } from '../../peticionDatos';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
const ItemDetailContainer = ()=>{
    const [plato, setPlato] = useState();
    const {IdPlato} = useParams()
    
    useEffect(()=>{
        getPlatoById(IdPlato)
            .then((p) => {
                setPlato(p)
            }).catch((err) => {
                console.log(err)
            });
        
    },[IdPlato])

    return(
        <div>
            <ItemDetail {...plato}/>
        </div>

    )
    
}

export default ItemDetailContainer