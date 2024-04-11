import { useServiciosContext } from "../../../components/providers/serviciosProvider";

export function ServiciosReserva({ servicios }) {
  const serviciosT = useServiciosContext();

  return (
    <>
      {servicios.map((el) => {
        const servicioL = serviciosT.find((servicio) => servicio.id === el);
        return (
          <div
            key={servicioL.id}
            className="flex bg-color_font_dark mb-[1vh] dark:bg-light_theme w-[124vh] p-[1vh] rounded-[2vh] items-center justify-between"
          >
            <div className="h-[20vh] w-[20vh] ml-[0.5vh] bg-color_font_light rounded-[1vh] dark:bg-rose-400">
              <img src="" alt="" />
            </div>
            <div className="w-[100vh] text-white dark:text-second_color_lt">
              <div className="flex justify-between">
                <h1 className="font-title mb-[1vh] text-2xl">
                  {servicioL.nombre}
                </h1>
                <div className="flex gap-3">
                  <button>Editar</button>
                  <button>Eliminar</button>
                </div>
              </div>
              <p className="h-[12vh] overflow-hidden">
                {servicioL.descripcion}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}
