function BuscadorPeliculas({ busqueda, setBusqueda, onBuscar }) {
  const manejarCamb = (e) => setBusqueda(e.target.value);

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar pelicula.."
        value={busqueda}
        onChange={manejarCamb}
      />
      <button onClick={onBuscar}>Buscar</button>
    </div>
  );
}

export default BuscadorPeliculas;
