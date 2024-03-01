import { Layaout } from "./Layaout"
import { Footer } from "./Footer"
import { PolaroidCard } from "./PolaroidCard"


import { servicios } from "./const-js/servicios"
import { FirtsTitle } from "./titles/FirtsTitle"

export function Servicios() {

    return (
        <Layaout>
            <FirtsTitle 
            title="Servicios" 
            descripcion="Aqui encontraras la lista completa de los servicios ofrecidos">
            </FirtsTitle>

            <section className="flex flex-col gap-5 px-10 md:px-16 lg:px-24 2xl:px-64 mb-3">
                <article className="container mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {servicios.map(servicio => (

                        <div key={servicio.nombre}>
                            <PolaroidCard
                                url={servicio.img}
                                nombre={servicio.nombre}
                                descripcion={servicio.descripcion}
                            />
                        </div>
                    ))}

                </article>
            </section>

        </Layaout>


    )
}

