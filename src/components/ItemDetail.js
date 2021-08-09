const ItemDetail = ({itemDetail})=>{
    return (
        <ul>
                {itemDetail.map(r=>{
                    return (
                        <>
                            <p>{r.price}</p>
                            <p>{r.description}</p>
                        </>
                )})}
                
            </ul>
    )
}
export default ItemDetail