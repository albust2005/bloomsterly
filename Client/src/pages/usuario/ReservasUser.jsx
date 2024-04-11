import { Link } from "react-router-dom"
import { NotFound } from "../../components/templates/NotFound"

export function ReservasUser() {
    const reservas = []
    return (
        <section>
            {reservas.length === 0
                ?
                <div className="w-full flex flex-col text-center gap-10">
                    <p className="text-wrap text-4xl font-text text-white ">
                        Realiza tu primera reserva <Link to='/categorias' 
                        className="hover:bg-purple-600 p-1 rounded-sm">aqui</Link></p>
                    <NotFound razon='reservas' />
                </div>
                :
                <h1>reservas</h1>
            }
        </section>
    )
}