import './Item.css'
import { Col } from 'reactstrap'
const Item = ({nombre,precio,img,desc}) =>{
    return (
        <Col className="colItem" xs="12" xl="3" lg="4" sm="6">
            <div className="container-item">
                <div className="container-img">
                    <img src={img} alt="Imagemn no disp"/>
                </div>
                <div className="container-desc">
                    <h5>${precio}</h5>
                    <h6>{nombre}</h6>
                    <p>{desc}</p>
                </div>
            </div>
        </Col>
    )
}
export default Item