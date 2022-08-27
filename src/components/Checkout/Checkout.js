import { addDoc,collection,updateDoc,doc,getDocs,query,where,documentId, writeBatch } from 'firebase/firestore'
import { useState, useContext} from 'react'
import { Button } from 'reactstrap'
import CarritoContext from '../../context/ContextoCarrito'
import './Checkout.css'  
import {db} from '../../sevices/firebase'
import { useNavigate } from 'react-router-dom'



const Checkout = ()=>{
    const [cargando,setCargando] = useState(false)
    const{ Carrito, getCantidadItems, getPrecioTotal,limpiarCarrito} = useContext(CarritoContext)
    const navegar = useNavigate()


    const cantItems = getCantidadItems()
    const total = getPrecioTotal()


    const [Nombre, setNombre] = useState("");
    const [Apellido, setApellido] = useState("");
    const [Celular, setCelular] = useState("");
    const [Direccion, setDireccion] = useState("");

    
    const createOrder = async () => {
        setCargando(true)
        try {
            const ordenDeCompra = {
                comprador:{
                    nombre:Nombre,
                    apellido: Apellido,
                    celular:Celular,
                    direccion:Direccion
                },
                items:Carrito,
                total,
                cantItems,
            }
    
            // const refOrden = collection(db,'ordenes');
            // console.log(Carrito)
            // addDoc(refOrden,ordenDeCompra).then(res => {
            //     console.log(res)
            // })
    
            // const orderRef = doc(db,'products', 'idProducts')
            // updateDoc(orderRef, {stock:100}).then(res=>{
            //     console.log(res)
            // })
    
            const ids = Carrito.map(i => i.id)
    
            const refProductos = collection(db,'productos')
    
            const productosAgregadosFirestore = await getDocs(query(refProductos,where(documentId(), 'in', ids)))
    
            const { docs } = productosAgregadosFirestore
    
            const fueraDeStock = []
    
            const batch = writeBatch(db)
    
            docs.forEach(e => {
                const dataDoc = e.data()
                const stockDb = dataDoc.stock
    
                const productosDelCarrirto = Carrito.find(p => p.id === e.id);
                const cantidad = productosDelCarrirto?.cant
    
                if(stockDb >= cantidad){
                    batch.update(e.ref, {stock: stockDb - cantidad})
    
                }else{
                    fueraDeStock.push({id: e.id, ...dataDoc})
                }
    
            });
    
            if(fueraDeStock.length === 0){
                await batch.commit()
    
                const orderRef = collection(db,'ordenes')
                const ordenAgregada = await addDoc(orderRef,ordenDeCompra)
    
                console.log('la id de su orden es: ' + ordenAgregada.id)
                limpiarCarrito()
                navegar('/')
            }else{
                console.log('hay productos que estan fuera de stock')
            }
            
        } catch (e) {
            console.log(e)
            
        }finally{
            setCargando(false)
        }
    }

    if(cargando){
        return <h1>Se esta generando la orden ...</h1>
    }

    

    return(
        <>
        <h1>Checkout</h1>

        <div className='containerFormulario'>
                <form onSubmit={evento => {
                    evento.preventDefault()
                    setNombre(evento.target.name.value)
                    setApellido(evento.target.apellido.value)
                    setCelular(evento.target.cel.value)
                    setDireccion(evento.target.direccion.value)
                    createOrder()
                }}>
                    <input type='text' className="campoFormulario" placeholder="Nombre" name="name"></input>
                    <input type='text' className="campoFormulario" placeholder='Apellido' name="apellido"></input>
                    <input type='text' className="campoFormulario" placeholder='Celular' name="cel"></input>
                    <input type='text' className="campoFormulario" placeholder='Direccion' name="direccion"></input>
                    <Button className="btnForm" type='submit'>Generar orden de compra</Button>
                </form>
            </div>

        
        </>
        
    )
}

export default Checkout