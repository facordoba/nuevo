import NavBar from "./components/NavBar"


import styles from "./styles.css"
import ItemListContainer from "./components/ItemListContainer"

const App = () =>
{
  /* const datos=[{dato:"bueno"}, {dato:"malo"}]
  const nombre="Facundo" */
  return(
    <>
    {/* <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">Active</Nav.Link>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav> */}
    <NavBar></NavBar>
    <ItemListContainer greeting="Hola como estass?"/>
    
    
    
    </>
  )
}

export default App