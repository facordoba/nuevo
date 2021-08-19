import { useContext } from "react"
import { Link } from "react-router-dom"
import contexto from "./CartContext"

const Item = ({item})=>{
    const resultado = useContext(contexto)
    console.log(resultado.nombre)
    
    return(
        <div id="itemBox">
            <Link to={`/item/${item.id}`}>
             <h1>{item.title}</h1>
            </Link>
            <img src={item.pictureURL}></img>
            <h5>{item.price}</h5>
            <p>{resultado.nombre}</p>
            <button onClick={resultado.cambiarNombre}>Cambiar nombre</button>
        </div>
    )
}
export default Item