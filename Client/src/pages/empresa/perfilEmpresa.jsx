import { ButtonAdmin } from "../../components/buttons/buttonAdmin";
import { IconUser } from "../administrador/templates/iconUser";
import { useEmpresaContext } from "../../components/providers/empresaProvider";
// import { ServiciosReserva } from "./templates/serviciosReserva";
import { useUserContext } from "../../components/providers/userProvider";
import { EliminarAdmin } from "../administrador/eliminarAdmin";
import { useEffect, useState } from "react";
import axios from "axios";
export function PerfilEmpresa() {
  const [cambiar, setCambiar] = useState(false);
  const [dato, setdato] = useState([])
  const eliminar = () => {
    setCambiar(!cambiar); 
  };
  const empresas = useEmpresaContext();
  const { sesionUser } = useUserContext();
  const empresaIngresada = empresas?.find(
    (empresa) => empresa.username === sesionUser.Username
  );


  console.log(empresaIngresada);
  const token=localStorage.getItem("token")
  useEffect(()=>{
    obtener()
  },[])
  const obtener=async()=>{
    try {
      const respuesta = await axios.get("http://localhost:8000/admin/getadmin",{
        headers:{
          Authorization:token
        }
      })
      setdato(respuesta.data)
    } catch (error) {
      alert(error)
    }
  }
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
              <h2 className="text-white dark:text-second_color_lt celular:text-[20px] sm:text-[30px] lg:text-4xl">
                {dato.nombre}
              </h2>
            ) : (
              <h2 className="text-white text-4xl dark:text-second_color_lt celular:text-[20px] sm:text-[30px] lg:text-4xl">
                {empresaIngresada?.nombre}
              </h2>
            )}
          </div>
          <div className="w-[100%] bg-[#190042] rounded-sm p-5 font-title text-white dark:bg-second_color_lt">
            {sesionUser?.Rol === "Administrador" ? (
              <>
                <p className="font-semibold md:text-xl celular:text-[15px] lg:text-2xl">
                  Cédula
                </p>
                <p className="celular:text-[15px] lg:text-[lg]">{dato.COD}</p>
                <p className="font-semibold text-2xl celular:text-[15px] md:text-xl lg:text-2xl">
                  Nombre
                </p>
                <p className="lg:text-lg celular:text-[15px]">{dato.nombre}</p>
                <p className="font-semibold text-2xl celular:text-[15px] md:text-xl lg:text-2xl">
                  Primer Apellido
                </p>
                <p className="lg:text-lg celular:text-[15px]">
                  {dato.primer_apelli}
                </p>
                <p className="font-semibold text-2xl celular:text-[15px] md:text-xl lg:text-2xl">
                  Nombre De Usuario
                </p>
                <p className="lg:text-lg celular:text-[15px]">
                  {dato.username}
                </p>
                <p className="font-semibold text-2xl celular:text-[15px] md:text-xl lg:text-2xl">
                  Gmail
                </p>
                <p className="lg:text-lg celular:text-[15px]">{dato.email}</p>
                <p className="font-semibold text-2xl celular:text-[15px] md:text-xl lg:text-2xl">
                  Municipio
                </p>
                <p className="lg:text-lg celular:text-[15px]">
                  {dato.municipio?.municipio}
                </p>
              </>
            ) : (
              <>
                <p className="font-semibold text-2xl celular:text-[15px] md:text-xl lg:text-2xl">
                  Descripción
                </p>
                <p className="lg:text-lg celular:text-[15px]">
                  {empresaIngresada?.descripcion}
                </p>

                <p className="font-semibold text-2xl celular:text-[15px] md:text-xl lg:text-2xl">
                  Dirección
                </p>
                <p className="lg:text-lg celular:text-[15px]">
                  {empresaIngresada?.direccion}
                </p>

                <p className="font-semibold text-2xl celular:text-[15px] md:text-xl lg:text-2xl">
                  Teléfono
                </p>
                <p className="lg:text-lg celular:text-[15px]">
                  {empresaIngresada?.telefono}
                </p>

                <p className="font-semibold text-2xl celular:text-[15px] md:text-xl lg:text-2xl">
                  Correo electrónico
                </p>
                <p className="lg:text-lg celular:text-[15px]">
                  {empresaIngresada?.email}
                </p>

                <p className="font-semibold text-2xl celular:text-[15px] md:text-xl lg:text-2xl">
                  Instagram
                </p>
                <p className="lg:text-lg celular:text-[15px]">
                  {empresaIngresada?.instagram}
                </p>

                <p className="font-semibold text-2xl celular:text-[15px] md:text-xl lg:text-2xl">
                  Facebook
                </p>
                <p className="lg:text-lg celular:text-[15px]">
                  {empresaIngresada?.facebook}
                </p>
              </>
            )}

            <div className="flex flex-row-reverse gap-4 mt-2">
              {sesionUser?.Rol === "Administrador" ? (
                <>
                  <ButtonAdmin onClick={eliminar}>Eliminar</ButtonAdmin>
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
      {cambiar && <EliminarAdmin estado={cambiar} cambiarEstado={setCambiar} />}
    </>
  );
}