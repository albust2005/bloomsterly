import { useParams } from "react-router-dom"

import { useServiciosContext } from "../../components/providers/serviciosProvider"
import { useSubCategoriaContext } from "../../components/providers/subCategoriaProvider"
import { useEmpresaContext } from "../../components/providers/empresaProvider"
import { NotFound } from "../../components/templates/NotFound"
import { FirtsTitle, Titles } from "../../components/titles/Title"
import { EmpresaCards } from "../../components/templates/EmpresaCard"

const useFoundEmpresasRelacionadas = () => {
    const { subCategoria } = useParams()

    const subCategorias = useSubCategoriaContext()
    const servicios = useServiciosContext()
    const empresas = useEmpresaContext()

    const subCategoriaRelacionada = subCategorias.find(sub => sub.nombre === subCategoria)
    const serviciosRelacionados = servicios.filter(servicio => servicio.idSubCategoria === subCategoriaRelacionada.id)
    const idsEmpresasRelacionadas = serviciosRelacionados.map(servicio => servicio.idEmpresa)
    const empresasRelacionadas = empresas.filter(empresa => idsEmpresasRelacionadas.includes(empresa.id))


    return { empresas: empresasRelacionadas, subCategoria: subCategoria }
}


export function EmpresasRelacionadas() {
    const { empresas, subCategoria } = useFoundEmpresasRelacionadas()
    console.log(empresas)

    return (
        <section className="flex flex-col items-center gap-12">
            <FirtsTitle
                title={subCategoria}
                descripcion={`las siguientes empresas ofrecen servicios de ${subCategoria}`}
            >
            </FirtsTitle>
            <section className="flex flex-col gap-5">
                <article className="containe mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {
                        empresas.length === 0 
                        ?
                        <NotFound razon='empresas'></NotFound>
                        :
                        empresas?.map(({ id, nombre, telefono, direccion, instagram, facebook, logo }) => (
                            <EmpresaCards
                                subCategoria={subCategoria}
                                key={id}
                                id={id}
                                nombre={nombre}
                                telefono={telefono}
                                direccion={direccion}
                                instagram={instagram}
                                facebook={facebook}
                                logo={logo}
                            />
                        ))
                    }
                </article>
            </section>

        </section>
    )
}