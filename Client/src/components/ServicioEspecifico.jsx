import { useParams } from "react-router-dom"

import { servicios } from "./db/servicios.js"
import { empresas } from "./db/empresas.js"
import { Layaout } from "./templates/Layaout.jsx"
import { FirtsTitle } from "./titles/FirtsTitle.jsx"
import { EmpresaCards } from "./templates/EmpresaCard.jsx"
import { NotFound } from "./templates/NotFound.jsx"


export function ServicioEspecifico() {
    const { servicioName } = useParams()

    //encontramos la informacion del pedido seleccionado
    const servicio = servicios.find((servicio) => servicio.nombre === servicioName)
    //buscamos que empresa contiene el uuid del servicio
    //nos devuelve un array con las empresas que coinciden
    const empresasConServicio = empresas.filter((empresa) => {
        return empresa.servicios.includes(servicio.uuid)
    })

    //mostramos las empresas por pantalla haciendo mapenado el array que las contiene
    //y renderizamos el componente EmpresaCards que contiene la estructura
    return (
        <Layaout>
            <section className="flex gap-4 flex-col items-center">
                <FirtsTitle
                    title={servicioName}
                    descripcion={servicio.descripcion}
                />
                <section className="flex items-center">
                    {

                        empresasConServicio.length === 0
                            ? <NotFound razon="empresas"/>
                            : empresasConServicio.map(empresa => (
                                <div key={empresa.uuid} className=" ">
                                    <EmpresaCards
                                        img={empresa.logo}
                                        empresa={empresa.nombre}
                                        direccion={empresa.direccion}
                                        municipio={empresa.municipio}
                                        telefono={empresa.telefono}
                                    />
                                </div>
                            ))

                    }
                </section>

            </section>
        </Layaout >

    )

}