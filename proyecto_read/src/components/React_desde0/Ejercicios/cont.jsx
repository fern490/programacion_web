// Ejercicio 1: Contador con Botón (useState + onClick)

import { useState } from "react";

function Contador() {
    const [contador, setContador] = useState(0);

    return (
        <div>
            <h1>{contador}</h1>
            <button onClick={() => setContador(contador + 1)}>Sumar</button>
            <button onClick={() => setContador(contador - 1)}>Restar</button>
        </div>
    );
}

export default Contador;
