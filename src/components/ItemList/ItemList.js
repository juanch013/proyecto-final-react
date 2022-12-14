import Item from '../Item/Item'
import './ItemList.css'
import { Row,Col } from 'reactstrap'


const ItemList = ({platos}) =>{
    return(
        <Row className="g-0 container-list">
            {platos.map(item => <Item key={item.id} id={item.id} nombre={item.nombre} img={item.imgSrc} desc={item.desc} precio={item.precio} noBorder={true}/>)}
        </Row>
    )
}

export default ItemList