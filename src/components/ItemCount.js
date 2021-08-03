import {useState} from "react"
const ItemCount = ({stock, initial}) =>{
    //const [contador, setContador] = useState(0)

    const resultado = useState(0) //SIEMPRE ME DEVUELVE UN ARRAY
    const contador = resultado[0]
    const setContador = resultado[1]

    const sumarContador = () =>{
        if (contador < stock){     
            setContador(contador + 1)
        }
    }
    const restarContador =()=>{
        if (contador > initial){
            setContador(contador - 1 )
        }
    }  
      const listo = () => alert("tu compra fue efectuada")
  
    
    return(
        <>
         <p>Contador:  {contador}  </p>
        <button onClick={sumarContador}>Sumar</button>
        <button onClick={restarContador}>Restar</button>
        <button onClick={listo}>Listo</button>
        </>
    )

}

export default ItemCount