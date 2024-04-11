import { Link } from "react-router-dom"
import { NotFound } from "../../components/templates/NotFound"
import { useUserContext } from "../../components/providers/userProvider"

export function ReservasUser() {
    const { sesionUser } = useUserContext()

    const reservas = []
    return (
        <section>
            {reservas.length === 0
                ?
                <div className="w-full flex flex-col text-center gap-10">
                    <p className="text-wrap text-4xl font-text text-white">
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
                <h1>reservas</h1>
            }
        </section>
    )
}