import { useEffect } from "react";
import { useReservaUserContext } from "../../components/providers/reservasUserProvider";
import { TitleAE } from "../../components/titles/titleAE";
import { useReservasContext } from "./provider/reservasProvider";

const ReservaCard = ({
  nombre,
  telefono,
  fecha_evento,
  fecha_reserva,
  estado,
  direccion,
  valor_total,
}) => {
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
            <button className="bg-color_font_dark hover:bg-violet-700 transition-all dark:bg-rose-400 dark:hover:bg-rose-600  px-2 rounded-sm">
              Aceptar
            </button>
            <button className="bg-color_font_dark hover:bg-violet-700 transition-all dark:bg-rose-400 dark:hover:bg-rose-600  px-2 rounded-sm">
              Denegar
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export function ReservaDescrip() {
  const { reservasSeleccionada, obtenerReserva } = useReservasContext();

  useEffect(() => {
    obtenerReserva();
  }, []);

  return (
    <>
      <TitleAE title="Reservación" descripcion="" />
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 z-10">
        {reservasSeleccionada?.map((reserva) => (
          <ReservaCard
            key={reserva.COD}
            nombre={reserva.nombre}
            telefono={reserva.telefono}
            fecha_evento={reserva.fecha_evento}
            fecha_reserva={reserva.fecha_reserva}
            estado={reserva.estado}
            direccion={reserva.direccion}
            valor_total={reserva.valor_total}
          />
        ))}
      </div>
    </>
  );
}
