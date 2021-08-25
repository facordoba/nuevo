import { useContext } from "react";
import { contexto } from "./CartContext";

const Cart = () => {

    const { cart , removeItem , clear } = useContext(contexto)

    return ( 
        <div>
            Cart

            {cart.map(item =>
                <div key={item.item.id}>
                    {item.item.title} x {item.quantity} - ${item.item.price * item.quantity}
                    <button onClick={()=>removeItem(item.item.id)}>borrar</button>
                </div>
            )}
        </div>
    )
}

export default Cart; 