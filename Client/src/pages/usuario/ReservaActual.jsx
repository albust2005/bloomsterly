import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"
import { useReservaUserContext } from "../../components/providers/reservasUserProvider"
import { useEmpresaContext } from "../../components/providers/empresaProvider"

function AgregarServiciosReserva() {
    return (
        <div className="">
            <Link
                to='/categorias'
            >
                <FontAwesomeIcon
                    icon={faCirclePlus}
                />
            </Link>
        </div>
    )

}


function ServicioCardReserva({ empresa, nombre, valor }) {
    return (
        <article>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <h2>Nombre empresa: {empresa}</h2>
                <h1>Nombre servicio: {nombre}</h1>
                <p>Valor: {valor}</p>
            </div>
            <div>
                <button>eliminar</button>
            </div>
        </article>
    )
}


export function ReservaActual() {
    const servicioSeleccionados = useReservaUserContext()
    const empresas = useEmpresaContext()

    return (
        <section>
            <div>
                <h1>Reserva</h1>
            </div>
            <article className="bg-color_switch_theme_dark">
                <div>
                    <p>Nombre del evento:</p>
                    <p>Cliente:</p>
                    <p>Direccion:</p>
                    <p>Fecha:</p>
                    <p>Telefono:</p>
                    <p>Servicios:</p>
                </div>
                <div className="bg-white">
                    {
                        servicioSeleccionados?.map(({ id, idEmpresa, nombre, valor }) => (
                            <ServicioCardReserva
                                key={id}
                                empresa={empresas.find(em => em.id == idEmpresa)?.nombre}
                                nombre={nombre}
                                valor={valor}
                            />
                        ))
                    }
                    <AgregarServiciosReserva />
                </div>
            </article>
        </section>
    )
}