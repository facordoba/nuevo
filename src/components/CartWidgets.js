import { useContext } from "react"
import { Link } from "react-router-dom"
import { contexto } from "./CartContext"


const CartWidget = () => {

    const { cart } = useContext(contexto)

    return (
        <>
                <Link to="/cart">
                <button>shopping_cart</button>
                {cart.length ? cart.length : null}
                </Link>
        </>
    )
}

export default CartWidget