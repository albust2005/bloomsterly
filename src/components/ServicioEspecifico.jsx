import { useParams } from "react-router-dom"

import { servicios } from "./db/servicios.js"
import { empresas } from "./db/empresas.js"
import { Layaout } from "./Layaout.jsx"
import { FirtsTitle } from "./titles/FirtsTitle.jsx"
import { EmpresaCards } from "./EmpresaCard.jsx"

export function ServicioEspecifico() {
    const { name } = useParams()

    const servicio = servicios.find((servicio) => servicio.nombre === name)

    if (!servicio) {
        // Servicio no encontrado, puedes manejar este caso según tus necesidades
        return <h1>Servicio no encontrado</h1>
    }

    // Encontrar empresas que contienen el servicio por su UUID
    const empresasConServicio = empresas.filter((empresa) => {
        return empresa.servicios.includes(servicio.uuid)
    })

    console.log(empresasConServicio)

    return (
        <Layaout>
            <section className="flex gap-4 flex-col">
                <FirtsTitle
                    title={name}
                    descripcion={servicio.descripcion}
                />
                <section className="columns-2 mx-36 md:mx-44 lg:mx-52 xl:mx-64">
                    {empresasConServicio.map(empresa => (
                        <div key={empresa.id} className=" ">
                            <EmpresaCards
                                img={empresa.logo}
                                empresa={empresa.nombre}
                                direccion={empresa.direccion}
                                municipio={empresa.municipio}
                                telefono={empresa.telefono}
                            />
                        </div>
                    ))}
                </section>

            </section>
        </Layaout >

    )

}