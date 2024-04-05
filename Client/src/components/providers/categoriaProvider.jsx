import { createContext, useContext } from "react";
import { useCategorias } from "../hooks/useCategorias";

const categoriaContext = createContext()

export function useCategoriaContext() {
    return useContext(categoriaContext)
}

export function CategoriaProvider({ children }) {
    const { categorias } = useCategorias()

    return (
        <categoriaContext.Provider value={categorias}>
            {children}
        </categoriaContext.Provider>
    )
}