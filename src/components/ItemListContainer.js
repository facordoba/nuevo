import ItemCount from "./ItemCount"
import { useEffect } from "react"
import { useState } from "react"
import  {m} from "./Mock"
import ItemList from "./ItemList"
const ItemListContainer = ({greeting}) =>{
    const onAdd = a => console.log("La cantidad es: " + a)

    const [items, setItems] = useState([])
    useEffect(()=>{
        
        const test = new Promise((resolve, reject)=>{  
            setTimeout(() => {
                resolve(items)
                
          }, 2000);
        })
        test.then(()=>setItems(m))
      
       
         }, [])

    return(
        <>
            <p>{greeting}</p>
            <ItemCount stock={3} initial={1} onAdd={ onAdd } />
            <ItemList items={items}/>
        </>
    )
}

export default  ItemListContainer
