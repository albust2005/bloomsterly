import { createContext, useContext } from "react";
import { useServicios } from "../hooks/useServicios";

const serviciosContext = createContext()

export const useServiciosContext = () => useContext(serviciosContext)

export function ServiciosProvider ({children}) {
    const { servicios } = useServicios()

    return (
        <serviciosContext.Provider value={servicios}>
            {children}
        </serviciosContext.Provider>
    )
}