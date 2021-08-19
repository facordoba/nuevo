import { createContext, useState } from "react"


export const contexto = createContext()
export const {Consumer, Provider} = contexto 


const CustomProvider = ({children})=>{

  /* const [resultado, setResultado] = useState("Marta")
  const cambiarNombre = ()=>{
    setResultado("Charly")
  } */
  const [item, setItem] = useState()

  const addItem = (cc) => {
    setItem(cc)
  }

  const valueProvider = {
    /* nombre : resultado,
    cambiarNombre : cambiarNombre, */
    cantidad : item,
    addItem
    }
  
    return(
        <Provider value={valueProvider}>
            {children}
        </Provider>
    )
}
export default CustomProvider



//Consumer : no lo vamos a ver en es curso. Vamos a usar "useContext" : consume el valor del contexto
//Provider : cambiarle el valor a la variable contexto




