import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const reservasContext = createContext();

export const useReservasContext = () => useContext(reservasContext);

export function ReservasProvider({ children }) {
  const [reservas, setReservas] = useState([]);
  const [reservasSeleccionada, setReservasSeleccionadas] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const obtenerAllReservas = async () => {
    try {
      const respuesta = await axios.get(
        "http://localhost:8000/empresa/reservasClientes",
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setReservas(respuesta.data);
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerReserva = async (reservas) => {
    try {
      const respuesta = await axios.post(
        "http://localhost:8000/empresa/reservaSeleccionada",
        {
          reservas: reservas,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      navigate('/empresa/reserva/reservas')
      setReservasSeleccionadas(respuesta.data);
      console.log(respuesta.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerAllReservas();
  }, []);

  return (
    <reservasContext.Provider
      value={{
        reservas,
        reservasSeleccionada,
        obtenerAllReservas,
        obtenerReserva,
      }}
    >
      {children}
    </reservasContext.Provider>
  );
}
