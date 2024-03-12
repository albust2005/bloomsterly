import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

import { servicios } from "../../components/db/servicios.js"
import { empresas } from "../../components/db/empresas.js"
import { Layaout } from "../../components/templates/Layaout.jsx"
import { FirtsTitle } from "../../components/titles/Title.jsx"
import { EmpresaCards } from "../../components/templates/EmpresaCard.jsx"
import { NotFound } from "../../components/templates/NotFound.jsx"



export function ServicioEspecifico() {
    const { servicioName } = useParams()
    
    const [ empresasConServicio, setEmpresasConServicio ] = useState([])
    const [ descripcion, setDescripcion] = useState(null) 

    useEffect(() => {
        //encontramos la informacion del pedido seleccionado
        const servicio = servicios.find((servicio) => servicio.nombre === servicioName)
        setDescripcion(servicio.descripcion)
        //buscamos que empresa contiene el uuid del servicio
        //nos devuelve un array con las empresas que coinciden
        const empresasConServicioInfo = empresas.filter((empresa) => {
            return empresa.servicios.includes(servicio.uuid)
        })
        setEmpresasConServicio(empresasConServicioInfo)
    }, [servicioName])


    //mostramos las empresas por pantalla haciendo mapenado el array que las contiene
    //y renderizamos el componente EmpresaCards que contiene la estructura
    return (
        <Layaout>
            <section className="flex gap-4 flex-col items-center">
                <FirtsTitle
                    title={servicioName}
                    descripcion={descripcion}
                />
                <section className="flex items-center">
                    {

                        empresasConServicio.length === 0
                            ? <NotFound razon="empresas" />
                            : empresasConServicio.map(empresa => (
                                <div key={empresa.uuid} className=" ">
                                    <EmpresaCards
                                        img={empresa.logo}
                                        empresa={empresa.nombre}
                                        direccion={empresa.direccion}
                                        municipio={empresa.municipio}
                                        telefono={empresa.telefono}
                                        uuid={empresa.uuid}
                                    />
                                </div>
                            ))

                    }
                </section>

            </section>
        </Layaout >

    )

}