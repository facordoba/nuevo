import ItemCount from "./ItemCount"
import { useContext } from "react"
import {contexto} from "./CartContext"

const ItemDetail = ({itemDetail}) => {
    const prueba = useContext(contexto)
    console.log(prueba)
    const {addItem} = useContext(contexto)

    const onAdd = (amount) => {

        const detalle_cantidad = {
            item : itemDetail,
            quantity : amount
        }

    addItem(detalle_cantidad)
    }
    /* console.log(onAdd) */
    if (prueba.cantidad == undefined){
        return (
            <ul>
                <p>{itemDetail.title}</p>
                <p>{itemDetail.description}</p>
                <p>{itemDetail.price}</p>
                <ItemCount stock={parseInt(itemDetail.stock)} initial={1} onAdd={onAdd}></ItemCount>
            </ul>
        );
    }
    else{
        return (
            <ul>
                <p>{itemDetail.title}</p>
                <p>{itemDetail.description}</p>
                <p>{itemDetail.price}</p>
                {/* <ItemCount stock={parseInt(itemDetail.stock)} initial={1} onAdd={onAdd}></ItemCount> */}
                <p>La cantidad adquirida es {prueba.cantidad.quantity}</p>
                <button onClick={}>Terminar Compra</button>
        
            </ul>
        );
    }
        
}
export default ItemDetail