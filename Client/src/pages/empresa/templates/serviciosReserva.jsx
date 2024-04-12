import { useEmpresaContext } from "../../../components/providers/empresaProvider";
import { useServiciosContext } from "../../../components/providers/serviciosProvider";
import { NotFound } from "../../../components/templates/NotFound";

export function ServiciosReserva() {
  const servicios = useServiciosContext();
  //const empresas = useEmpresaContext()

  return (
    <section>
      {
        servicios?.lenght === 0
          ?
          <NotFound razon='servicios'></NotFound>
          :
          servicios?.map((servicio) => {
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
