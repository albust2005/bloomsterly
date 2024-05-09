import { createContext, useContext} from "react";
import { useSubCategorias } from "../hooks/useSubCategorias";

const subCategoriaContext = createContext()

export const useSubCategoriaContext = () => useContext(subCategoriaContext)

export function SubCategoriaProvider ({ children }){
    const { subCategorias, obtenerSubCategoria } = useSubCategorias()

    return (
        <subCategoriaContext.Provider value={{subCategorias, obtenerSubCategoria}}>
            {children}
        </subCategoriaContext.Provider>
    )
}