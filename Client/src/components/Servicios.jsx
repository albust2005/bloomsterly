import { Layaout } from "./templates/Layaout"
import { PolaroidCard } from "./templates/PolaroidCard"


import { servicios } from "./db/servicios"
import { FirtsTitle } from "./titles/Title.jsx"

export function Servicios() {

    return (
        <Layaout>
            <FirtsTitle 
            title="Servicios" 
            descripcion="Aqui encontraras la lista completa de los servicios ofrecidos">
            </FirtsTitle>

            <section className="flex flex-col gap-5 px-5 md:px-16 lg:px-24 2xl:px-64 mb-3 -mt-8">
                <article className="containe mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {servicios.map(servicio => (

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

        </Layaout>


    )
}

