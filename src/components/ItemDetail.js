import ItemCount from "./ItemCount"
import { useContext, useEffect } from "react"
import {contexto} from "./CartContext"

const ItemDetail = ({itemDetail}) => {
    const prueba = useContext(contexto)
    console.log(prueba)
    console.log(itemDetail)
    console.log(prueba.cart)
    const {addItem} = useContext(contexto)

    const onAdd = (amount) => {

        const detalle_cantidad = {
            item : itemDetail,
            quantity : amount
        }

    addItem(detalle_cantidad)
    }
   
    return (
        <ul>
            <p>{itemDetail.title}</p>
            <p>{itemDetail.description}</p>
            <p>{itemDetail.price}</p>
            <ItemCount stock={parseInt(itemDetail.stock)} initial={itemDetail.stock >= 1 ? 1 : 0} onAdd={onAdd}></ItemCount>
        </ul>
    );
        
}
export default ItemDetail