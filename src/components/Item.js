import {useState} from "react"

const Item = ({item})=>{
    const [detail, setDetail] = useState("")
    
    const showDetail = ()=>{
        setDetail(item.description)
    }
    return(
        <>
            <li> {item.title} </li>
            <button onClick={showDetail}>Mostrar descripcion</button>
            <p>{detail}</p>
        </>
    )
}
export default Item