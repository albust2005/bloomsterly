import { ButtonAdmin } from "../../components/buttons/buttonAdmin";
import { IconUser } from "../administrador/templates/iconUser";
import { useEmpresaContext } from "../../components/providers/empresaProvider";
import { ServiciosReserva } from "./templates/serviciosReserva";
import { useUserContext } from "../../components/providers/userProvider";
import {EliminarAdmin} from "../administrador/eliminarAdmin";
import { useState } from "react";
export function PerfilEmpresa() {
    const [cambiar, setcambiar] = useState(false);
    const eliminar = () => {
      return (
      <EliminarAdmin estado={cambiar} cambiarEstado={setcambiar}></EliminarAdmin>
      );
    };
  // const location = useLocation();
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
          <div
            className="w-full flex flex-col justify-center items-center font-title font-bold 
          bg-hover_boton_admin dark:bg-light_theme"
          >
            <IconUser clasName="h-20" />
            {sesionUser?.Rol === "Administrador" ? (
              <h2 className="text-white text-4xl dark:text-second_color_lt">
                Juan carlos
              </h2>
            ) : (
              <h2 className="text-white text-4xl dark:text-second_color_lt">
                {empresaIngresada?.nombre}
              </h2>
            )}
          </div>
          <div className="w-[100%] bg-[#190042] rounded-sm p-5 font-title text-white dark:bg-second_color_lt">
            {sesionUser?.Rol === "Administrador" ? (
              <>
                <p className="font-semibold text-2xl">Cédula</p>
                <p className="text-lg">12345</p>
                <p className="font-semibold text-2xl">Nombre</p>
                <p className="text-lg">12345</p>
                <p className="font-semibold text-2xl">Primer Apellido</p>
                <p className="text-lg">12345</p>
                <p className="font-semibold text-2xl">Username</p>
                <p className="text-lg">12345</p>
                <p className="font-semibold text-2xl">Gmail</p>
                <p className="text-lg">12345</p>
                <p className="font-semibold text-2xl">Municipio</p>
                <p className="text-lg">Marinilla</p>
              </>
            ) : (
              <>
                <p className="font-semibold text-2xl">Descripción</p>
                <p className="text-lg">{empresaIngresada?.descripcion}</p>

                <p className=" font-semibold text-2xl">Dirección</p>
                <p className="text-lg">{empresaIngresada?.direccion}</p>

                <p className="font-semibold text-2xl ">Teléfono</p>
                <p className="text-lg">{empresaIngresada?.telefono}</p>

                <p className="font-semibold text-2xl">Correo electrónico</p>
                <p className="text-lg">{empresaIngresada?.email}</p>

                <p className="font-semibold text-2xl">Instagram</p>
                <p className="text-lg">{empresaIngresada?.instagram}</p>

                <p className="font-semibold text-2xl">Facebook</p>
                <p className="text-lg">{empresaIngresada?.facebook}</p>
              </>
            )}

            <div className="flex flex-row-reverse gap-4">
              {sesionUser?.Rol === "Administrador" ? (
                <>
                  <ButtonAdmin
                    // href="/administrador/eliminar"
                    onClick={() => (eliminar(), setcambiar(!cambiar))}
                  >
                    Eliminar
                  </ButtonAdmin>
                  <ButtonAdmin href="/administrador/editarAd">
                    Editar Perfil
                  </ButtonAdmin>
                  <ButtonAdmin href="/administrador/crearAdmin">
                    Añadir Administrador
                  </ButtonAdmin>
                </>
              ) : (
                <ButtonAdmin>Editar Datos</ButtonAdmin>
              )}
            </div>
          </div>
        </div>
      </section>
      {cambiar ? eliminar() : <div></div>}
    </>
  );
}
