import { useParams } from "react-router-dom"
import { useEmpresaContext } from "../../components/providers/empresaProvider"
import { useSubCategoriaContext } from "../../components/providers/subCategoriaProvider"

// const useFoundEmpresasRelacionadas = () =>{
//     const {subCategoria} = useParams()

//     const empresas = useEmpresaContext()
//     const subcategorias = useSubCategoriaContext()
// }

export function EmpresasRelacionadas() {
    return (
        <h1>HOla</h1>
    )
}