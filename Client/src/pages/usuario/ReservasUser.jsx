import { Link } from "react-router-dom"
import { NotFound } from "../../components/templates/NotFound"
import { useUserContext } from "../../components/providers/userProvider"
import { useReservaUserContext } from "../../components/providers/reservasUserProvider"

const ReservaDetalleCard = ({nombre ,  direccion, fecha , telefono, servicios }) => {
    const {sesionUser} = useUserContext()

    return(
        <article className="flex   p-2 text-white flex-col ">
            <h1 className="text-white font-bloomsterly text-9xl text-center">Detalle de la reserva</h1>
            <div className="w-1/3  h-full p-2 bg-dark_theme dark:bg-second_color_lt">
                <div className="flex flex-col ">
                    <h1 className="font-title font-semibold text-3xl">Cliente {sesionUser.Username}</h1>
                    <p className="font-title font-semibold text-lg mt-2" >Nombre evento:</p>
                    <h1 className="font-text">{nombre}</h1>
                    <p className="font-title font-semibold text-lg mt-2" >Direccion:</p>
                    <h1 className="font-text">{direccion}</h1>
                    <p className="font-title font-semibold text-lg mt-2" >Fecha de realizacion:</p>
                    <h1 className="font-text">{fecha}</h1>
                    <p className="font-title font-semibold text-lg mt-2" >Telefono:</p>
                    <h1 className="font-text">{telefono}</h1>
                    <p className="font-title font-semibold text-lg mt-2" >Servicios:</p>
                    <h1 className="text-white">{servicios}</h1>
                    <p className="font-title font-semibold text-lg mt-2" >Metodos de pago:</p>
                </div>
            </div>
        </article>
    )
} 


export function ReservasUser() {
    const { sesionUser } = useUserContext()
    const { reservaItem } = useReservaUserContext()
    return (
        <section>
            {reservaItem?.length === 0
                ?
                <div className="w-full flex flex-col text-center gap-10">
                    <p className="text-wrap text-4xl font-text text-white dark:text-black">
                        Realiza tu primera reserva
                        <Link
                            to={`/reserva/${sesionUser?.Username}`}
                            className="font-text font-extrabold text-color_font_dark text-4xl animate-pulse hover:text-yellow-300 cursor-pointer transition ease-in-out duration-300 dark:text-second_color_lt dark:hover:text-color_font_light px-2 ">
                            aquí
                        </Link>
                    </p>
                    <NotFound razon='reservas' />
                </div>
                :
                reservaItem?.map(({nombreEvento, fecha, direccion, telefono,servicios}) => (
                    <ReservaDetalleCard
                        key={nombreEvento}
                        nombre={nombreEvento}
                        fecha={fecha}
                        direccion={direccion}
                        telefono={telefono}
                        servicios={servicios}
                    >
                    </ReservaDetalleCard>
                ))
            }
        </section>
    )
}