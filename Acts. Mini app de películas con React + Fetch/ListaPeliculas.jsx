function ListaPeliculas({ peliculas, onVerDetalles }) {
  if (!peliculas.lenght) return null;

  return (
    <div style={{display="flex"}}>
        {peliculas.map((peli) => (
            <div key={peli.imbdID} style={{border:"1px solid #ccc"}}>
              <h3>{peli.Title}</h3>
              <p>{peli.Year}</p>
              <button on ></button>
            </div>
        )

        )}
        
        </>
  );
}
