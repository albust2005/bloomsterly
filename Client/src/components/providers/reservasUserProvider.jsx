import { createContext, useContext, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useToastify } from "../hooks/useToastify";

const reservasUserContext = createContext()
const reservasUserCrudContext = createContext()

export const useReservaUserContext = () => useContext(reservasUserContext)
export const useReservaUserCrudContext = () => useContext(reservasUserCrudContext)

export function ReservasUserProvider({ children }) {
    const navigate = useNavigate()
    const { showToastMessage } = useToastify()

    const [servicios, setServicios] = useState([])
    const [reservas, setReserva] = useState([])

    const createReserva = (data) => {
        console.log(data)
        const newItem = {
            nombreEvento: data.evento,
            fecha: data.fecha,
            direccion: data.direccion,
            telefono: data.telefono,
            servicios: data.servicios
        }

        console.log(newItem)
        setReserva([...reservas, newItem])
        setServicios([])

        navigate('/reservas')
        showToastMessage('¡Reserva creada correctamente!')
        document.getElementById('my-form').reset()
    }

    const addServicioSeleccionado = servicio => {
        const { id } = servicio
        // const servicioExistente = servicios.find(servicio => servicio.id === id);
        // if (servicioExistente) {
        //     showToastMessage('¡Este servicio ya ha sido seleccionado!');
        //     navigate(`/reserva/crear`)
        //     return;
        // }


        setServicios(prevItem => [
            ...prevItem,
            {
                ...servicio
            }
        ])

        showToastMessage('¡Servicio agregado a la reserva!')
        navigate(`/reserva/crear`)
    }

    const removeServicioSeleccionado = servicio => {
        const { id } = servicio
        setServicios(prevItem => prevItem.filter(item => item.id !== id))
    }


    return (
        <reservasUserContext.Provider value={{
            servicioSeleccionados: servicios,
            reservaItem: reservas
        }}>
            <reservasUserCrudContext.Provider value={{
                addServicioSeleccionado,
                removeServicioSeleccionado,
                createReserva
            }}>
                {children}
            </reservasUserCrudContext.Provider>
        </reservasUserContext.Provider>
    )
}
