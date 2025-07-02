function ListaPeliculas({ peliculas, onVerDetalles }) {
  if (!peliculas.length) return null;

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      {peliculas.map((peli) => (
        <div key={peli.imdbID} style={{ border: "1px solid #ccc", padding: "1rem" }}>
          <h3>{peli.Title}</h3>
          <p>{peli.Year}</p>
          <button onClick={() => onVerDetalles(peli.imdbID)}>Ver detalles</button>
        </div>
      ))}
    </div>
  );
}

export default ListaPeliculas;
