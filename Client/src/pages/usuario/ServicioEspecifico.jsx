import { useParams } from "react-router-dom"
//import { useState, useEffect } from "react"
import { FirtsTitle } from "../../components/titles/Title.jsx"
import { EmpresaCards } from "../../components/templates/EmpresaCard.jsx"
import { NotFound } from "../../components/templates/NotFound.jsx"

export function ServicioEspecifico() {
    const { categoriaName } = useParams()
    const empresasConServicio = []

    //mostramos las empresas por pantalla haciendo mapenado el array que las contiene
    //y renderizamos el componente EmpresaCards que contiene la estructura
    return (
        <section className="z-10">
            <section className="flex gap-12 flex-col items-center z-10">
                <FirtsTitle
                    title={categoriaName}
                />
                <section className="mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 z-10">
                    {

                        empresasConServicio?.length === 0
                            ? <NotFound razon="servicios para esta categoria" />
                            : empresasConServicio.map(empresa => (
                                <div key={empresa.uuid} className=" z-10">
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