import { useState } from 'react';
import './App.css';

function App() {

const [num, setNum] = useState([1, 2, 3]);
const [persona, setPersona] = useState({ nombre: "Pepito", edad: 30 });

/*Agregar una propiedad al objeto persona usando 'spread operator' => 4 puntos
y que al hacer click en un boton dispare la funcion y la muestre por consola*/
function prop() {
  const nueva_p = {...persona, pais: "Argentina"};
  setPersona(nueva_p);
  console.log(nueva_p);
}

/*Spread Operator: se usa principalmente para la manipulación de arrays, objetos y accesorios de componentes*/

/*Tarea: hacer que el setNum agregue números consecutivos => 3 puntos (.lenght)*/
function addNum() {
  setNum([...num, num.length +1]);
  console.log([...num, num.length + 1]);
}

//opcional => 3 puntos: Partiendo de { nombre: "Pepito", edad: 30 }, cambia solo nombre a "Luis" usando 'spread operator'
function cambNom() {
  const nuevaPersona = { ...persona, nombre: "Luis" };
  setPersona(nuevaPersona);
  console.log(nuevaPersona);
}

function myFunction() {
    setNum([...num, 5]);
  }

  return ( // JSON.stringify: convierte un objeto o valor de JS en una cadena de texto con formato JSON
    <div>
      <h3>Persona: {JSON.stringify(persona)}</h3>
      <h3>Números: {num.join(", ")}</h3>

      {/* Llamando a las funciones */}
      <button onClick={prop}>Agregar país</button>
      <button onClick={addNum}>Agregar número consecutivo</button>
      <button onClick={cambNom}>Cambiar nombre</button>
      <button onClick={myFunction}>Agregar 5</button>

      {/* Renderizar lista de números (setNum([...num, 5])) */}
      <div>
        {num.map((item, index) => ( // recorre el array 'num' y devuelve un nuevo array
          <p key={index}>{item}</p> /*crea un párrafo por cada elemento con una clave única para que React pueda identificar cada `ítem´ al renderizar*/
        ))}
      </div>
    </div>
  );
}

export default App;
