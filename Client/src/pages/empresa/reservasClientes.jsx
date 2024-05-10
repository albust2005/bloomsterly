import { useEffect } from "react";

import { TitleAE } from "../../components/titles/titleAE";
import { useReservasContext } from "./provider/reservasProvider";
import { Reservas } from "./templates/reservas";
import { NotFound } from "../../components/templates/NotFound";

export function ReservasCliente() {
  const { obtenerAllReservas, obtenerReserva, reservas } = useReservasContext();

  useEffect(() => {
    obtenerAllReservas();
  }, []);

  return (
    <>
      <TitleAE title="Reserva de los clientes" />
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 z-10">
        {reservas.lenght === 0 ? (
          <NotFound razon='reservas'></NotFound>
        ) : (
          reservas?.map((reserva) => <Reservas 
          key={reserva.COD} 
          id={reserva.COD}
          nombre={reserva.nombre}
          email={reserva.email}  
          apellido={reserva.apellido}
          numeroReservas={reserva.numeroReservas}
          obtenerReserva={() => obtenerReserva(reserva.cod_reservas)}
          />)
        )}

      </div>
    </>
  );
}
