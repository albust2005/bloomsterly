
import { empresas } from "./db/empresas.js"
import { Layaout } from "./templates/Layaout";


import { useParams } from "react-router-dom";

export function EmpresaInfo (){

    const { empresa } = useParams()
    console.log(empresa)

    const empresaInfo = empresas.find(e => e.uuid === empresa)
    const { uuid, nombre} = empresaInfo
    
    console.log(empresaInfo)
    


    return(
        <Layaout>
           <section className="px-5 md:px-16 lg:px-24 2xl:px-64 mb-3">
                  <h1>{uuid}</h1>
                  <h1>{nombre}</h1>
           </section>
        </Layaout>
    )
}