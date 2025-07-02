// Ejercicio 5: Todo junto (useState + useEffect + onClick + onChange)

import { use, useEffect, useState } from "react";

function Juntar() {
    const [nombre, setNombre] = useState("");
    const [saludo, setSaludo] = useState("");

    const manejarCambio = (e) => {
        setNombre(e.target.value);
    };

    const manejarClick = () => {
        setSaludo(`Hola, ${nombre}!`);
    };

    useEffect(() => {
        if (saludo) {
            console.log("Saludo Actualizado");
        }
    }, [saludo]);

    return (
        <div>
            <input type="text" placeholder="Escribí tu nombre" value={nombre} onChange={manejarCambio}/>
            <button onClick={manejarClick}>Saludar</button>
            <p>{saludo}</p>
        </div>
    );
}

export default Juntar;