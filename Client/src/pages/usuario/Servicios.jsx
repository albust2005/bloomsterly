import { useParams } from "react-router-dom"
import { useEmpresaContext } from "../../components/providers/empresaProvider"
import { useServiciosContext } from "../../components/providers/serviciosProvider"
import { useSubCategoriaContext } from "../../components/providers/subCategoriaProvider"
import { ServiciosCard } from "../../components/templates/ServiciosCard"
import { TitleSubCategoria } from "../../components/titles/subCategoriaTitle"
import { useReservaUserCrudContext } from "../../components/providers/reservasUserProvider"


const useFoundServiciosRelacionados = () => {
    const { subCategoria, empresa } = useParams()

    const empresas = useEmpresaContext()
    const servicios = useServiciosContext()
    const subCategorias = useSubCategoriaContext()


    const empresaRelacionada = empresas.find(em => em.nombre === empresa)
    const subCategoriaRelacionada = subCategorias.find(sub => sub.nombre === subCategoria)

    const serviciosRelacionados = servicios?.filter(servicio =>
        servicio.idEmpresa === empresaRelacionada.id &&
        servicio.idSubCategoria === subCategoriaRelacionada.id
    )


    // Puedes devolver los objetos encontrados para su uso posterior si es necesario
    console.log(empresaRelacionada, serviciosRelacionados)

    return { servicios: serviciosRelacionados, empresa: empresa, subCategoria: subCategoria }
}

export function Servicios() {
    const { empresa, servicios, subCategoria } = useFoundServiciosRelacionados()
    const { addServicioSeleccionado } = useReservaUserCrudContext()
    
    return (
        <section className="z-10">
            <TitleSubCategoria
                title={empresa}
                subtitle={subCategoria}
            />
            <section className="z-10">
                {
                    servicios?.map(servicio => (
                        <ServiciosCard
                            key={servicio.id}
                            nombre={servicio.nombre}
                            descripcion={servicio.descripcion}
                            valor={servicio.valor}
                            img={servicio.img}
                            addServicioSeleccionado={() => addServicioSeleccionado(servicio)}
                        >
                        </ServiciosCard>
                    ))
                }
            </section>
        </section>
    )
}