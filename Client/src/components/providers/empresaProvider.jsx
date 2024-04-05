import { createContext, useContext } from "react";
import { useEmpresas } from "../hooks/useEmpresas";

const empresaContext = createContext()

export const useEmpresaContext = () => useContext(empresaContext)


export function EmpresaProvider ({children}){

    const { empresas } = useEmpresas()

    return (
        <empresaContext.Provider value={empresas}>
            {children}
        </empresaContext.Provider>
    ) 
}