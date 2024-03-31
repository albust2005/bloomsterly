import { Route, Routes } from "react-router-dom";
import { Index_empresa } from "./indexEmpresa";
import { LateralMenu } from "./templates/lateralMenu";
import { ReservasCliente } from "./reservasClientes";

export function Empresa(){

    return(
        <section className="flex justify-between">
            <div className="w-[25%]">
                <LateralMenu />
            </div>
            <div className="w-[70%]">
                <Routes>
                    <Route path="/" element={<Index_empresa />}></Route>
                    <Route path="/reservas" element={<ReservasCliente/>}></Route>
                </Routes>
            </div>
        </section>
    )
}