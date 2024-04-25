import { useCategoriaContext } from "../../components/providers/categoriaProvider.jsx"
import { PolaroidCard } from "../../components/templates/PolaroidCard.jsx"
import { FirtsTitle } from "../../components/titles/Title.jsx" 


export function Categorias() {

    const categorias = useCategoriaContext()

    return (
      <>
        <FirtsTitle
          title="Categorías"
          descripcion="Explora nuestras variadas categorías de servicios, diseñadas para ayudarte a planificar tu evento deseado"
        ></FirtsTitle>

        <section className="flex flex-col gap-5">
          <article className="containe mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 z-10">
            {categorias?.map((categoria) => (
              <div key={categoria.id}>
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
    );
}

