import { TitleAE } from "../../components/titles/titleAE";
import { Reservas } from "./templates/reservas";


export function ReservasCliente() {
    return (
        <>
            <TitleAE title="Reserva de los clientes"/>
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                <Reservas />
            </div>
        </>
    )
}