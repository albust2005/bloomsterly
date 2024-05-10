import { TitleAE } from "../../components/titles/titleAE";
import { useParams } from "react-router-dom";
import { useReservasContext } from "./provider/reservasProvider";

export function ReservaDescrip() {

  return (
    <>
      <TitleAE title="Reservación" descripcion="" />
      <div className="p-[1.5vh] flex gap-4 z-10">
        <h1>Reservas realizadas por el cliente</h1>
      </div>
    </>
  );
}
