import { TitleAE } from "../../components/titles/titleAE";
import { useParams } from "react-router-dom";
import { useReservas } from "./hooks/useReservas";
import { useReservasContext } from "./provider/reservasProvider";
import { ServiciosReserva } from "./templates/serviciosReserva";

export function ReservaDescrip() {

    const { id } = useParams();

    const reservas = useReservasContext()
    const reserva = reservas.find(reserva => reserva.id === id)

    return <>
        <TitleAE title="Reservación" descripcion=""/>
        <div className="p-[1.5vh]">
            <div className="bg-color_font_dark mb-[1vh] dark:bg-light_theme p-[1.5vh] rounded-[2vh] h-[28vh] text-white dark:text-second_color_lt">
                <p className="float-end">N° de contrato: {reserva.id}</p>
                <p className="mb-[1.5vh]">Contrato de servicios</p>
                <p className="mb-[1vh]">Nombre de Usuario: {reserva.username}</p>
                <p className="mb-[1.5vh]">Correo: {reserva.email}</p>
                <p className="mb-[1.5vh]">Telefono: {reserva.telefono}</p>
                <p className="mb-[1.5vh]">Dirección: {reserva.direccion}</p>   
            </div>
            <div>
               <ServiciosReserva servicios={reserva.servicios}/> 
            </div>
        </div>
    </>
}