import './ItemDetailContainer.css'
import { useState,useEffect } from 'react'
import { getPlatoById } from '../../peticionDatos';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from '@firebase/firestore';
import { db } from '../../sevices/firebase';

const ItemDetailContainer = ({agregarItem})=>{
    const [plato, setPlato] = useState();
    const {IdPlato} = useParams()
    
    useEffect(()=>{
        getDoc(doc(db,'productos', IdPlato))
            .then(res=>{
                const data = res.data()
                const adaptarProd = {id: res.id, ...data}
                setPlato(adaptarProd)
            }).catch(e => {
                console.log(e)
            })
        // getPlatoById(IdPlato)
        //     .then((p) => {
        //         setPlato(p)
        //     }).catch((err) => {
        //         console.log(err)
        //     });
        
    },[IdPlato])

    return(
        <div className="g-0 container-detail">
            <ItemDetail {...plato} agregarItem={agregarItem}/>
        </div>

    )
    
}

export default ItemDetailContainer