import { createContext, useContext, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useServiciosContext } from "./serviciosProvider";
import { useUserContext } from "./userProvider";
import { useToastify } from "../hooks/useToastify";

const reservasUserContext = createContext()
const reservasUserCrudContext = createContext()

export const useReservaUserContext = () => useContext(reservasUserContext)
export const useReservaUserCrudContext = () => useContext(reservasUserCrudContext)

export function ReservasUserProvider({ children }) {
    const navigate = useNavigate()
    const { sesionUser } = useUserContext()
    const { showToastMessage } = useToastify()

    const servicios = useServiciosContext()
    const [servicioSeleccionado, setServicioSeleccionado] = useState([])

    const addServicioSeleccionado = async (id) => {
        const servicioExistente = servicioSeleccionado.find(servicio => servicio.id === id);
        if (servicioExistente) {
            showToastMessage('¡Este servicio ya ha sido seleccionado!');
            return;
        }

        const nuevoServicioSeleccionado = await servicios.find(servicio => servicio.id === id)
        setServicioSeleccionado([...servicioSeleccionado, nuevoServicioSeleccionado])

        showToastMessage('Servicio agregado correctamente')
        navigate(`/reserva/${sesionUser?.Username}`)
    }

    console.log(servicioSeleccionado)

    return (
        <reservasUserContext.Provider value={servicioSeleccionado}>
            <reservasUserCrudContext.Provider value={{ addServicioSeleccionado }}>
                {children}
            </reservasUserCrudContext.Provider>
        </reservasUserContext.Provider>
    )
}
