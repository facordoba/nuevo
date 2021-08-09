/* import ItemCount from "./ItemCount" */
import { useEffect } from "react"
import { useState } from "react"
import  mock from "./mock.json"
/* import ItemList from "./ItemList" */
import ItemDetail from "./ItemDetail"
const ItemListContainer = ({greeting}) =>{
    const onAdd = a => console.log("La cantidad es: " + a)

    const [itemsDetail, setItemsDetail] = useState([])
    useEffect(()=>{
        
         const test = new Promise((resolve, reject)=>{  
            setTimeout(() => {
                resolve(mock)
          }, 2000);
        })
        test.then((a)=>setItems(a))
         }, [])
    return(
        <>
            <ItemDetail itemsDetail={itemsDetail}/>
        </>
    )
}

export default  ItemListContainer
