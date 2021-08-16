import ItemCount from "./ItemCount"
import { useEffect } from "react"
import { useState } from "react"
import  mock from "./mock.json"
import ItemList from "./ItemList"
import  {useParams} from "react-router-dom"


const ItemListContainer = ({greeting}) =>{
    
    const [items, setItems] = useState([])
    
    const params = useParams()
        useEffect(()=>{
            
            new Promise((resolve, reject)=>{  
                if(params.id == 1){
                    setTimeout(() => {
                        resolve(mock.filter(e => e.category == 1))
                    }, 2000);
                }
                else if(params.id == 2){
                    setTimeout(() => {
                        resolve(mock.filter(e => e.category == 2))
                    }, 2000);
                }
                else{
                    setTimeout(() => {
                        resolve(mock)
                    }, 2000);
                }
            })
            .then( a => {setItems(a)} )
    
        })
    

    /* const pedido = fetch('https://jsonplaceholder.typicode.com/posts')   
    .then(a => a.json()  )
    .then(a => console.log(a)  ) */
    
    return(
        <>
            <p>{greeting}</p>
            
            <ItemList items={items}/>
        </>
    )
}

export default  ItemListContainer
