import axios from "axios";
import { ModalSol } from "./modalSol";
import { useEffect, useState } from "react";

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
      <h1 className="text-white text-7xl mb-2 dark:text-second_color_lt">
        Solicitudes de Ingreso
      </h1>
      {data.map((soli) => (
        <div
          key={soli.NIT}
          className=" bg-admin_card w-full p-4 rounded-lg m-5 dark:bg-light_theme cursor-pointer  hover:bg-color_font_light  dark:hover:bg-second_color_lt  text-white dark:text-second_color_lt hover:dark:text-white"
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
            <div className="ml-5">
              <h1 className="text-2xl">{soli.nombre}</h1>
              <p>{soli.descripcion}</p>
            </div>
          </div>
        </div>
      ))}
      {estadoModal1 ? mandar() : <div></div>}
    </>
  );
};
