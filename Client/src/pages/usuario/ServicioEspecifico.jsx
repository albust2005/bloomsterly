import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

import { categorias } from "../../db/categorias.js"
import { empresas } from "../../db/empresas.js"
import { Layaout } from "../../components/templates/Layaout.jsx"
import { FirtsTitle } from "../../components/titles/Title.jsx"
import { EmpresaCards } from "../../components/templates/EmpresaCard.jsx"
import { NotFound } from "../../components/templates/NotFound.jsx"



export function ServicioEspecifico() {
    const { categoriaName } = useParams()

    const [ empresasConServicio, setEmpresasConServicio ] = useState([])
    const [ descripcion, setDescripcion] = useState(null) 

    useEffect(() => {
        //encontramos la informacion del pedido seleccionado
        const categoria = categorias.find((categoria) => categoria.nombre === categoriaName)
        setDescripcion(categoria.descripcion)
        //buscamos que empresa contiene el uuid del servicio
        //nos devuelve un array con las empresas que coinciden
        const empresasConServicioInfo = empresas.filter((empresa) => {
            return empresa.categorias.includes(categoria.uuid)
        })
        setEmpresasConServicio(empresasConServicioInfo)
    }, [categoriaName])


    //mostramos las empresas por pantalla haciendo mapenado el array que las contiene
    //y renderizamos el componente EmpresaCards que contiene la estructura
    return (
        <section>
            <section className="flex gap-12 flex-col items-center">
                <FirtsTitle
                    title={categoriaName}
                    descripcion={descripcion}
                />
                <section className="mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 ">
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
        </section>

    )

}