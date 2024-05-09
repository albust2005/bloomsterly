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
            <section className="w-full flex justify-center  z-10">
                <ServiciosReserva servicios={servicios} />
            </section>
        </>
    )
}