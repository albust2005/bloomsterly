import { createContext, useContext } from "react";
import { useCategorias } from "../hooks/useCategorias";

const categoriaContext = createContext()

export function useCategoriaContext() {
    return useContext(categoriaContext)
}

export function CategoriaProvider({ children }) {
    const { categorias, obtenerCategorias } = useCategorias()

    return (
        <categoriaContext.Provider value={{categorias, obtenerCategorias}}>
            {children}
        </categoriaContext.Provider>
    )
}