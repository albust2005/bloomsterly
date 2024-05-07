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
        <div
          className="bg-[#190042]  dark:bg-light_theme p-[1.5vh] 
        rounded-sm h-full text-white dark:text-second_color_lt w-full "
        >
          <p className=" font-title font-semibold text-2xl">
            N° de contrato: {reserva?.id}
          </p>

          <p className="font-title font-semibold text-lg mt-2">
            Nombre de Usuario:{" "}
          </p>
          <p className="font-title">{reserva?.username}</p>

          <p className="font-title font-semibold text-lg mt-2">Correo: </p>
          <p className="font-title">{reserva?.email}</p>

          <p className="font-title font-semibold text-lg mt-2">Teléfono: </p>
          <p className="font-title">{reserva?.telefono}</p>

          <p className="font-title font-semibold text-lg mt-2">Dirección: </p>
          <p className="font-title">{reserva?.direccion}</p>
        </div>
        <div>
          <ServiciosReserva servicios={reserva?.servicios} />
        </div>
      </div>
    </>
  );
}
