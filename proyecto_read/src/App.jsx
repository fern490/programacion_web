import { useState } from "react";
import "./App.css";
import CapturarInput from "./components/React_desde0/Ejercicios/capt";
import EfectoAlMont from "./components/React_desde0/Ejercicios/efect";
import SimularCarga from "./components/React_desde0/Ejercicios/sim_carga";
import Juntar from "./components/React_desde0/Ejercicios/juntar";

function App() {
  const [nombre, setNombre] = useState("");

  const handleClick = () => {
    console.log("Hola");
  };

  const handleInputChange = (event) => {
    setNombre(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Escribí tu nombre"
        value={nombre}
        onChange={handleInputChange}
      />
      <p>Lo que escribiste: {nombre}</p>
      <button onClick={handleClick}>Saludar en consola</button>
      <SimularCarga/>
    </>
  );
}

export default App;
