import { Link } from "react-router-dom"
import { NotFound } from "../../components/templates/NotFound"

export function ReservasUser() {
    const reservas = []
    return (
        <section>
            {reservas.length === 0
                ?
                <div className="w-full flex flex-col text-center gap-10">
                    <NotFound razon='reservas' />
                    <p className="text-wrap text-4xl font-title">Realiza tu primera reserva <Link to='/categorias'>aqui</Link></p>
                </div>
                :
                <h1>reservas</h1>
            }
        </section>
    )
}