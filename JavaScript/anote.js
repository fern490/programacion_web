var variable1 = ""; //Esto no se usa
let variable2 = "pueden ser reescritos sus valores";
const variable3 = "en este tipo sus valores no cambian";

const text = "String";
//const numero = 2; //ej: tipo 'int'
const booleanos = true; //o false tipo 'Boolean'

//operadores aritméticos son todos los de matemática; + - / % *

/* '==' compara el valor del dato y '===' este relaciona el valor y el tipo de dato
   '!=' distinto del valor y '!==' distinto del valor y tipo
    > <, >= <= lo 1ro es mayor o menor y 2do mayor o igual e menor o igual*/

/*condicionales: const edad = 20;
                 if (edad > 18) {
                   console.log("sos mayor de edad");
                 } else {
                     console.log("sos menor de edad");
                 }
*/

/*switch: const dia = 1
          switch(dia) {
              case 1: console.log('dia lunes'); break
              case 2: console.log('dia martes'); break
              default: console.log('Dia no registrado')
          }
*/

/*funciones: function saludar(nombre) {
                 return `hola`$(nombre)
             }
console.log(saludar("Ben"));
*/

/*Arreglos o arrays (listas en python)

const miArreglo = [1, 2, "pepito", true];
console.log(miArreglo[2]);

const miObjeto = {
  clave: "valor",
  nombre: "Federico",
  edad: 29,
};
console.log(niObjeto.nombre);
*/

/*
for (let 1 = 0; < miArreglo.lenght; 1++) (
  console.log(miArreglo[1]); //imprime en pantalla el arreglo con su posicion
)
*/



//Ejercicios de dificultad media: con 'if'

let num = 5;

if (num < 0) {
  console.log("Negativo");
} else if (num === 0) {
  console.log("Cero");
} else {
  console.log("Positivo");
}

//empleando 'for':
let sum = 0;

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log("La suma de los números pares del 1 al 10 es:", sum);

//usando 'for'(versión intermedia):
let number = 0;

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 !== 0) {
    number += i;
  }
}
console.log("La suma total es:", number);
