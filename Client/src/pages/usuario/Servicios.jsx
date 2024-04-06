import { useParams } from "react-router-dom"
import { useEmpresaContext } from "../../components/providers/empresaProvider"
import { useServiciosContext } from "../../components/providers/serviciosProvider"
import { useSubCategoriaContext } from "../../components/providers/subCategoriaProvider"
import { ServiciosCard } from "../../components/templates/ServiciosCard"


const useFoundServiciosRelacionados = () => {
    const { subCategoria, empresa } = useParams()

    const empresas = useEmpresaContext()
    const servicios = useServiciosContext()
    const subCategorias = useSubCategoriaContext()


    const empresaRelacionada = empresas.find(em => em.nombre === empresa)
    const subCategoriaRelacionada = subCategorias.find(sub => sub.nombre === subCategoria)

    const serviciosRelacionados = servicios.filter(servicio =>
        servicio.idEmpresa === empresaRelacionada.id &&
        servicio.idSubCategoria === subCategoriaRelacionada.id
    )


    // Puedes devolver los objetos encontrados para su uso posterior si es necesario
    console.log(empresaRelacionada, serviciosRelacionados)

    return { servicios: serviciosRelacionados, empresa: empresa, subCategoria: subCategoria }
}

export function Servicios() {
    const { empresa, servicios, subCategoria } = useFoundServiciosRelacionados()

    console.log(servicios)

    return (
        <section>
            <h1>{empresa}</h1>
            <h1>{subCategoria}</h1>
            <section>
                {
                    servicios?.map(({ id, nombre, descripcion, valor }) => (
                        <ServiciosCard
                            key={id}
                            id={id}
                            nombre={nombre}
                            descripcion={descripcion}
                            valor={valor}
                        >
                        </ServiciosCard>
                    ))
                }
            </section>
        </section>
    )
}