const Item = ({item})=>{
    return(
        <>
            <li> {item.title} </li>
            <li> {item.price} </li>
        </>
    )
}
export default Item