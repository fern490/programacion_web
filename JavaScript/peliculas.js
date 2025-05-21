/* 🧪 Ejercicio: Tienda de productos

let inventario = [];

inventario.push({nombre: "Auriculares", precio: 5500, categoria: "Electrónica"},
                {nombre: "Zapatillas", precio: 9000, categoria: "Ropa"},
                {nombre: "Celular", precio: 80000, categoria: "Electrónica"},
                {nombre: "Libro", precio: 4000, categoria: "Librería"});

console.log("Todos los productos: ");
inventario.forEach(producto => {console.log(producto)});

const electrónica = inventario.filter(producto => producto.categoria === "Electrónica")
console.log("\nProductos de Tecnología: ", electrónica)

const nombres = inventario.map(producto => producto.nombre);
console.log("Nombres de los productos: ", nombres)*/


let peliculas = [];

peliculas.push({título: "Titanic", director: "James Cameron", año: 1997, género: "Romance"}, 
               {título: "Avengers: Endgame", director: "Anthony y Joe Russo", año: 2019, género: "Acción"},
               {titulo: "Parasite", director: "Bong Joon-ho", año: 2019, genero: "Drama"});

peliculas.unshift({titulo: "Avatar", director: "James Cameron", año: 2009, genero: "Ciencia Ficción"})

const primeraDelete = peliculas.shift();

console.log("Cantidad de películas actuales: ", peliculas.length);
