import { createContext, useContext } from "react";
import { useServicios } from "../hooks/useServicios";

const serviciosContext = createContext()

export const useServiciosContext = () => useContext(serviciosContext)

export function ServiciosProvider ({children}) {
    const { servicios, obtenerServicios } = useServicios()

    return (
        <serviciosContext.Provider value={{servicios, obtenerServicios}}>
            {children}
        </serviciosContext.Provider>
    )
}