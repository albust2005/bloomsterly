import { useEffect } from "react";
import { useServiciosContext } from "../../components/providers/serviciosProvider";
import { TitleAE } from "../../components/titles/titleAE";
import { ServiciosReserva } from "./templates/serviciosReserva";
import { Link } from "react-router-dom"


export function ServiciosEmpresa() {
    const { obtenerServicios } = useServiciosContext()
    useEffect(() => {
        obtenerServicios()
    }, [])

    const servicios = ["sv000", "sv001", "sv010", "sv100", "sv101"]


    return (
        <>
            <TitleAE title="Mis servicios" />
            <Link to="crear"
                className="w-full h-full bg-hover_boton_admin border-2 border-transparent hover:bg-transparent
                    hover:border-hover_boton_admin dark:bg-second_color_lt dark:border-2 dark:border-transparent
                    dark:hover:bg-transparent dark:hover:border-second_color_lt dark:text-light_theme dark:hover:text-second_color_lt
                    p-1 text-white">
                Crear servicio
            </Link>
            <section className="w-full flex justify-center  z-10">
                <ServiciosReserva servicios={servicios} />
            </section>
        </>
    )
}