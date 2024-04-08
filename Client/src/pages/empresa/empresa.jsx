import { Route, Routes } from "react-router-dom";
import { Index_empresa } from "./indexEmpresa";
import { LateralMenu } from "./templates/lateralMenu";
import { ReservasCliente } from "./reservasClientes";
import { ConoceMasEmpresa } from "../conocemasEmpresa";
import { ReservaDescrip } from "./reservaDescrip";
import { ReservasProvider } from "./provider/reservasProvider";
import { ServiciosEmpresa } from "./serviciosEmpresa";
import { PerfilEmpresa } from "./perfilEmpresa";

export function Empresa(){

    return(
        <section className="flex justify-between">
            <div className="w-[25%]">
                <LateralMenu />
            </div>
            <div className="w-[70%]">
                <ReservasProvider>
                    <Routes>
                        <Route path="/" element={<Index_empresa />}></Route>
                        <Route path="/reserva" element={<ReservasCliente/>}></Route>
                        <Route path="/reserva/reservaDescrip/:id" element={<ReservaDescrip />}></Route>

                        <Route path="/servicios" element={<ServiciosEmpresa/>}></Route>

                        <Route path="/perfil" element={<PerfilEmpresa/>}></Route>
                    </Routes>
                </ReservasProvider>
            </div>
        </section>
    )
}