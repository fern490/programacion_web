function App() {
  const [characters, setCharacters] = useState([]);
  // userEffect va a ejecutar el codigo que se encuentra
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((result) => setPersonajes(result.results));
  }, []);

  return (
    <>
      Hola Mundo
      <button>Hola soy un boton</button>
      <Usuario />
    </>
  );
}

export default App;
