import { useEffect, useState } from "react";
import axios from "axios";
import { Denegar } from "./denegar";
import { Aceptar } from "./aceptar";

export const ModalSol = ({ estado, cambiarEstado, NIT }) => {
  const [data, setdata] = useState([]);
  const [cambiar, setcambiar] = useState(false);
  const [cambiar1, setcambiar1] = useState(false);
  useEffect(() => {
    // console.log(NIT);
    // console.log(estado);
    obtener();
  }, []);
  const obtener = async () => {
    try {
      const respuesta = await axios.post(
        "http://localhost:8000/admin/solicitud",
        {
          NIT: NIT,
        }
      );
      setdata(respuesta.data);
    } catch (error) {}
  };
  const denegar = () => {
    return <Denegar NIT={NIT} nombre={data.nombre} email={data.email} estado={cambiar} cambiarEstado={setcambiar}></Denegar>;
  };
  const aceptar = () => {
    return <Aceptar NIT={NIT} nombre={data.nombre} email={data.email} estado={cambiar1} cambiarEstado={setcambiar1}></Aceptar>;
  };
  return (
    <>
      <div className="fixed inset-0 bg-slate-600 bg-opacity-60 backdrop-blur-sm  flex justify-center items-center  text-center z-30">
        <div className=" bg-dark_theme dark:bg-second_color_lt w-[50%] rounded-2xl p-8 flex flex-col items-center  text-center gap-3 text-white">
          <h1 className=" text-6xl text-white mb-5">{data.nombre}</h1>
          <img
            className="w-[30vh] rounded-2xl"
            src="https://ethic.es/wp-content/uploads/2022/01/image-from-rawpixel-id-2043765-jpeg-1.jpg"
          />
          <p>{data.descripcion}</p>
          <p>
            <span className="font-bold">Dirección: </span> {data.direccion}
          </p>
          <p>
            <span className="font-bold">Télefono: </span> {data.telefono}
          </p>
          <p>
            <span className="font-bold">Correo electrónico: </span>
            {data.email}
          </p>
          <p>
            <span className="font-bold">Instagram: </span>
            {data.instagram}
          </p>
          <p>
            <span className="font-bold">Facebook: </span>
            {data.facebook}
          </p>
          <p>
            <span className="font-bold">Municipio: </span>
            {data.municipio?.municipio}
          </p>

          <div className="flex gap-10">
            <button
              onClick={() => (denegar(), setcambiar(!cambiar))}
              className="bg-admin_card dark:bg-light_theme hover:bg-dark_theme dark:text-second_color_lt px-4 py-1 rounded-lg hover:dark:bg-second_color_lt hover:dark:text-white hover:border hover:border-light_theme"
            >
              Denegar
            </button>
            <button
              onClick={() => (aceptar(), setcambiar1(!cambiar1))}
              className="bg-admin_card dark:bg-light_theme hover:bg-dark_theme dark:text-second_color_lt px-4 py-1 rounded-lg hover:dark:bg-second_color_lt hover:dark:text-white hover:border hover:border-light_theme"
            >
              Aceptar
            </button>
            <button
              className="bg-admin_card dark:bg-light_theme hover:bg-dark_theme dark:text-second_color_lt px-4 py-1 rounded-lg hover:dark:bg-second_color_lt hover:dark:text-white hover:border hover:border-light_theme"
              onClick={() => {
                cambiarEstado(false);
              }}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
      {cambiar ? denegar() : <div></div>}
      {cambiar1 ? aceptar() : <div></div>}
    </>
  );
};
