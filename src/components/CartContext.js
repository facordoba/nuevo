import { createContext, useState } from "react"


export const contexto = createContext()
export const {Consumer, Provider} = contexto 


const CustomProvider = ({children})=>{

  const [cart, setCart] = useState([])
  
  const addItem = (item => {
    setCart([...cart,item])
  })
  
  const removeItem = (itemId) => {
    console.log(itemId)
}

const clear = () => {
    console.log("Clear")
}

const isInCart = (id) => {}
  
  const valueProvider = {cart, addItem, removeItem, clear  }
  
  return(
    <Provider value={valueProvider}>
            {children}
        </Provider>
    )
  }
  export default CustomProvider
  
  
  
  //Consumer : no lo vamos a ver en es curso. Vamos a usar "useContext" : consume el valor del contexto
  //Provider : cambiarle el valor a la variable contexto
  
  
  
  
  
  /* const [resultado, setResultado] = useState("Marta")
  const cambiarNombre = ()=>{
    setResultado("Charly")
  } */
  
  /* nombre : resultado,
  cambiarNombre : cambiarNombre, */