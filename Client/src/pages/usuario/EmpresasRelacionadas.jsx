import { useParams } from "react-router-dom"

import { useServiciosContext } from "../../components/providers/serviciosProvider"
import { useSubCategoriaContext } from "../../components/providers/subCategoriaProvider"
import { useEmpresaContext } from "../../components/providers/empresaProvider"
import { NotFound } from "../../components/templates/NotFound"

const useFoundEmpresasRelacionadas = () => {
    const { subCategoria } = useParams()

    const subCategorias = useSubCategoriaContext()
    const servicios = useServiciosContext()
    const empresas = useEmpresaContext()

    const subCategoriaRelacionada = subCategorias.find(sub => sub.nombre === subCategoria)
    const serviciosRelacionados = servicios.filter(servicio => servicio.idCategoria === subCategoriaRelacionada.id)
    const empresasRelacionadas = empresas.filter(empresa => empresa.id === serviciosRelacionados.idEmpresa)

    return { empresas: empresasRelacionadas }
}


export function EmpresasRelacionadas() {
    const { empresas } = useFoundEmpresasRelacionadas()
    console.log(empresas)

    return (
        <section>
           <h1>hol</h1>
        </section>
    )
}