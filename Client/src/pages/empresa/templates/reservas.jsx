import { reservasDB } from "./reservasDB";
import { NotFound } from "../../../components/templates/NotFound";
import { ButtonAdmin } from "../../../components/buttons/buttonAdmin";

export function Reservas() {
    return(
        <>
            {
                reservasDB?.length === 0 
                ? <NotFound />
                : reservasDB.map(reserva => (
                    <div className="flex bg-color_font_dark mb-[2vh] border-[0.4vh] border-solid border-color_font_dark rounded-[1vh]" key={reserva.id}>
                        <div className="w-[55%] flex flex-col justify-center bg-[#190042] text-white p-[3vh] rounded-[1vh]">
                            <h3>Contrato de servicios</h3>
                            <p>Nombre de Usuario: {reserva.username}</p>
                            <p>Correo: {reserva.email}</p>
                            <p>Teléfono: {reserva.telefono}</p>
                            <p>Dirección: {reserva.dirección}</p>   
                        </div>
                        <div className="flex flex-col w-[45%] text-center">
                            <ButtonAdmin>Confirmar</ButtonAdmin>
                            <ButtonAdmin>Eliminar</ButtonAdmin>
                            <ButtonAdmin>Ver pedidos</ButtonAdmin>  
                        </div>
                    </div>
                ))
            }
        </>
    )
}