import { ButtonAdmin } from "../../components/buttons/buttonAdmin";
import { IconUser } from "../administrador/templates/iconUser";
import { useUserContext } from "../../components/providers/userProvider";
import { EliminarAdmin } from "../administrador/eliminarAdmin";
import { useEffect, useState } from "react";
import axios from "axios";

export const useFoundUser = () => {
  const token = localStorage.getItem("token");
  const { sesionUser } = useUserContext();
  const [dataUser, setDataUser] = useState({});

  const obtenerUser = async () => {
    try {
      const respuesta = await axios.get(
        "http://localhost:8000/user/getusuario",
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setDataUser(respuesta.data);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  const obtenerEmpresa = async () => {
    try {
      const respuesta = await axios.get(
        "http://localhost:8000/empresa/getempresa",
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setDataUser(respuesta.data);
    } catch (error) {
      alert(error);
    }
  };

  const obtenerAdmin = async () => {
    try {
      const respuesta = await axios.get(
        "http://localhost:8000/admin/getadmin",
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setDataUser(respuesta.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (sesionUser?.Rol === "Administrador") {
      obtenerAdmin();
    }
    if (sesionUser?.Rol === "Empresa") {
      obtenerEmpresa();
    }
    if (sesionUser?.Rol === "Cliente") {
      obtenerUser();
    }
  }, []);

  console.log(dataUser);
  return { dataUser, sesionUser };
};

export function PerfilEmpresa() {
  const [cambiar, setCambiar] = useState(false);
  const eliminar = () => {
    setCambiar(!cambiar);
  };

  const { dataUser, sesionUser } = useFoundUser();

  return (
    <>
      <section className="flex w-full min-h-96 justify-center gap-4 z-10">
        <div className="flex w-full min-h-full">
          <div
            className="w-1/2 flex flex-col justify-center items-center font-title font-bold 
          bg-hover_boton_admin dark:bg-light_theme"
          >
            {dataUser.image ? (
              <img
                src={
                  dataUser.image
                    ? `http://localhost:8000/empresa/getempresa/${dataUser.image}`
                    : ""
                }
                alt="imagen"
                width={100}
                height={100}
                style={{ borderRadius: 12 }}
              ></img>
            ) : (
              <IconUser clasName="h-20" />
            )}

            <h2 className="text-white text-4xl dark:text-second_color_lt celular:text-[20px] sm:text-[30px] lg:text-4xl">
              {dataUser.username}
            </h2>
          </div>

          <div className="w-1/2 bg-[#190042] rounded-sm p-5 font-title text-white dark:bg-second_color_lt">
            <p className="font-semibold text-2xl celular:text-[15px] md:text-xl lg:text-2xl">
              Nombre
            </p>
            <p className="lg:text-lg celular:text-[15px]">
              {sesionUser.Rol === "Cliente"
                ? dataUser.nombre_c
                : dataUser.nombre}
            </p>

            <p className="font-semibold text-2xl celular:text-[15px] md:text-xl lg:text-2xl">
              Email
            </p>
            <p className="lg:text-lg celular:text-[15px]">{dataUser.email}</p>

            <p className="font-semibold text-2xl celular:text-[15px] md:text-xl lg:text-2xl">
              Username
            </p>
            <p className="lg:text-lg celular:text-[15px]">
              {dataUser.username}
            </p>

            {sesionUser.Rol !== "Empresa" ? (
              <>
                <p className="font-semibold text-2xl celular:text-[15px] md:text-xl lg:text-2xl">
                  Apellido
                </p>
                <p className="lg:text-lg celular:text-[15px]">
                  {dataUser.primer_apelli}
                </p>
              </>
            ) : (
              <>
                <p className="font-semibold text-2xl celular:text-[15px] md:text-xl lg:text-2xl">
                  Descripción
                </p>
                <p className="lg:text-lg celular:text-[15px]">
                  {dataUser.descripcion}
                </p>

                <p className="font-semibold text-2xl celular:text-[15px] md:text-xl lg:text-2xl">
                  Dirección
                </p>
                <p className="lg:text-lg celular:text-[15px]">
                  {dataUser.direccion}
                </p>

                <p className="font-semibold text-2xl celular:text-[15px] md:text-xl lg:text-2xl">
                  Teléfono
                </p>
                <p className="lg:text-lg celular:text-[15px]">
                  {dataUser.telefono}
                </p>

                <p className="font-semibold text-2xl celular:text-[15px] md:text-xl lg:text-2xl">
                  Instagram
                </p>
                <p className="lg:text-lg celular:text-[15px]">
                  {dataUser.instagram}
                </p>

                <p className="font-semibold text-2xl celular:text-[15px] md:text-xl lg:text-2xl">
                  Facebook
                </p>
                <p className="lg:text-lg celular:text-[15px]">
                  {dataUser.facebook}
                </p>
              </>
            )}

            <div className="flex flex-row-reverse gap-4">
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
                <ButtonAdmin href="/editarPerfil">Editar Perfil</ButtonAdmin>
              )}
            </div>
          </div>
        </div>
      </section>
      {cambiar && <EliminarAdmin estado={cambiar} cambiarEstado={setCambiar} />}
    </>
  );
}
