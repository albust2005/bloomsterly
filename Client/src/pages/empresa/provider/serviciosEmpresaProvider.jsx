import { createContext, useContext, useState } from "react";

const serviciosEmpresaContext = createContext();

export const useServiciosEmpresaContext = () => {
  return useContext(serviciosEmpresaContext);
};

export function ServiciosEmpresaProvider({ children }) {
  const [serviciosEmpresa, setServiciosEmpresa] = useState();

  const createServicio = (data) => {};

  const editarServicio = (servicio) => {};

  const eliminarServicio = () => {
    console.log("funciona");
  };

  return (
    <serviciosEmpresaContext.Provider
      value={{
        serviciosEmpresa,
        createServicio,
        editarServicio,
        eliminarServicio,
      }}
    >
      {children}
    </serviciosEmpresaContext.Provider>
  );
}
