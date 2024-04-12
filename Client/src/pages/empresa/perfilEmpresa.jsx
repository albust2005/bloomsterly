import { ButtonAdmin } from "../../components/buttons/buttonAdmin";
import { IconUser } from "../administrador/templates/iconUser";
import { useEmpresaContext } from "../../components/providers/empresaProvider";
import { ServiciosReserva } from "./templates/serviciosReserva";
import { useUserContext } from "../../components/providers/userProvider";

export function PerfilEmpresa() {

    const empresas = useEmpresaContext()    
    const { sesionUser } = useUserContext()
    const empresaIngresada = empresas?.find(empresa => empresa.username === sesionUser.Username);

    console.log(empresaIngresada)
    return (
        <>
            <div>
                <ButtonAdmin>Editar Datos</ButtonAdmin>
            </div>
            <section className="flex flex-col w-full items-center gap-4">
                <div className="w-full flex flex-col justify-center items-center font-title font-bold">
                    <IconUser/>
                    <h2 className="text-white text-4xl dark:text-second_color_lt">{empresaIngresada?.nombre}</h2>
                </div>
                <div className="w-[100%] bg-color_font_dark rounded-md p-5 dark:bg-light_theme text-xl font-text">
                    <p className="text-white dark:text-second_color_lt"><span className="font-bold">Descripcion:</span> {empresaIngresada?.descripcion}</p>
                    <p className="text-white dark:text-second_color_lt"><span className="font-bold">Direccion: </span> {empresaIngresada?.direccion}</p>
                    <p className="text-white dark:text-second_color_lt"><span className="font-bold">Telefono: </span> {empresaIngresada?.telefono}</p>
                    <p className="text-white dark:text-second_color_lt"><span className="font-bold">Instagram: </span> {empresaIngresada?.instagram}</p>
                    <p className="text-white dark:text-second_color_lt"><span className="font-bold">Facebook: </span> {empresaIngresada?.facebook}</p>
                    <p className="text-white dark:text-second_color_lt"><span className="font-bold">Email: </span> {empresaIngresada?.email}</p>
                </div>
            </section>
        </>
    )
}