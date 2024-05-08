import { TitleAE } from "../../components/titles/titleAE";
import { ServiciosReserva } from "./templates/serviciosReserva";
import { Link } from "react-router-dom"


export function ServiciosEmpresa() {

    const servicios = ["sv000", "sv001", "sv010", "sv100", "sv101"]

    return (
        <>
            <TitleAE title="Mis servicios"/>
            <Link to="crear">
                Crear servicio
            </Link>
            <section className="w-full flex justify-center  z-10">
                <ServiciosReserva servicios={servicios}/>
            </section>
        </>
    )
}