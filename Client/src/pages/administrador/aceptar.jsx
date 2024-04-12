// import { useAceptarEmpresa } from "./hooks/useAceptarEmpresa";
import { useToastify } from "../../components/hooks/useToastify";
import axios from 'axios'

export const Aceptar = ({ NIT, nombre, cambiarEstado }) => {
  
  const currentNit = NIT
  const { showToastMessage } = useToastify()

  const aceptarEmpresa = async () => {
    try {
      const respuesta = await axios.post("http://localhost:8000/admin/aceptacion", {
        NIT: currentNit
      })


      const mensaje = respuesta.data.message
      showToastMessage(mensaje)

    } catch (error) {
      if (error.response) {
        showToastMessage(error.response.data.message)
      } else if (error.request) {
        // La solicitud fue realizada pero no se recibió respuesta
        console.error("No se recibió respuesta del servidor");
      } else {
        showToastMessage(error.message)
      }
    }
  }


  return (
    <>
      <div className="fixed inset-0 bg-slate-600 bg-opacity-60 backdrop-blur-sm  flex justify-center items-center  text-center z-30">
        <div className=" bg-dark_theme dark:bg-second_color_lt w-[40%] rounded-2xl p-8 flex flex-col items-center  text-center gap-7 text-white ">
          <h1 className=" text-3xl">
            ¿Estás seguro de aceptar esta empresa {nombre}?
          </h1>
          <div className="flex gap-10">
            <button
              onClick={aceptarEmpresa}
              className="bg-admin_card dark:bg-light_theme hover:bg-dark_theme dark:text-second_color_lt px-4 py-1 rounded-lg hover:dark:bg-second_color_lt hover:dark:text-white hover:border hover:border-light_theme">
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
    </>
  );
};
