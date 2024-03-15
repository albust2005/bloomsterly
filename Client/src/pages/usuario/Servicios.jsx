import { Layaout } from "../../components/templates/Layaout.jsx"
import { PolaroidCard } from "../../components/templates/PolaroidCard.jsx"


import { categorias } from "../../db/categorias.js"
import { FirtsTitle } from "../../components/titles/Title.jsx"

export function Servicios() {

    return (
        <>
            <FirtsTitle 
            title="Servicios" 
            descripcion="Aqui podras encontrar las categorias de los servicios que ofrecemos para que crees tu evento de la mejor manera.">
            </FirtsTitle>

            <section className="flex flex-col gap-5 px-5 md:px-16 lg:px-24 2xl:px-64 mb-3 -mt-8">
                <article className="containe mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {categorias.map(servicio => (

                        <div key={servicio.uuid}>
                            <PolaroidCard
                                url={servicio.img}
                                nombre={servicio.nombre}
                                descripcion={servicio.descripcion}
                                uuid={servicio.uuid}
                            />
                        </div>
                    ))}

                </article>
            </section>

        </>
    )
}

