import './NavbarSF.css'
import { useState } from 'react'
import '../CartWidget/CartWidget'
import CartWidget from '../CartWidget/CartWidget'
import { Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand} from 'reactstrap'

const NavbarSF = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return(
        <>
        <Navbar color="light" light expand="md" className="Navbar">
            <NavbarBrand href="/" className="imgContainer">
                <div>
                    <img src="images/logo FoodSpot.png" alt="a"/>
                </div>
            </NavbarBrand>
            <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
            
            <Collapse isOpen={isOpen} navbar className="container-nav">
                <Nav className="mr-auto" navbar>
                        <div className="container-navitems">
                        <NavItem>
                            <NavLink href="#">Menu</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Promociones</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Sucursales</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Contacto</NavLink>
                        </NavItem>
                        </div>
                        <div className="a">
                        <NavItem className="container-cartWidget">
                            <CartWidget/>
                        </NavItem>
                        </div>
                </Nav>
                
            </Collapse>
    </Navbar>
    <div className="bottomBar"></div>
    </>
    )
    
}

export default NavbarSF