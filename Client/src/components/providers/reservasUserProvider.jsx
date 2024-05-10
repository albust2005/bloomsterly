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
    const [reservas, setReservas] = useState([])

    const token = localStorage.getItem('token')

    const obtenerReservas = async () => {
        try {
          const respuesta = await axios.get("http://localhost:8000/user/obtenerReservas", {
            headers: {
              Authorization: token
            }
          })
          setReservas(respuesta.data);
        } catch (error) {
          showToastMessage(error);
        }
    }

    const eliminarReserva = async (COD) => {
        try {
            const respuesta = await axios.post("http://localhost:8000/user/eliminarReserva", { COD: COD }, {
                headers: {
                    Authorization: token
                }
            })
            showToastMessage(respuesta.data.message)
            obtenerReservas()
        } catch (error) {
            showToastMessage(error);
        }
    }

    const createReserva = async (data) => {
        console.log(data)

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
            showToastMessage(res.data.message)
            // alert(res.message)
        } catch (err) {
            showToastMessage(err)
            console.log(err)
        }

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
            reservas
        }}>
            <reservasUserCrudContext.Provider value={{
                addServicioSeleccionado,
                removeServicioSeleccionado,
                createReserva,
                eliminarReserva, 
                obtenerReservas
            }}>
                {children}
            </reservasUserCrudContext.Provider>
        </reservasUserContext.Provider>
    )
}
