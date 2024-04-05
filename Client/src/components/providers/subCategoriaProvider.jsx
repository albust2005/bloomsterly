import { createContext, useContext } from "react";
import { useSubCategorias } from "../hooks/useSubCategorias";

const subCategoriaContext = createContext()

export const useSubCategoriaContext = () => useContext(subCategoriaContext)

export function SubCategoriaProvider ({ children }){
    const { subCategorias } = useSubCategorias()

    return (
        <subCategoriaContext.Provider value={subCategorias}>
            {children}
        </subCategoriaContext.Provider>
    )
}