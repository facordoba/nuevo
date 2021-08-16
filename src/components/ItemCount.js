import {useState} from "react"
const ItemCount = ({stock, initial, onAdd}) =>{
    
   const [counter, setCounter] = useState(initial)

   /*    const result = useState(0) 
        const counter = result[0]
        const setCounter = result[1] */
   const addCounter = () =>{
        //counter ++ //Esto no es buena pracica
        if (counter < stock){     
            setCounter(counter + 1) } }//No se puede hacer conunter ++
      
    const removeCounter =()=>{
        if (counter > initial){
            setCounter(counter - 1 ) }}

    const resetCounter = ()=> setCounter(initial)
    
    const stateUp = ()=>{
        onAdd(counter)
    }
    return(
        <>
            <p>counter:  {counter}  </p>
            <button onClick={addCounter}>Sumar</button>
            <button onClick={removeCounter}>Restar</button>
            <button onClick={stateUp}>Agregar</button>
            <button onClick={resetCounter}>Reset</button>
        </>
    )
}

export default ItemCount