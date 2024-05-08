import { createContext, useContext, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useToastify } from "../hooks/useToastify";
import axios from "axios";

const reservasUserContext = createContext()
const reservasUserCrudContext = createContext()

export const useReservaUserContext = () => useContext(reservasUserContext)
export const useReservaUserCrudContext = () => useContext(reservasUserCrudContext)

export function ReservasUserProvider({ children }) {
    const navigate = useNavigate()
    const { showToastMessage } = useToastify()

    const [servicios, setServicios] = useState([])
    const token = localStorage.getItem('token')

    const reserva = async (data) => {
        try {
            const { evento, fecha, direccion, telefono, servicios } = data
            const res = await axios.post(
                'http://localhost:8000/user/reserva',
                {
                    nombre: evento,
                    direccion: direccion,
                    fecha_evento: fecha,
                    telefono: telefono,
                    servicios: servicios,
                },
                {
                    headers: {
                        Authorization: token
                    }
                }
            );

            setServicios([])
            navigate('/reservas')
            showToastMessage(res.message)
            alert(res.message)
        } catch (err) {
            showToastMessage(err)
            console.log(err)
        }
    }

    const createReserva = async (data) => {
        reserva(data)
        console.log(data)

        document.getElementById('my-form').reset()
    }

    const addServicioSeleccionado = servicio => {
        const { id } = servicio
        const servicioExistente = servicios.find(servicio => servicio.id === id);
        if (servicioExistente) {
            showToastMessage('¡Este servicio ya ha sido seleccionado!');
            navigate(`/reserva/crear`)
            return;
        }

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
