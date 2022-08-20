import './itemListContainer.css'
import '../Contador/Contador'
import  ItemList from '../ItemList/ItemList'
import {getPlatos,getCategoriaPlatos} from '../../peticionDatos'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../sevices/firebase'

const ItemListContainer = ({text,count}) => {

    const [products, setproducts] = useState([]);
    const{cat} = useParams();

    console.log(cat)

    useEffect(() => {

        const refColeccion = !cat ? collection(db,'productos') : query(collection(db,'productos'), where('cat', '==', cat))
        

        getDocs(refColeccion).then(res => {
            console.log(res)

            const adaptarProductos = res.docs.map(document => {
                const data = document.data()
                return {id: document.id, ...data}
            })
            console.log(adaptarProductos)
            setproducts(adaptarProductos)
        }).catch(e => {
            console.log(e)
        })
        
        // if(!cat){
        //     getPlatos().then(res => setproducts(res))
        //     .catch(err=>console.log(err))
        // }else{
        //     getCategoriaPlatos(cat).then(res => setproducts(res))
        //     .catch(err => console.log(err))
        // }
    }, [cat])

    return(
    <div className="mainContainer"> 
        <h1>{text}</h1>
        <ItemList platos={products}/>
    </div>
    )
}

export default ItemListContainer


