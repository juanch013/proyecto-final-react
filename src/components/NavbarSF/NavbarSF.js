import './NavbarSF.css'
import { useState,useContext } from 'react'

import '../CartWidget/CartWidget'
import CartWidget from '../CartWidget/CartWidget'
import { Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand,
    DropdownItem,
    UncontrolledDropdown,
    DropdownMenu,
    DropdownToggle} from 'reactstrap'

import { Link } from 'react-router-dom'

const NavbarSF = () => {
    const [isOpen, setIsOpen] = useState(false);

    

    
    return(
        <>
        <Navbar color="light" light expand="md" className="Navbar">
            <NavbarBrand href="/" className="imgContainer">
                <div>
                    <img src={`${process.env.PUBLIC_URL}/images/logo FoodSpot.png`} alt="a"/>
                </div>
            </NavbarBrand>
            <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
            
            <Collapse isOpen={isOpen} navbar className="container-nav">
                <Nav className="mr-auto" navbar>
                        <div className="container-navitems">     
                            <NavItem>
                                <NavLink href="#">
                                    <Link to='/' className="link">Menu</Link>
                                </NavLink>
                            </NavItem>

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                Categorias
                                </DropdownToggle>
                                <DropdownMenu end>
                                    <DropdownItem>
                                        <Link to='/categoria/entrada' className="link">Entradas</Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to='/categoria/principal' className="link">Plato Principal</Link>
                                    </DropdownItem>
                
                                    <DropdownItem>
                                        <Link to='/categoria/postre' className="link">Postres</Link>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        

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