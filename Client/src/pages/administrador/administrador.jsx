import { Route, Routes } from "react-router";
import { Solicitud } from "./Solicitud";
import { IndexAdmin } from "./indexAdmin";
import { Menudiag } from "../administrador/menudiag";
import { TablaAdmin } from "./tablaAdmin";
import { TablaClient } from "./tablaClient";
import { TablaEmpresa } from "./tablaEmpresas";
// import { DataTable } from "./DataTable";
import { FormAdmin } from "./formAdmin";
import { Denegar } from "./denegar";
import { ProtectedRoute } from "../../components/providers/ProtectedRoute";
import { useUserContext } from "../../components/providers/userProvider";
import { NotFound } from "../../components/templates/NotFound";

export function Administrador({ user = "Silvana" }) {

  const { sesionUser } = useUserContext()

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
        </div>
      </div>
    </>
  );
}
