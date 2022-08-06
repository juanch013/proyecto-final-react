import './Item.css'
import { Col } from 'reactstrap'
import Contador from '../Contador/Contador'
import { Link } from 'react-router-dom'
const Item = ({id,stock,nombre,precio,img}) =>{
    return (
        <Col className="colItem" xs="12" xl="3" lg="4" sm="6">
            <Link to={`/detalle/${id}`} className="link">
                <div className="container-item">
                    <div className="container-img">
                        <img src={img} alt="Imagemn no disp"/>
                    </div>
                    <div className="container-desc">
                        <h5>${precio}</h5>
                        <h6>{nombre}</h6>
                    </div>
                </div>
            </Link>
        </Col>
    )
}
export default Item