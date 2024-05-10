import { useEffect } from "react";
// import { useReservaUserContext } from "../../components/providers/reservasUserProvider";
import { TitleAE } from "../../components/titles/titleAE";
import { useReservasContext } from "./provider/reservasProvider";
import axios from "axios";
import PropTypes from 'prop-types'
import { useToastify } from "../../components/hooks/useToastify";

const ReservaCard = ({
  COD,
  nombre,
  telefono,
  fecha_evento,
  fecha_reserva,
  estado,
  direccion,
  valor_total,
  aceptar,
  negar
}) => {
  const { showToastMessage } = useToastify();
  const token = localStorage.getItem("token")
  const aceptarReser = async()=>{
    try {
      const respuesta = await axios.post(
        "http://localhost:8000/empresa/aceptarReserva",
        {
          COD: COD,
        },
        {
          headers:{
            Authorization: token
          }
        }
      );
      aceptar(true)
      showToastMessage(respuesta.data.message);
    } catch (error) {
      showToastMessage(error);
    }
  }
  const negarReser = async()=>{
    try {
      const respuesta = await axios.post(
        "http://localhost:8000/empresa/negarReserva",
        {
          COD:COD,
        },
        {
          headers:{
            Authorization: token
          }
        }
      );
      negar(true)
      showToastMessage(respuesta.data.message);
    } catch (error) {
      showToastMessage(error);
    }
  }
  return (
    <article className="flex text-white flex-col z-10">
      <div className="w-full  h-full p-5 bg-dark_theme dark:bg-second_color_lt rounded-sm z-10">
        <div className="flex flex-col ">
          <p className="font-title font-semibold text-lg mt-2">
            Nombre evento:
          </p>
          <h1 className="font-text">{nombre}</h1>

          <p className="font-title font-semibold text-lg mt-2">Dirección:</p>
          <h1 className="font-text">{direccion}</h1>

          <p className="font-title font-semibold text-lg mt-2">
            Fecha de realización:
          </p>
          <h1 className="font-text">{fecha_evento}</h1>

          <p className="font-title font-semibold text-lg mt-2">
            Fecha de Reservación:
          </p>
          <h1 className="font-text">{fecha_reserva}</h1>

          <p className="font-title font-semibold text-lg mt-2">Teléfono:</p>
          <h1 className="font-text">{telefono}</h1>

          <p className="font-title font-semibold text-lg mt-2">Valor total</p>
          <p className="font-text">{valor_total}</p>

          <p className="font-title font-semibold text-lg mt-2">Estado:</p>
          <p className="font-text">{estado}</p>

          <div className="w-full flex flex-row-reverse font-semibold font-text gap-3">
            <button  onClick={()=>{aceptarReser(COD)}} className="bg-color_font_dark hover:bg-violet-700 transition-all dark:bg-rose-400 dark:hover:bg-rose-600  px-2 rounded-sm">
              Aceptar
            </button>
            <button  onClick={()=>{negarReser(COD)}} className="bg-color_font_dark hover:bg-violet-700 transition-all dark:bg-rose-400 dark:hover:bg-rose-600  px-2 rounded-sm">
              Denegar
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
ReservaCard.propTypes = {
  COD: PropTypes.number,
  nombre: PropTypes.string,
  direccion: PropTypes.string,
  fecha: PropTypes.string,
  telefono: PropTypes.string,
  servicios: PropTypes.array,
  estado: PropTypes.string,
  fecha_evento: PropTypes.string,
  fecha_reserva: PropTypes.string,
  valor_total: PropTypes.number,
  aceptar: PropTypes.func.isRequired,
  negar: PropTypes.func.isRequired,
}
export function ReservaDescrip() {
  const { reservasSeleccionada, obtenerReserva } = useReservasContext();

  useEffect(() => {
    obtenerReserva();
  }, []);
  const aceptarReserva = (respuesta)=>{
    if (respuesta==true){
      obtenerReserva()
      reservasSeleccionada
    }
  }
  const negarReserva = (respuesta)=>{
    if (respuesta==true){
      obtenerReserva()
      reservasSeleccionada
    }
  }
  return (
    <>
      <TitleAE title="Reservación" descripcion="" />
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 z-10">
        {reservasSeleccionada?.map((reserva) => (
          <ReservaCard
            key={reserva.COD}
            COD={reserva.COD}
            nombre={reserva.nombre}
            telefono={reserva.telefono}
            fecha_evento={reserva.fecha_evento}
            fecha_reserva={reserva.fecha_reserva}
            estado={reserva.estado}
            direccion={reserva.direccion}
            valor_total={reserva.valor_total}
            aceptar={aceptarReserva}
            negar={negarReserva}
          />
        ))}
      </div>
    </>
  );
}
