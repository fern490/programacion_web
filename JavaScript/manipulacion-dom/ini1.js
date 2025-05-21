// Manipulacion del DOM
// Nos permite interactuar con el documento, modificar su estructura, estilo y contenido

// Seleccionar elementos del DOM
// por ID

// Aquí estamos obteniedno por id la etiqueta titulo, este nos permite acceder a todas sus propiedades 
let titulo = document.getElementById("titulo");
console.log(titulo);
console.log(titulo.textContent, titulo.innerText);

titulo.textContent = "este es el nuevo titulo"; // Modifica el titulo



let boton = document.getElementById("boton");
boton.addEventListener("click", function(){
    alert("Este boton ha sido clikeado")
})

let container = document.getElementById("container");
let parrafo = document.createElement("p");
parrafo.textContent = "Este es el parrafo creado";
container.append(parrafo);



//Ejercicio 1 'DOM'

function agregarTarea() {
    const input = document.getElementById("Tarea");
    const tareaTexto =  input.value.trim();
    if (tareaTexto === '') return;

    const li = document.createElement("li");
    li.textContent = tareaTexto;
    li.onclick = () => li.remove();
    document.getElementById("listaTareas").append(li);
}
