import { Link } from "react-router-dom";
import { useEmpresaContext } from "../../../components/providers/empresaProvider";
import { useServiciosContext } from "../../../components/providers/serviciosProvider";
import { useUserContext } from "../../../components/providers/userProvider";

import { NotFound } from "../../../components/templates/NotFound";
import { useServiciosEmpresaContext } from "../provider/serviciosEmpresaProvider";

export const useFoundServiciosEmpresa = () => {
  const servicios = useServiciosContext();
  const empresas = useEmpresaContext();
  const { sesionUser } = useUserContext();

  const empresaIngresada = empresas?.find(
    (empresa) => empresa.username === sesionUser.Username
  );
  const serviciosEmpresa = servicios?.filter(
    (servicio) => servicio.idEmpresa === empresaIngresada?.id
  );

  console.log(empresaIngresada);
  return { serviciosEmpresa };
};

export function ServiciosReserva() {
  const { serviciosEmpresa } = useFoundServiciosEmpresa();
  const { elimarServicio } = useServiciosEmpresaContext();

  console.log(serviciosEmpresa);

  return (
    <section className=" gap-5 w-full h-full grid grid-cols-1 sm:grid-cols-2 mt-5">
      {serviciosEmpresa?.length === 0 ? (
        <NotFound razon="servicios"></NotFound>
      ) : (
        serviciosEmpresa?.map((servicio) => {
          return (
            <div
              key={servicio.id}
              className="flex bg-[#190042] dark:bg-light_theme w-full h-full p-3 rounded-sm 
              items-center justify-between gap-2 z-10 "
            >
              <div
                className="min-h-full  bg-color_switch_theme_dark rounded-sm
                 dark:bg-rose-400 min-w-[33.3%] max-w-[33.3%]"
              >
                <img
                  src={`http://localhost:8000/user/servicios/${servicio.imagen}`}
                  alt=""
                  className=""
                />
              </div>
              <div className="w-full text-white dark:text-second_color_lt flex flex-col py-1">
                <div className="flex justify-between pb-2">
                  <h1 className="font-title font-semibold text-2xl ">
                    {servicio.nombre}
                  </h1>
                  <div className="flex gap-3 w-1/3 m-2">
                    <Link to="editar"
                      className="w-full h-full bg-hover_boton_admin border-2 border-transparent hover:bg-transparent
                    hover:border-hover_boton_admin dark:bg-second_color_lt dark:border-2 dark:border-transparent
                    dark:hover:bg-transparent dark:hover:border-second_color_lt dark:text-light_theme dark:hover:text-second_color_lt
                    p-1"
                    >
                      Editar
                    </Link>
                    <button
                      onClick={() => elimarServicio()}
                      className="w-full h-full bg-hover_boton_admin border-2 border-transparent hover:bg-transparent
                    hover:border-hover_boton_admin dark:bg-second_color_lt dark:border-2 dark:border-transparent
                    dark:hover:bg-transparent dark:hover:border-second_color_lt dark:text-light_theme dark:hover:text-second_color_lt
                    p-1 "
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
                <p className=" overflow-hidden pb-2">{servicio.descripcion}</p>
              </div>
            </div>
          );
        })
      )}

      {}
    </section>
  );
}
