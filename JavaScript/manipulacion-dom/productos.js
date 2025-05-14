//Ejercicio 2

const productos = [];

function agregarProducto() {
    const input = document.getElementById("Producto");
    const nombre = nombre.value.trim();
    if (nombre === '') return;

    const li = document.createElement("li");
    li.textContent = listaProductos;
    li.onclick = () => li.remove();
    productos.push({nombre, comprado: false});
}
