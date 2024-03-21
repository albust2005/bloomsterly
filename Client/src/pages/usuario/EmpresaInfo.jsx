
import { empresas } from "../../db/empresas.json"
//import { NotFound } from "../../components/templates/NotFound.jsx"

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function EmpresaInfo() {
    const { empresa } = useParams()
    const [empresaInfo, setEmpresaInfo] = useState([])

    useEffect(() => {
        setEmpresaInfo(empresas.find(e => e.uuid === empresa))
    }, [empresa])

    console.log(empresaInfo)
    const { nombre, municipio, descripcion, categorias } = empresaInfo

    //obtenemos el id de la empresa mediante useParams() 
    //guardamos la informacion de la empresa dentro del estado empresaInfo
    //va a cambiar los datos de la empresa cada que el id cambie

    /***COMPONETIZAR TITULOS CORRECTAMENTE***/
    return (
        <section className="flex flex-col-reverse gap-4 lg:flex-row mb-3">
            <aside className="bg-black h-72 lg:h-screen lg:w-1/4">

            </aside>
            <article className="bg-color_font_dark flex flex-col gap-5 rounded-lg p-5 min-h-96 lg:w-3/4">

                <div className="flex flex-col gap-2">
                    <h1 className="font-title text-4xl italic font-black">{nombre}</h1>
                    <p className="font-subTitle text-xl">{municipio}</p>
                    <p className="font-text">{descripcion}</p>
                </div>

                <div>
                    <p>{categorias}</p>
                </div>

                <div>
                    {

                    }
                </div>

            </article>
        </section>

    )
}