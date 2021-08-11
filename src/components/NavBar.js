import CartWidgets from "./CartWidgets"
import { Link } from "react-router-dom"
const NavBar = () =>{
    return (
          <header>
              <Link to="/">
                 <h1>Tienda</h1>
              </Link>
              <nav>
                <Link to="/category/1">categoria 1</Link>
                <Link to="/category/2">categoria 2</Link>
                
              </nav>

              <CartWidgets/>
          </header>
    )
}


export default NavBar
