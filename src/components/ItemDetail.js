import ItemCount from "./ItemCount"

const ItemDetail = ({itemDetail}) => {
    /* console.log(onAdd) */
    const onAdd = (amount) => {
       
    }
   
    return (
        <ul>
            <p>{itemDetail.title}</p>
            <p>{itemDetail.description}</p>
            <p>{itemDetail.price}</p>
            <ItemCount stock={parseInt(itemDetail.stock)} initial={1} onAdd={onAdd}></ItemCount>
            <div id="buttonDiv"></div>
        </ul>
    )

}
export default ItemDetail