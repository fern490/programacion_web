// Ejercicio 4: Simulador de Carga (useState + useEffect)

import { useEffect, useState } from "react";

function SimularCarga() {
    const [estado, setEstado] = useState("Cargando...");

    useEffect(() => {
        const tiempo = setTimeout(() => {
            setEstado("Listo");
        }, 3000);
        return () => clearTimeout(tiempo);
    })
    
    return <h2>{estado}</h2>
}

export default SimularCarga;