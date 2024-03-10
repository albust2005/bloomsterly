import { useParams } from "react-router-dom";
import { Layaout } from "./templates/Layaout";

export function EmpresaInfo (){

    const { empresa } = useParams()
    console.log(empresa)

    return(
        <Layaout>
           <section className="px-5 md:px-16 lg:px-24 2xl:px-64 mb-3">
                
           </section>
        </Layaout>
    )
}