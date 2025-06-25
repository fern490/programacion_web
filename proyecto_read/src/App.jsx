import { useState } from "react";
import "./App.css";

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
    </>
  );
}

export default App;
