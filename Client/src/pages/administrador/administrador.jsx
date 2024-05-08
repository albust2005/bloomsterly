import { Route, Routes } from "react-router";
import { Solicitud } from "./Solicitud";
import { IndexAdmin } from "./indexAdmin";
import { TablaAdmin } from "./tablaAdmin";
import { TablaClient } from "./tablaClient";
import { TablaEmpresa } from "./tablaEmpresas";
import { FormAdmin } from "./formAdmin";
import { NotFound } from "../../components/templates/NotFound";
import { PerfilEmpresa } from "../empresa/perfilEmpresa";
import { EdiarForm } from "./editarForm";
import { EliminarAdmin } from "./eliminarAdmin";

export function Administrador() {

  return (
    <>
      <Routes>
        <Route path="/" element={<IndexAdmin />}></Route>
        <Route path="/solicitudes" element={<Solicitud />}></Route>
        <Route path="/administradores" element={<TablaAdmin />}></Route>
        <Route path="/clientes" element={<TablaClient />}></Route>
        <Route path="/empresas" element={<TablaEmpresa />}></Route>
        <Route path="/crearAdmin" element={<FormAdmin />}></Route>
        <Route path="/editarAd" element={<EdiarForm/>}></Route>
        <Route path="/perfil" element={<PerfilEmpresa />}></Route>
        <Route path="/eliminar" element={<EliminarAdmin/>}></Route>
        <Route
          path="*"
          element={<NotFound razon="resultados"></NotFound>}
        ></Route>
      </Routes>
    </>
  );
}
