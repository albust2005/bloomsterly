import { TitleAE } from "../../components/titles/titleAE";
import { Reservas } from "./templates/reservas";


export function ReservasCliente() {
    return (
        <>
            <TitleAE title="Reserva de los clientes"/>
            <Reservas />
        </>
    )
}