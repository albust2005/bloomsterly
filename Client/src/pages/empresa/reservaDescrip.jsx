import { TitleAE } from "../../components/titles/titleAE";
import { useParams } from "react-router-dom";
import { useReservas } from "./hooks/useReservas";
import { useReservasContext } from "./provider/reservasProvider";

export function ReservaDescrip() {

    const { id } = useParams();

    const reservas = useReservasContext()
    const reserva = reservas.find(reserva => reserva.id === id)
    console.log(reserva)

    return <>
        <TitleAE title="Reservación" descripcion=""/>
        <div className="bg-emerald-800 p-[1vh]">
            <div className="bg-white mb-[3vh]">
                <p className="float-end">N° de contrato: {reserva.id}</p>
                <p>Contrato de servicios</p>
                <p>Correo: {reserva.email}</p>
                <p>Telefono: {reserva.telefono}</p>
                <p>Dirección: {reserva.direccion}</p>
            </div>
            <div>
                
            </div>
        </div>
    </>
}