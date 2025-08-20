import { useState } from 'react';
import './App.css';

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
  }

//opcional => 3 puntos: Partiendo de { nombre: "Pepito", edad: 30 }, cambia solo nombre a "Luis" usando 

function myFunction() {
  setNum([...num, 5])
}
function funct() {
  return (
    <>
     <div>
     {num.map((item, index) => (
      <p>{item}</p>
      ))}
      <button onClick={myFunction}>Agregar número</button>
     </div>
    </>
)}

export default addNum;
