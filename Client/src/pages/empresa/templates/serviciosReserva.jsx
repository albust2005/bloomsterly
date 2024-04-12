import { useEmpresaContext } from "../../../components/providers/empresaProvider";
import { useServiciosContext } from "../../../components/providers/serviciosProvider";
import { useUserContext } from "../../../components/providers/userProvider"

import { NotFound } from "../../../components/templates/NotFound";


export const useFoundServiciosEmpresa = () => {
  const servicios = useServiciosContext();
  const empresas = useEmpresaContext();
  const { sesionUser } = useUserContext();

  const empresaIngresada = empresas?.find(empresa => empresa.username === sesionUser.Username);
  const serviciosEmpresa = servicios?.filter(servicio => servicio.idEmpresa === empresaIngresada.id);

  console.log(empresaIngresada);
  return { serviciosEmpresa };
}

export function ServiciosReserva() {

  const { serviciosEmpresa } = useFoundServiciosEmpresa()
  console.log(serviciosEmpresa)

  return (
    <section>
      {
        serviciosEmpresa?.length === 0
          ?
          <NotFound razon='servicios'></NotFound>
          :
          serviciosEmpresa?.map((servicio) => {
            return (
              <div
                key={servicio.id}
                className="flex bg-color_font_dark mb-[1vh] dark:bg-light_theme w-[124vh] p-[1vh] rounded-[2vh] items-center justify-between"
              >
                <div className="h-[20vh] w-[20vh] ml-[0.5vh] bg-color_font_light rounded-[1vh] dark:bg-rose-400">
                  <img src="" alt="" />
                </div>
                <div className="w-[100vh] text-white dark:text-second_color_lt">
                  <div className="flex justify-between">
                    <h1 className="font-title mb-[1vh] text-2xl">
                      {servicio.nombre}
                    </h1>
                    <div className="flex gap-3">
                      <button>Editar</button>
                      <button>Eliminar</button>
                    </div>
                  </div>
                  <p className="h-[12vh] overflow-hidden">
                    {servicio.descripcion}
                  </p>
                </div>
              </div>
            );
          })
      }


      { }
    </section>
  );
}
