import { Route, Routes } from "react-router";
import { Solicitud } from "./Solicitud";
import { IndexAdmin } from "./indexAdmin";
import { TablaAdmin } from "./tablaAdmin";
import { TablaClient } from "./tablaClient";
import { TablaEmpresa } from "./tablaEmpresas";
import { FormAdmin } from "./formAdmin";
import { NotFound } from "../../components/templates/NotFound";

export function Administrador() {

  return (
    <>
      {/* <div className="flex justify-between minicel:flex-col sm:flex-row">
        <div className="w-[25%]">
          <Menudiag />
        </div>
        <div className="w-[70%]"> */}
          <Routes>
            <Route path="/" element={<IndexAdmin/>}></Route>
            <Route
              path="/solicitudes"
              element={<Solicitud />}
            ></Route>
            <Route
              path="/administradores"
              element={<TablaAdmin />}
            ></Route>
            <Route
              path="/clientes"
              element={<TablaClient />}
            ></Route>
            <Route
              path="/empresas"
              element={<TablaEmpresa />}
            ></Route>
            <Route
              path="/crearAdmin"
              element={<FormAdmin />}
            ></Route>
            <Route
              path="*"
              element={<NotFound razon='resultados'></NotFound>}
            >  
            </Route>
          </Routes>
        {/* </div>
      </div> */}
    </>
  );
}
