/*import { useState } from "react";
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
*/

import { useState } from "react";
import BuscadorPeliculas from "./components/BuscadorPeliculas";
import ListaPeliculas from "./components/ListaPeliculas";
import DetallePelicula from "./components/DetallePelicula";

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [peliculas, setPeliculas] = useState([]);
  const [detalleSeleccionado, setDetalleSeleccionado] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;
}
