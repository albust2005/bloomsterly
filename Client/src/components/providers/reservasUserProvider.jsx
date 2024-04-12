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
    const [reservaItem, setReservaItem ] = useState([])

    const createReserva = (data) => {
        console.log(data)
        const newItem = {
            nombreEvento: data.nombre_evento,
            fecha: data.fecha,
            direccion: data.direccion,
            telefono: data.telefono,
            servicios: data.servicios
        }

        console.log(newItem)
        setReservaItem([...reservaItem, newItem])
        
        navigate('/reservas')

        document.getElementById('my-form').reset()
    }

    const addServicioSeleccionado = async (id) => {
        const servicioExistente = servicioSeleccionado.find(servicio => servicio.id === id);
        if (servicioExistente) {
            showToastMessage('¡Este servicio ya ha sido seleccionado!');
            navigate(`/reserva/${sesionUser?.Username}`)
            return;
        }

        const nuevoServicioSeleccionado = await servicios.find(servicio => servicio.id === id)
        setServicioSeleccionado([...servicioSeleccionado, nuevoServicioSeleccionado])

        showToastMessage('Servicio agregado correctamente')
        navigate(`/reserva/${sesionUser?.Username}`)
    }

    return (
        <reservasUserContext.Provider value={{servicioSeleccionados: servicioSeleccionado, reservaItem: reservaItem}}>
            <reservasUserCrudContext.Provider value={{ addServicioSeleccionado, createReserva }}>
                {children}
            </reservasUserCrudContext.Provider>
        </reservasUserContext.Provider>
    )
}
