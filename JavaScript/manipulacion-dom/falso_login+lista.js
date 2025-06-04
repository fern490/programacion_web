const USER = "admin";
const PASS = "1234";

// Al cargar la página, verificar sesión
if (localStorage.getItem("loggedIn") === "true") {
  mostrarEmpleados();
}

function login() {
  const usuario = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (usuario === USER && password === PASS) {
    localStorage.setItem("loggedIn", "true");
    mostrarEmpleados();
  } else {
    document.getElementById("error").textContent = "Usuario o contraseña incorrectos.";
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  location.reload();
}

function mostrarEmpleados() {
  document.getElementById("loginContainer").style.display = "none";
  document.getElementById("employeeList").style.display = "block";

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json()) // cuando se obtenga la respuesta, convertir a JSON para que pueda usarla como objeto JS
    .then(data => {
      const contenedor = document.getElementById("empleados");
      contenedor.innerHTML = ""; // para modificar el contenido HTML dentro en un elemento HTML

      data.forEach(empleado => {
        const div = document.createElement("div");
        div.innerHTML = `
          <strong>${empleado.name}</strong><br>
          Email: ${empleado.email}<br>
          Empresa: ${empleado.company.name}
          <hr>
        `;
        contenedor.append(div);
      });
    });
}
