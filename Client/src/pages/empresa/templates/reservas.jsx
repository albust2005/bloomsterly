import { reservasDB } from "../db/reservasDB.json";
import { NotFound } from "../../../components/templates/NotFound";
import { ButtonAdmin } from "../../../components/buttons/buttonAdmin";

export function Reservas() {
  return (
    <>
      {reservasDB?.length === 0 ? (
        <NotFound />
      ) : (
        reservasDB.map((reserva) => (
          <div
            className="flex  border-2 border-solid border-color_font_dark rounded-sm
            dark:bg-light_theme dark:border-light_theme z-10 "
            key={reserva.id}
          >
            <div className="w-full flex flex-col justify-center bg-[#190042] text-white p-4
            rounded-sm dark:bg-second_color_lt z-10">
              <h3 className="font-title font-semibold text-3xl z-10" >Contrato de servicios</h3>

              <p className="font-title font-semibold text-lg mt-2 z-10">Nombre de Usuario: </p>
              <p className="font-title">{reserva.username}</p>

              <p className="font-title font-semibold text-lg mt-1 z-10">Correo: </p>
              <p className="font-title">{reserva.email}</p>

              <p className="font-title font-semibold text-lg mt-1 z-10">Teléfono: </p>
              <p className="font-title">{reserva.telefono}</p>

              <p className="font-title font-semibold text-lg mt-1 z-10">Dirección: </p>
              <p className="font-title">{reserva.dirección}</p>


              <div className="flex  text-center flex-row-reverse z-10">
                <ButtonAdmin
                  href={`/empresa/reserva/reservaDescrip/${reserva.id}`}
                >
                  Ver pedidos
                </ButtonAdmin>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
}
