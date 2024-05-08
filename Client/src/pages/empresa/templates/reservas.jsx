import { reservasDB } from "../db/reservasDB.json";
import { NotFound } from "../../../components/templates/NotFound";
import { ButtonAdmin } from "../../../components/buttons/buttonAdmin";
import { useEffect, useState } from "react";
import axios from 'axios'

export function Reservas() {
  const [datos, setdatos] = useState([])
    useEffect(()=>{
        obtener()
    },[])
    const token = localStorage.getItem("token")
    const obtener = async()=>{
        try {
            const respuesta= await axios.get("http://localhost:8000/empresa/reservasClientes",{
                headers:{
                    Authorization:token
                }
            })
            setdatos(respuesta.data)
        } catch (error) {
            alert(error)
        }
    }
  return (
    <>
      {datos?.length === 0 ? (
        <NotFound />
      ) : (
        datos.map((reserva) => (
          <div
            className="flex  border-2 border-solid border-color_font_dark rounded-sm
            dark:bg-light_theme dark:border-light_theme z-10 "
            key={reserva.COD}
          >
            <div className="w-full flex flex-col justify-center bg-[#190042] text-white p-4
            rounded-sm dark:bg-second_color_lt z-10">
              <h3 className="font-title font-semibold text-3xl z-10" >Contrato de servicios</h3>

              <p className="font-title font-semibold text-lg mt-2 z-10">Nombre del Usuario: </p>
              <p className="font-title">{reserva.nombre}</p>

              <p className="font-title font-semibold text-lg mt-1 z-10">Apellido: </p>
              <p className="font-title">{reserva.apellido}</p>

              <p className="font-title font-semibold text-lg mt-1 z-10">Correo: </p>
              <p className="font-title">{reserva.email}</p>

              <p className="font-title font-semibold text-lg mt-1 z-10">Número de Servicios: </p>
              <p className="font-title">{reserva.numeroReservas}</p>


              <div className="flex  text-center flex-row-reverse z-10">
                <ButtonAdmin
                  href={`/empresa/reserva/reservaDescrip/${reserva.COD}`}
                >
                  Ver pedidos
                </ButtonAdmin>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
}
