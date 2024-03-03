import { useParams } from "react-router-dom"

import { servicios } from "./db/servicios.js"
import { empresas } from "./db/empresas.js"
import { Layaout } from "./templates/Layaout.jsx"
import { FirtsTitle } from "./titles/FirtsTitle.jsx"
import { EmpresaCards } from "./templates/EmpresaCard.jsx"

export function ServicioEspecifico() {
    const { name } = useParams()

    const servicio = servicios.find((servicio) => servicio.nombre === name)

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