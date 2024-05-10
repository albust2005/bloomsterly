import { Route, Routes } from "react-router-dom";
import { Index_empresa } from "./indexEmpresa";
import { LateralMenu } from "./templates/lateralMenu";
import { ReservasCliente } from "./reservasClientes";

import { ReservaDescrip } from "./reservaDescrip";
import { ReservasProvider } from "./provider/reservasProvider";
import { ServiciosEmpresa } from "./serviciosEmpresa";
import { FormServicio } from "./formServicio"
import { EditarFormServicio } from "./editFormServicio";

import { PerfilEmpresa } from "./perfilEmpresa";
import { ServiciosEmpresaProvider } from "./provider/serviciosEmpresaProvider";
import { EdiarForm } from "../administrador/editarForm";

export function Empresa() {
  return (
    <section className="flex justify-between z-10">
      <div className="w-full">
        <ServiciosEmpresaProvider>
          <ReservasProvider>
            <Routes>
              <Route path="/" element={<Index_empresa />}></Route>
              <Route path="/reserva" element={<ReservasCliente />}></Route>
              <Route
                path="/reserva/reservas"
                element={<ReservaDescrip />}
              ></Route>

              <Route path="/servicios" element={<ServiciosEmpresa />}></Route>
              <Route path="/servicios/crear" element={<FormServicio />}></Route>
              <Route path="/servicios/editar/:id" element={<EditarFormServicio />}></Route>

              <Route path="/perfil" element={<PerfilEmpresa />}></Route>
              <Route path="/editarPerfil" element={<EdiarForm></EdiarForm>}></Route>
            </Routes>
          </ReservasProvider>
        </ServiciosEmpresaProvider>
      </div>
    </section>
  );
}
