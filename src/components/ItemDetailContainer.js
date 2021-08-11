import { useEffect } from "react"
import { useState } from "react"
import  mock from "./mock.json"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () =>{

    const [itemsDetail, setItemsDetail] = useState([])

    
    useEffect(()=>{
        
        new Promise((resolve, reject)=>{  
            
                setTimeout(() => {
                    resolve(mock)
                }, 2000);
        })
        .then( a => {setItemsDetail(a)} )

    })
    return(
        <>
            <ItemDetail itemDetail={itemsDetail}/>
        </>
    )
}

export default  ItemDetailContainer
