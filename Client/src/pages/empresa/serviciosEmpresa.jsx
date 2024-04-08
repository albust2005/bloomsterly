import { TitleAE } from "../../components/titles/titleAE";
import { ServiciosReserva } from "./templates/serviciosReserva";


export function ServiciosEmpresa() {

    const servicios = ["sv000", "sv001", "sv010", "sv100", "sv101"]

    return (
        <>
            <TitleAE title="Mis servicios"/>
            <ServiciosReserva servicios={servicios}/>
        </>
    )
}