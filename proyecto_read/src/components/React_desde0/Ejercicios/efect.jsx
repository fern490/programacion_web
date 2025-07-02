// Ejercicio 3:  Efecto al Montar (useEffect básico)

import { useEffect } from "react";

function EfectoAlMont() {
    useEffect(() => {
        console.log("Componente montado");
    }, []);

    return (
        <div>
            <h2>Componente montado</h2>
        </div>
    );
}

export default EfectoAlMont;
