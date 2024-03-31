import { Route, Routes } from "react-router-dom";
import { LateralMenu } from "./lateralMenu";
import { Index_empresa } from "./index_empresa";

export function Empresa(){
    return(
        <section>
            <Routes>
                <Route path="/" element={<Index_empresa/>}></Route>
            </Routes>
        </section>
    )
}