
import { empresas } from "../../db/empresas.js"
import { Layaout } from "../../components/templates/Layaout.jsx";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function EmpresaInfo() {
    const { empresa } = useParams()
    const [empresaInfo, setEmpresaInfo] = useState([])

    useEffect(() => {

        setEmpresaInfo(empresas.find(e => e.uuid === empresa))

    }, [empresa])

    const { nombre } = empresaInfo

    //obtenemos el id de la empresa mediante useParams() 
    //guardamos la informacion de la empresa dentro del estado empresaInfo
    //va a cambiar los datos de la empresa cada que el id cambie



    /***COMPONETIZAR TITULOS CORRECTAMENTE***/
    return (
        <Layaout>
            <section className="flex flex-col-reverse gap-4 lg:flex-row px-5 md:px-16 lg:px-24 2xl:px-64 mb-3">
                <aside className="bg-black h-72 lg:h-screen lg:w-1/4">

                </aside>
                <article className="bg-color_font_dark rounded-lg h-screen lg:w-3/4">
                    <div>
                        <h1>{nombre}</h1>
                    </div>
                </article>
            </section>
        </Layaout>
    )
}