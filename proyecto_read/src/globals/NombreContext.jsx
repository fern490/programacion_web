import React from "react"

const NombreContext = React.createContext()

export function NombreProvider(children) {
    const nom = "Fede";
    
    return <NombreContext.Provider value={nom}>{children}</NombreContext.Provider>
}