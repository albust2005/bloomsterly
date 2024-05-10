import { ButtonAdmin } from "../../../components/buttons/buttonAdmin";

export function Reservas({ id, nombre, apellido, email, numeroReservas }) {
  return (
    <div className="flex rounded-sm dark:bg-light_theme dark:border-light_theme z-10 ">
      <div
        className="w-full flex flex-col justify-center bg-[#2D0969] text-white p-4
            rounded-sm dark:bg-second_color_lt z-10"
      >
        <h3 className="font-title font-semibold text-3xl z-10">
          Solicitud de reserva
        </h3>

        <p className="font-title font-semibold text-lg mt-2 z-10">
          Nombre del Usuario:{" "}
        </p>
        <p className="font-title">{nombre}</p>

        <p className="font-title font-semibold text-lg mt-1 z-10">Apellido: </p>
        <p className="font-title">{apellido}</p>

        <p className="font-title font-semibold text-lg mt-1 z-10">Correo: </p>
        <p className="font-title">{email}</p>

        <p className="font-title font-semibold text-lg mt-1 z-10">
          Número de reservas:
        </p>

        <p className="font-title">{numeroReservas}</p>

        <div className="flex  text-center flex-row-reverse z-10">
          <ButtonAdmin href={`/empresa/reserva/reservaDescrip/${id}`}>
            Ver reservas
          </ButtonAdmin>
        </div>
      </div>
    </div>
  );
}
