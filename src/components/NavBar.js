import CartWidgets from "./CartWidgets"
import Nav from 'react-bootstrap/Nav'
const NavBar = () =>{
    return (
    <nav>
        <h1>Tienda</h1>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
        <CartWidgets/>
    </nav>
    )
}


export default NavBar
