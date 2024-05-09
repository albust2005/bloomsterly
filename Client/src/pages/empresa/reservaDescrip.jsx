import { TitleAE } from "../../components/titles/titleAE";
import { useParams } from "react-router-dom";
import { useReservas } from "./hooks/useReservas";
import { useReservasContext } from "./provider/reservasProvider";
import { ServiciosReserva } from "./templates/serviciosReserva";

export function ReservaDescrip() {
  const { id } = useParams();

  const reservas = useReservasContext();
  const reserva = reservas?.find((reserva) => reserva.id === id);

  return (
    <>
      <TitleAE title="Reservación" descripcion="" />
      <div className="p-[1.5vh] flex gap-4 z-10">
        <h1>Reservas realizadas por el cliente</h1> 
      </div>
    </>
  );
}
