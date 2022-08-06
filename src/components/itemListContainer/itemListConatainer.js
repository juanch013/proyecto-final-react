import './itemListContainer.css'
import '../Contador/Contador'
import  ItemList from '../ItemList/ItemList'
import {getPlatos,getCategoriaPlatos} from '../../peticionDatos'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({text,count}) => {

    const [products, setproducts] = useState([]);
    const{cat} = useParams();

    console.log(cat)

    useEffect(() => {

        
        if(!cat){
            getPlatos().then(res => setproducts(res))
            .catch(err=>console.log(err))
        }else{
            getCategoriaPlatos(cat).then(res => setproducts(res))
            .catch(err => console.log(err))
        }

        
    }, [cat])

    return(
    <div className="mainContainer"> 
        <h1>{text}</h1>
        <ItemList platos={products}/>
    </div>
    )
}

export default ItemListContainer


