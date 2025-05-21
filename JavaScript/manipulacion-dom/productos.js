//Ejercicio 2

const productos = [];

function agregarProducto() {
  const input = document.getElementById("Producto");
  const nombre = input.value.trim(); //Toma el texto del input y quita espacios
  if (!nombre) return; //Si el input está vacío, sale de la función

  const producto = {nombre, comprado: false}; //Crea un objeto con el nombre y un estado "comprado" en 'false'
  productos.push(producto); //Agrega el producto a la lista

  const li = document.createElement("li");
  li.textContent = nombre; //Le pone el nombre del producto al <li>

  const btnComprado = document.createElement("button");
  btnComprado.textContent = "Comprado";
  btnComprado.classList.add("comprado-btn"); //Le da una clase al botón para estilos
  btnComprado.onclick = () => marcarComprado(li, producto);

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";
  btnEliminar.classList.add("eliminar-btn");
  btnEliminar.onclick = () => eliminarProducto(li, producto); //Le asigna una función al hacer clic

  li.append(btnComprado, btnEliminar); //Agrega los botones dentro del <li>
  document.getElementById("listaProductos").append(li); //Agrega el <li> a la lista <ul>
  input.value = "";
}

function marcarComprado(li, producto) {
  producto.comprado = !producto.comprado; //Cambia el estado de 'comprado'
  li.classList.toggle("comprado"); // .toggle() agrega una clase si no la tiene, y la quita si ya la tiene.
}

function eliminarProducto(li, producto) {
  const index = productos.indexOf(producto); //Busca en qué posición está el objeto 'producto' dentro del array
  if (index > -1) productos.splice(index, 1); 
  li.remove();
}
