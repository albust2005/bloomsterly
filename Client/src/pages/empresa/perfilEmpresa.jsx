import { ButtonAdmin } from "../../components/buttons/buttonAdmin";
import { IconUser } from "../administrador/templates/iconUser";
import { useEmpresaContext } from "../../components/providers/empresaProvider";
import { ServiciosReserva } from "./templates/serviciosReserva";
import { useUserContext } from "../../components/providers/userProvider";

export function PerfilEmpresa() {
  const empresas = useEmpresaContext();
  const { sesionUser } = useUserContext();
  const empresaIngresada = empresas?.find(
    (empresa) => empresa.username === sesionUser.Username
  );

  console.log(empresaIngresada);
  return (
    <>
      <section className="flex  w-full justify-center gap-4 z-10">
        <div className="flex w-full">
          <div className="w-full flex flex-col justify-center items-center font-title font-bold 
          bg-hover_boton_admin">
            <IconUser />
            <h2 className="text-white text-4xl dark:text-second_color_lt">
              {empresaIngresada?.nombre}
            </h2>
          </div>

          <div className="w-[100%] bg-[#190042] rounded-sm p-5 dark:bg-light_theme  font-title text-white
           dark:text-second_color_lt">

            <p className="font-semibold text-2xl">
              Descripcion
            </p>
            <p className="text-lg">{empresaIngresada?.descripcion}</p>

            <p className=" font-semibold text-2xl">
              Dirección
            </p>
            <p className="text-lg">{empresaIngresada?.direccion}</p>

            <p className="font-semibold text-2xl ">
              Telefono
            </p>
            <p className="text-lg">{empresaIngresada?.telefono}</p>

            <p className="font-semibold text-2xl">
              Correo electronico
            </p>
            <p className="text-lg">{empresaIngresada?.email}</p>

            <p className="font-semibold text-2xl">
              Instagram
            </p>
            <p className="text-lg">{empresaIngresada?.instagram}</p>

            <p className="font-semibold text-2xl">
              Facebook
            </p>
            <p className="text-lg">{empresaIngresada?.facebook}</p>

            <div className="flex flex-row-reverse">
              <ButtonAdmin>Editar Datos</ButtonAdmin>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
