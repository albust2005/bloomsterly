import { useToastify } from "../../components/hooks/useToastify";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const FormServicio = () => {
  const { showToastMessage } = useToastify();
  const navegate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();
    formData.append("imagen", data.imagen[0]); // Accede al archivo de imagen
    // const { ID, nombre, descripcion, valor_servicio, COD_subCategoria } = data;
    // try {
    //   const respuesta = await axios.post(
    //     "http://localhost:8000/api/servicios",
    //     {
    //       ID: ID,
    //       nombre: nombre,
    //       descripcion: descripcion,
    //       valor_servicio: valor_servicio,
    //       COD_subCategoria: COD_subCategoria,
    //     }
    //   );
    //   showToastMessage(respuesta.data.message);
    //   // Navegar a la página deseada después de la creación exitosa
    //   navegate("/ruta-de-redireccion");
    // } catch (error) {
    //   showToastMessage("Hubo un error al crear el servicio.");
    // }
    console.log(data);
  });

  return (
    <>
      <div
        className="h-full w-full bg-dark_theme dark:bg-second_color_lt text-white  p-10 shadow-xl shadow-[#4e1ba1]
        flex flex-col gap-9 mt-10 dark:shadow-[#d91e4e] z-10"
      >
        <div>
          <Link to="/empresa/servicios">
            <FontAwesomeIcon icon={faArrowLeft} size="xl" />
          </Link>
          <h1 className="font-bloomsterly text-white text-9xl text-center ">
            Crear Servicios
          </h1>
          <p className="text-balance text-center font-text text-xl ">
            Atraves de este formulario podras tu crear un servicio
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            className="w-[90%] text-base minicel:text-sm sm:text-lg md:text-xl  "
            onSubmit={onSubmit}
          >
            <div className="flex w-full gap-4">
              <div className="input-box animation flex flex-col w-full ">
                {/* Campo para ID */}
                <label htmlFor="ID" className="font-bold">
                  ID
                </label>
                <input
                  type="text"
                  {...register("ID", {
                    required: "Este campo es requerido",
                  })}
                  className="focus:outline-none bg-transparent border-b-2 border-white text-base font-text 
                    minicel:w-2/3 sm:w-full minicel:mb-1"
                />
                {errors.ID && <span>{errors.ID.message}</span>}
              </div>

              <div className="input-box animation flex flex-col w-full">
                {/* Campo para Imagen */}
                <label htmlFor="imagen" className="font-bold">
                  Imagen
                </label>
                <div className="mt-4 mb-4">
                  <label
                    htmlFor="imagen"
                    className=" cursor-pointer bg-white dark:bg-white border border-gray-300 dark:border-second_color_lt rounded-lg py-2 px-4 text-sm text-gray-700 hover:text-white dark:text-second_color_lt dark:hover:text-white hover:bg-admin_card  dark:hover:bg-second_color_lt  transition-all duration-300"
                  >
                    Seleccionar archivo
                    <input
                      type="file"
                      accept="image/*"
                      {...register("imagen", {
                        required: "Este campo es requerido",
                      })}
                      className="hidden"
                      id="imagen"
                    />
                  </label>
                </div>
                {errors.imagen && (
                  <span className="text-red-500 text-sm">
                    {errors.imagen.message}
                  </span>
                )}
              </div>
            </div>

            <div className="input-box animation flex flex-col w-full">
              {/* Campo para Nombre */}
              <label htmlFor="nombre" className="font-bold">
                Nombre
              </label>
              <input
                type="text"
                {...register("nombre", {
                  required: "Este campo es requerido",
                })}
                className="focus:outline-none bg-transparent border-b-2 dark:border-white"
              />
              {errors.nombre && <span>{errors.nombre.message}</span>}
            </div>

            <div className="input-box animation flex flex-col w-full">
              {/* Campo para Descripción */}
              <label htmlFor="descripcion" className="font-bold">
                Descripción
              </label>
              <textarea
                {...register("descripcion", {
                  required: "Este campo es requerido",
                })}
                className="w-full font-titulos dark:text-primary-color text-second-color pb-2 pr-3 mr-2 border-b-2 border-r-2 border-second-color dark:border-white bg-transparent focus:outline-none resize-none"
              />
              {errors.descripcion && <span>{errors.descripcion.message}</span>}
            </div>

            <div className="flex w-full gap-4">
              <div className="input-box animation flex flex-col w-full ">
                {/* Campo para Valor del Servicio */}
                <label htmlFor="valor_servicio" className="font-bold">
                  Valor del Servicio
                </label>
                <input
                  type="number"
                  {...register("valor_servicio", {
                    required: "Este campo es requerido",
                  })}
                  className="focus:outline-none bg-transparent border-b-2 dark:border-white"
                />
                {errors.valor_servicio && (
                  <span>{errors.valor_servicio.message}</span>
                )}
              </div>
            </div>

            <div className="flex w-full gap-4">
              <div className="input-box animation flex flex-col w-full">
                {/* Campo para Código de Subcategoría */}
                <div className="flex flex-col w-full ">
                  <label htmlFor="COD_subCategoria" className="font-bold">
                    Codigo Subcategoria
                  </label>
                  <select
                    className="text-white rounded-md bg-transparent text-base font-text focus:outline-none border-b-2 dark:border-white dark:text-white"
                    {...register("COD_subCategoria")}
                  >
                    <option
                      value=""
                      disabled
                      className="bg-dark_theme dark:text-second_color_lt dark:bg-white"
                    >
                      Sub categoria
                    </option>
                    <option
                      value="1"
                      className="bg-dark_theme dark:text-second_color_lt dark:bg-white"

                    >
                      Mariachis
                    </option>
                    <option
                      value="2"
                      className="bg-dark_theme dark:text-second_color_lt dark:bg-white"
                      
                    >
                      Música Electrónica
                    </option>
                    <option
                      value="3"
                      className="bg-dark_theme dark:text-second_color_lt dark:bg-white"
                      
                    >
                      Decoración Infantil
                    </option>
                    <option
                      value="4"
                      className="bg-dark_theme dark:text-second_color_lt dark:bg-white"
                      
                    >
                      Decoración Matrimonia
                    </option>
                    <option
                      value="5"
                      className="bg-dark_theme dark:text-second_color_lt dark:bg-white"
                      
                    >
                      Decoración de Quinces
                    </option>
                    <option
                      value="6"
                      className="bg-dark_theme dark:text-second_color_lt dark:bg-white"
                      
                    >
                      Buffet Mexicano
                    </option>
                    <option
                      value="7"
                      className="bg-dark_theme dark:text-second_color_lt dark:bg-white"
                      
                    >
                      Catering Gourmet
                    </option>
                    <option
                      value="8"
                      className="bg-dark_theme dark:text-second_color_lt dark:bg-white"
                      
                    >
                      Cócteles Clásicos
                    </option>
                    <option
                      value="9"
                      className="bg-dark_theme dark:text-second_color_lt dark:bg-white"
                      
                    >
                      Cócteles Exóticos
                    </option>
                  </select>
                </div>
              </div>
            </div>

            {/* Botón de Envío */}
            <button
              type="submit"
              className="text-white mt-2 bg-color_switch_theme_dark w-full p-1 rounded-md hover:bg-[#8e5ee0]
              minicel:text-sm celular:text-base sm:text-lg md:text-xl  
              minicel:mt-3 sm:mt-6 dark:bg-[#eb2651] dark:hover:bg-[#d61540]"
            >
              Crear servicio
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
