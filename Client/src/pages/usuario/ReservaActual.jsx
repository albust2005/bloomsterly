import { Link } from "react-router-dom"
import { useForm } from 'react-hook-form'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"
import { useReservaUserContext, useReservaUserCrudContext } from "../../components/providers/reservasUserProvider"
import { useEmpresaContext } from "../../components/providers/empresaProvider"
import { useUserContext } from "../../components/providers/userProvider"
import { useState } from "react"

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
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    const [servicioSeleccionadoID, setServicioSeleccionadoID] = useState([])
    const { servicioSeleccionados } = useReservaUserContext()
    console.log(servicioSeleccionados)
    const { createReserva } = useReservaUserCrudContext()
    const empresas = useEmpresaContext()

    useState(() => {
        const servicioID = servicioSeleccionados?.find(servicio => servicio.id)?.id
        setServicioSeleccionadoID([...servicioSeleccionadoID, servicioID])
    }, [servicioSeleccionados])

    const onSubmit = (data) => {
        data.servicios = servicioSeleccionadoID
        createReserva(data)
        setServicioSeleccionadoID([])
    }

    const { sesionUser } = useUserContext()

    return (
        <section>
            <div>
                <h1>Reserva</h1>
            </div>

            <form action="" id="my-form" onSubmit={handleSubmit(onSubmit)} className="bg-color_switch_theme_dark">
                <div>
                    <div>
                        <h1>Nombre del evento: </h1>
                        <input type="text"
                            defaultValue='evento 1'
                            {...register("nombre_evento", {
                                required: {
                                    value: true,
                                    message: "Escribe un nombre para tu evento",
                                },
                            })}
                        />
                    </div>

                    <p>Cliente: {sesionUser?.Username}</p>

                    <div>
                        <h1>Direccion: </h1>
                        <input type="text"
                            {...register("direccion", {
                                required: {
                                    value: true,
                                    message: "Escribe la direccion del evento",
                                },
                            })}
                        />
                    </div>

                    <div className="">
                        <h1>Fecha: </h1>
                        <input type="date"
                            {...register("fecha")}
                        />
                    </div>

                    <label htmlFor="">Telefono: </label>
                    <input type="text"
                        {...register("telefono")}
                    />
                </div>

                <div className="bg-white">
                    <h1>Servicios: </h1>
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
                <div>
                    <button type="submit">confirmar</button>
                </div>
            </form>
        </section>
    )
}