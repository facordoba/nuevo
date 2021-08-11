const ItemDetail = ({itemDetail})=>{
    return (
        <ul>
                {itemDetail.map(r=>{
                    return (
                        <div id="itemDetail">
                            <p>{r.id}</p>
                            <p>{r.title}</p>
                            <p>{r.description}</p>
                            <p>{r.price}</p>
                        </div>
                )})}
                
            </ul>
    )
}
export default ItemDetail