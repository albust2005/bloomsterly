import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLoginUserContext } from "../../components/providers/userProvider";
export const EliminarAdmin = ({cambiarEstado}) => {
  const navegate = useNavigate()
  const { logout } = useLoginUserContext()
  const token = localStorage.getItem("token")
  const eliminar = async()=>{
    try {
      const respuesta = await axios.get(
        "http://localhost:8000/admin/eliminarPerfil",{
          headers: {
            Authorization:token
          }
        }
      );
      const mensaje = respuesta.data.message;
      alert(mensaje);
      logout
      navegate("/")
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else if (error.request) {
        // La solicitud fue realizada pero no se recibió respuesta
        console.error("No se recibió respuesta del servidor");
      } else {
        alert(error.message);
      }
    }
  };
  return (
    <div className="fixed inset-0 bg-slate-600 bg-opacity-60 backdrop-blur-sm  flex justify-center items-center  text-center z-30">
      <div className=" bg-dark_theme dark:bg-second_color_lt w-[50%] rounded-2xl p-8 flex flex-col items-center  text-center gap-7 text-white ">
        <h2 className="text-xl">¿Deseas eliminar esta cuenta?</h2>
        <p>
          Tener en cuenta que esta decisión puede tener repercusiones sin ser
          previamente consultada
        </p>
        <div className="flex gap-10">
          <button
            className="bg-admin_card dark:bg-light_theme hover:bg-dark_theme dark:text-second_color_lt px-4 py-1 rounded-lg hover:dark:bg-second_color_lt hover:dark:text-white hover:border hover:border-light_theme"
            onClick={() => {
              cambiarEstado(false);
            }}
          >
            Cancelar
          </button>
          <button onClick={()=>{eliminar()}} className="bg-admin_card dark:bg-light_theme hover:bg-dark_theme dark:text-second_color_lt px-4 py-1 rounded-lg hover:dark:bg-second_color_lt hover:dark:text-white hover:border hover:border-light_theme">
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}