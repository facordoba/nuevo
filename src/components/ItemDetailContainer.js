import { useEffect } from "react"
import { useState } from "react"
import  mock from "./mock.json"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () =>{
    
    const [itemsDetail, setItemsDetail] = useState([])

    const params = useParams()
    /* console.log(params.id) */

    useEffect(()=>{
        
        new Promise((resolve, reject)=>{  
            
                setTimeout(() => {
                    resolve(mock)
                }, 2000);
        })
        .then( a => {  setItemsDetail(a.find(e => e.id == params.id))  } )

    },[])
    return(
        <>
            <ItemDetail itemDetail={itemsDetail}/>
        </>
    )
}

export default  ItemDetailContainer
