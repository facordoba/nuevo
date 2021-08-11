import Item from "./Item"
const ItemList = ({items})=>{
    return (
        <>
            <ul>
                
                {items.map(item=>{
                    return <Item item={item}/>
                })}
                
            </ul>
        </>
    )
}
export default ItemList