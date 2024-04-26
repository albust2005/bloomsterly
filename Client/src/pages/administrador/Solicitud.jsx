import axios from "axios";
import { ModalSol } from "./modalSol";
import { useEffect, useState } from "react";
import { ScrollAnimatedSection } from "../../components/templates/ScrollAnimatedSection";

export const Solicitud = () => {
  const [estadoModal1, cambiarEstadoModal1] = useState(false);
  const [data, setData] = useState([]);
  const [nit, setnit] = useState("");
  useEffect(() => {
    obtener();
  }, []);
  const obtener = async () => {
    const respuesta = await axios.get(
      "http://localhost:8000/admin/AllSolicitudes"
    );
    const datos = respuesta.data;
    setData(datos);
  };
  const mandar = () => {
    return (
      <ModalSol
        estado={estadoModal1}
        cambiarEstado={cambiarEstadoModal1}
        NIT={nit}
      />
    );
  };
  return (
    <>
      <div className="flex flex-col gap-20">
        <ScrollAnimatedSection animation="animate-fade-up" className="opacity-0">
          <h1 className="text-white text-xl font-title italic dark:text-second_color_lt minicel:text-3xl sm:text-6xl md:text-8xl z-10">
            Solicitudes de Ingreso
          </h1>
        </ScrollAnimatedSection>
        {data.map((soli) => (
          <div
            key={soli.NIT}
            className=" bg-admin_card w-full p-4 rounded-lg m-5 dark:bg-light_theme cursor-pointer  hover:bg-color_font_light  dark:hover:bg-second_color_lt  text-white dark:text-second_color_lt hover:dark:text-white z-10"
            onClick={() => (
              mandar(), setnit(soli.NIT), cambiarEstadoModal1(!estadoModal1)
            )}
          >
            <div className="flex h-[15vh] w-full overflow-hidden">
              {/* <div className=" text-center"> */}
              <img
                className="w-[50] rounded-lg"
                src="https://www.esneca.com/wp-content/uploads/eventos-sociales.jpg"
              />
              {/* </div> */}
              <div className="ml-5 z-10">
                <h1 className="text-3xl mb-1 z-10">{soli.nombre}</h1>
                <p>{soli.descripcion}</p>
              </div>
            </div>
          </div>
        ))}
        {estadoModal1 ? mandar() : <div></div>}
      </div>
    </>
  );
};
