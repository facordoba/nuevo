import NavBar from "./components/NavBar"
import "./styles.css"
import ItemListContainer from "./components/ItemListContainer"
import { useEffect } from "react"
import ItemList from "./components/ItemList"
const App = () =>{

  

  
  return(
    <>
      <NavBar></NavBar>
      <ItemListContainer greeting="Hola como estass?"/>
    </>
  )
}

export default App