import './itemListContainer.css'
import '../Contador/Contador'
import  ItemList from '../ItemList/ItemList'
import {getPlatos} from '../../peticionDatos'
import { useState,useEffect } from 'react'

const ItemListContainer = ({text,count}) => {

    const [products, setproducts] = useState([]);

    useEffect(() => {
        getPlatos().then(res => setproducts(res))
            .catch(err=>console.log(err))
    }, []);

    return(
    <div className="mainContainer"> 
        <h1>{text}</h1>
        <ItemList platos={products}/>
    </div>
    )
}

export default ItemListContainer


