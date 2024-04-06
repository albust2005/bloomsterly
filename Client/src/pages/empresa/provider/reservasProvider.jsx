import { createContext, useContext } from "react";
import { useReservas } from "../hooks/useReservas";

const reservasContext = createContext()

export const useReservasContext = () => useContext(reservasContext)

export function ReservasProvider ({ children }) {
    const { reservas } = useReservas()

    return (
        <reservasContext.Provider value={reservas}>
            {children}
        </reservasContext.Provider>
    )
}