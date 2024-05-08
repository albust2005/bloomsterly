import { useToastify } from "../../components/hooks/useToastify";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    console.log(data)
  });
  

  return (
    <div className="z-10 border-2 dark:bg-white dark:border-second_color_lt shadow-lg bg-dark_theme rounded-2xl">
      <div className="flex flex-col justify-center text-center dark:bg-nav_light_theme bg-admin_card p-4 gap-3 rounded-2xl">
        <h2 className="dark:text-second_color_lt text-white font-semibold text-3xl">
          Crear Servicio
        </h2>
      </div>
      <div className="flex justify-center flex-col gap-3 mt-3 w-full relative p-5 rounded-lg">
        <form
          className="w-full flex flex-col gap-2 text-white dark:text-second_color_lt"
          onSubmit={onSubmit}
        >
          {/* Campo para ID */}
          <label htmlFor="ID" className="font-bold">
            ID
          </label>
          <input
            type="text"
            {...register("ID", {
              required: "Este campo es requerido",
            })}
            className="focus:outline-none bg-transparent border-b-2 dark:border-second_color_lt"
          />
          {errors.ID && <span>{errors.ID.message}</span>}

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
          {errors.imagen && <span className="text-red-500 text-sm">{errors.imagen.message}</span>}

          {errors.imagen && <span>{errors.imagen.message}</span>}

          {/* Campo para Nombre */}
          <label htmlFor="nombre" className="font-bold">
            Nombre
          </label>
          <input
            type="text"
            {...register("nombre", {
              required: "Este campo es requerido",
            })}
            className="focus:outline-none bg-transparent border-b-2 dark:border-second_color_lt"
          />
          {errors.nombre && <span>{errors.nombre.message}</span>}

          {/* Campo para Descripción */}
          <label htmlFor="descripcion" className="font-bold">
            Descripción
          </label>
          <textarea
            {...register("descripcion", {
              required: "Este campo es requerido",
            })}
            className="focus:outline-none bg-transparent border-b-2 dark:border-second_color_lt"
          />
          {errors.descripcion && <span>{errors.descripcion.message}</span>}

          {/* Campo para Valor del Servicio */}
          <label htmlFor="valor_servicio" className="font-bold">
            Valor del Servicio
          </label>
          <input
            type="number"
            {...register("valor_servicio", {
              required: "Este campo es requerido",
            })}
            className="focus:outline-none bg-transparent border-b-2 dark:border-second_color_lt"
          />
          {errors.valor_servicio && <span>{errors.valor_servicio.message}</span>}

          {/* Campo para Código de Subcategoría */}
          <div className="flex flex-col w-full ">
                <label htmlFor="COD_subCategoria" className="font-bold">
                  Codigo Subcategoria
                </label>
                <select
                  className="text-white rounded-md bg-transparent text-base font-text focus:outline-none border-b-2 dark:border-second_color_lt dark:text-second_color_lt"
                  {...register("COD_subCategoria")}
                >
                  <option
                    value=""
                    disabled
                    className="bg-dark_theme dark:bg-light_theme"
                  >
                    Sub categoria 
                  </option>
                  <option
                    value="1"
                    className="bg-dark_theme dark:bg-light_theme"
                  >
                    Mariachis
                  </option>
                  <option
                    value="2"
                    className="bg-dark_theme dark:bg-light_theme"
                  >
                    Música Electrónica
                  </option>
                  <option
                    value="3"
                    className="bg-dark_theme dark:bg-light_theme"
                  >
                    Decoración Infantil
                  </option>
                  <option
                    value="4"
                    className="bg-dark_theme dark:bg-light_theme"
                  >
                    Decoración Matrimonia
                  </option>
                  <option
                    value="5"
                    className="bg-dark_theme dark:bg-light_theme"
                  >
                    Decoración de Quinces
                  </option>
                  <option
                    value="6"
                    className="bg-dark_theme dark:bg-light_theme"
                  >
                    Buffet Mexicano
                  </option>
                  <option
                    value="7"
                    className="bg-dark_theme dark:bg-light_theme"
                  >
                    Catering Gourmet
                  </option>
                  <option
                    value="8"
                    className="bg-dark_theme dark:bg-light_theme"
                  >
                    Cócteles Clásicos
                  </option>
                  <option
                    value="9"
                    className="bg-dark_theme dark:bg-light_theme"
                  >
                   Cócteles Exóticos
                  </option>
                </select>
              </div>


          {/* Botón de Envío */}
          <button
            type="submit"
            className="text-white mt-2 bg-color_switch_theme_dark w-full p-2 font-bold rounded-md hover:bg-[#8e5ee0] dark:bg-[#eb2651] dark:hover:bg-[#d61540]"
          >
            Crear
          </button>
        </form>
      </div>
    </div>
  );
};