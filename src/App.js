import NavBar from "./components/NavBar"
import "./styles.css"
import ItemListContainer from "./components/ItemListContainer"
import ItemCount from "./components/ItemCount"
const App = () =>
{
  /* const datos=[{dato:"bueno"}, {dato:"malo"}]
  const nombre="Facundo" */
  //const contador = 0
  
  return(
    <>
    <NavBar></NavBar>
    <ItemListContainer greeting="Hola como estass?"/>
    <ItemCount stock={3} initial={1} onAdd />
    </>
  )
}

export default App