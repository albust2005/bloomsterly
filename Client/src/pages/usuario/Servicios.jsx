import { useCategoriaProvider } from "../../components/providers/categoriaProvider.jsx"
import { PolaroidCard } from "../../components/templates/PolaroidCard.jsx"
import { FirtsTitle } from "../../components/titles/Title.jsx" 


export function Servicios() {

    const categorias = useCategoriaProvider()

    return (
        <>
            <FirtsTitle 
            title="Servicios" 
            descripcion="Aqui podras encontrar las categorias de los servicios que ofrecemos para que crees tu evento de la mejor manera.">
            </FirtsTitle>

            <section className="flex flex-col gap-5 mb-3 -mt-8">
                <article className="containe mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {categorias.map(categoria => (

                        <div key={categoria.uuid}>
                            <PolaroidCard
                                url={categoria.img}
                                nombre={categoria.nombre}
                                descripcion={categoria.descripcion}
                                uuid={categoria.uuid}
                            />
                        </div>
                    ))}

                </article>
            </section>

        </>
    )
}

