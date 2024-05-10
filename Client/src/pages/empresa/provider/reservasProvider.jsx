import { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios'
const reservasContext = createContext();

export const useReservasContext = () => useContext(reservasContext);

export function ReservasProvider({ children }) {
  const [reservas, setReservas] = useState([]);
  const token = localStorage.getItem("token");

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

  //const obtenerRerserva = async () => {
    try {
        
    } catch (error) {
        console.log(error)
    }
  //}


  useEffect(()=>{
    obtenerAllReservas()
  },[])

  return (
    <reservasContext.Provider value={{ reservas, obtenerAllReservas }}>
      {children}
    </reservasContext.Provider>
  );
}
