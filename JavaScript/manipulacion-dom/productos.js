//Ejercicio 2

const productos = [];

function agregarProducto() {
    const input = document.getElementById("Producto");
    const nombre = input.value.trim();
    if (nombre === '') return;

    const li = document.createElement("li");
    li.textContent = nombre;
    li.onclick = () => li.remove(); // Eliminar producto al hacer click
    document.getElementById("listaProductos").append(li);  // Agregar a la lista visual
    productos.push(producto);
}

const btnComprado = document.createElement("boton1");
  btnComprado.textContent = "Comprado";
  btnComprado.classList.add("comprado-btn1");
  btnComprado.onclick = () => marcarComprado(li, producto);

const btnEliminar = document.createElement("boton2");
  btnEliminar.textContent = "Eliminar";
  btnEliminar.classList.add("eliminar-btn2");
  btnEliminar.onclick = () => eliminarProducto(li, producto);

li.appendChild(btnComprado);
li.appendChild(btnEliminar);
document.getElementById("listaProductos").append(li);

