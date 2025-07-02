// Ejercicio 2: Capturar Input (useState + onChange)

import { useState } from "react";

function CapturarInput() {
    const [texto, setTexto] = useState("");

    const handleChange = (event) => {
        setTexto(event.target.value);
    }

    return (
        <div>
            <input type="text" value={texto} onChange={handleChange} placeholder="Escribí algo"/>
            <p>{texto}</p>
        </div>
    );
}

export default CapturarInput;

// Si esta la carpeta 'node_modules' no es necesario instalar dependencias (npm install)
// Para correr el proyecto tiene que estar los 'node_modules' instalados y se corre con 'npm run dev',