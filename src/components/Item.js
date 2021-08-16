
import { Link } from "react-router-dom"

const Item = ({item})=>{
    return(
        <div id="itemBox">
            <Link to={`/item/${item.id}`}>
             <h1>{item.title}</h1>
            </Link>
            <img src={item.pictureURL}></img>
            <h5>{item.price}</h5>
        </div>
    )
}
export default Item