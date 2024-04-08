import { Route, Routes } from "react-router";
import { Solicitud } from "./Solicitud";
import { IndexAdmin } from "./indexAdmin";
import { Menudiag } from "../administrador/menudiag";
import { TablaAdmin } from "./tablaAdmin";
import { TablaClient } from "./tablaClient";
import { TablaEmpresa } from "./tablaEmpresas";
import { DataTable } from "./DataTable";
import { FormAdmin } from "./formAdmin";
export function Administrador({ user = "Silvana" }) {
  return (
    <>
      <div className="flex justify-between minicel:flex-col sm:flex-row">
        <div className="w-[25%]">
          <Menudiag />
        </div>
        <div className="w-[70%]">
          <Routes>
            <Route path="/" element={<IndexAdmin user={user} />}></Route>
            <Route
              path="administrador/solicitudes"
              element={<Solicitud />}
            ></Route>
            <Route
              path="administrador/administradores"
              element={<TablaAdmin />}
            ></Route>
            <Route
              path="administrador/clientes"
              element={<TablaClient />}
            ></Route>
            <Route
              path="administrador/empresas"
              element={<TablaEmpresa />}
            ></Route>
            <Route
              path="administrador/crearAdmin"
              element={<FormAdmin />}
            ></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}
