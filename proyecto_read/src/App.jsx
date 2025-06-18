import "./App.css"
import { Proveedor } from './components/proveedor/proveedor';
import Usuario from "./components//Usuario";
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState([])
  // userEffect va a ejecutar el codigo que se encuentra 
  userEffect(() =>{
    fetch("https://rickandmortyapi.com/api/character/?page=19")
    .then()
  }, {})

  return (<>Hola Mundo
  <button>Hola soy un boton</button>
  <Usuario />
  </>);
}

export default App
