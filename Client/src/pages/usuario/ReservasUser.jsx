import { Link } from "react-router-dom";
import { NotFound } from "../../components/templates/NotFound";
import { useUserContext } from "../../components/providers/userProvider";
import { useReservaUserContext } from "../../components/providers/reservasUserProvider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faMoneyBill, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const ReservaDetalleCard = ({
  nombre,
  direccion,
  fecha,
  telefono,
  servicios,
}) => {
  const { sesionUser } = useUserContext();

  return (
    <article className="flex text-white flex-col ">
      <div className="w-full  h-full p-5 bg-dark_theme dark:bg-second_color_lt rounded-sm min-h-56">
        <div className="flex flex-col ">
          <h1 className="font-title font-semibold text-3xl">
            Cliente {sesionUser.Username}
          </h1>

          <p className="font-title font-semibold text-lg mt-2">
            Nombre evento:
          </p>
          <h1 className="font-text">{nombre}</h1>

          <p className="font-title font-semibold text-lg mt-2">Direccion:</p>
          <h1 className="font-text">{direccion}</h1>

          <p className="font-title font-semibold text-lg mt-2">
            Fecha de realizacion:
          </p>
          <h1 className="font-text">{fecha}</h1>

          <p className="font-title font-semibold text-lg mt-2">Telefono:</p>
          <h1 className="font-text">{telefono}</h1>

          <p className="font-title font-semibold text-lg mt-2">Servicios:</p>
          <h1 className="text-white">{servicios}</h1>

          <div>
            <p className="font-title font-semibold text-lg mt-2">
              Metodos de pago:
            </p>
            <div className="flex gap-5">
              <FontAwesomeIcon
                icon={faCreditCard}
                size="xl"
                style={{ cursor: "pointer" }}
              />
              <FontAwesomeIcon
                icon={faMoneyBill}
                size="xl"
                style={{ cursor: "pointer" }}
              />
            </div>

            <p className="font-title font-semibold text-lg mt-2">
              Estado:
            </p>
            <p className="font-text">
              Pendiente
            </p>
          </div>

          <div className="w-full flex flex-row-reverse font-semibold font-text gap-3">
            <button className="bg-color_font_dark hover:bg-violet-700 transition-all dark:bg-rose-400 dark:hover:bg-rose-600  px-2 rounded-sm">
              Editar
            </button>
            <button className="bg-color_font_dark hover:bg-violet-700 transition-all dark:bg-rose-400 dark:hover:bg-rose-600  px-2 rounded-sm">
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};


const ReservaAddCard = () => {
  return (
    <article
      className="flex text-white flex-col items-center justify-center bg-dark_theme  dark:bg-second_color_lt z-10 min-h-56">
      <Link
        to='/reserva/crear'
        className="cursor-pointer"
      >
        <FontAwesomeIcon
          icon={faPlusCircle}
          size="2x"
        >
        </FontAwesomeIcon>
      </Link>
    </article>
  )

}



export function ReservasUser() {
  const { sesionUser } = useUserContext();
  const { reservaItem } = useReservaUserContext();
  return (
    <section>
      {reservaItem?.length === 0 ? (
        <div className="w-full flex flex-col text-center gap-10">
          <p className="text-wrap text-4xl font-text text-white dark:text-black">
            Realiza tu primera reserva
            <Link
              to={`/reserva/crear`}
              className="font-text font-extrabold text-color_font_dark text-4xl animate-pulse hover:text-yellow-300 cursor-pointer transition ease-in-out duration-300 dark:text-second_color_lt dark:hover:text-color_font_light px-2 "
            >
              aquí
            </Link>
          </p>
          <NotFound razon="reservas" />
        </div>
      ) : (
        <div>
          <h1 className="text-white dark:text-second_color_lt font-bloomsterly text-9xl text-center">
            Reservas
          </h1>
          <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {reservaItem?.map(
              ({ nombreEvento, fecha, direccion, telefono, servicios }) => (
                <ReservaDetalleCard
                  key={nombreEvento}
                  nombre={nombreEvento}
                  fecha={fecha}
                  direccion={direccion}
                  telefono={telefono}
                  servicios={servicios}
                />
              )
            )}
            <ReservaAddCard />
          </div>
        </div>
      )}
    </section>
  );
}
