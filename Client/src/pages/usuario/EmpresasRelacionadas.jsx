import { useParams } from "react-router-dom"

import { useServiciosContext } from "../../components/providers/serviciosProvider"
import { useSubCategoriaContext } from "../../components/providers/subCategoriaProvider"
import { useEmpresaContext } from "../../components/providers/empresaProvider"
import { NotFound } from "../../components/templates/NotFound"
import { EmpresaCards } from "../../components/templates/EmpresaCard"
import { TitleSubCategoria } from "../../components/titles/subCategoriaTitle"

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
            <TitleSubCategoria
                title={subCategoria}
                descripcion={`Las siguientes empresas ofrecen servicios de ${subCategoria}.`}
            />
            <section className="gap-5 grid grid-cols-1 sm:grid-cols-2  w-full">
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
            </section>

        </section>
    )
}