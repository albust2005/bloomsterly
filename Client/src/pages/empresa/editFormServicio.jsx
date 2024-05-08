import { useToastify } from "../../components/hooks/useToastify";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const EditarFormServicio = ({ servicioId }) => {
  const { showToastMessage } = useToastify();
  const navegate = useNavigate();
  const [servicio, setServicio] = useState({});

  useEffect(() => {
    cargarDatosServicio();
  }, [servicioId]);

  const cargarDatosServicio = async () => {
    try {
      const respuesta = await axios.get(`http://localhost:8000/api/servicios/${servicioId}`);
      setServicio(respuesta.data);
    } catch (error) {
      showToastMessage("Error al cargar los datos del servicio");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const { ID, nombre, descripcion, valor_servicio, COD_subCategoria } = data;

      const respuesta = await axios.put(
        `http://localhost:8000/api/servicios/${servicioId}`,
        {
          ID,
          nombre,
          descripcion,
          valor_servicio,
          COD_subCategoria,
        }
      );

      showToastMessage(respuesta.data.message);
      navegate(`/ruta-de-redireccion`);
    } catch (error) {
      showToastMessage("Hubo un error al editar el servicio");
    }
  };

  return (
    <div className="z-10 border-2 dark:bg-white dark:border-second_color_lt shadow-lg bg-dark_theme rounded-2xl">
      <div className="flex flex-col justify-center text-center dark:bg-light_theme bg-admin_card p-4 gap-3 rounded-xl">
        <h2 className="dark:text-second_color_lt text-white font-semibold text-3xl">
          Editar Servicio
        </h2>
      </div>
      <div className="flex justify-center flex-col gap-3 mt-3 w-full relative p-5 rounded-lg">
        <form
          className="w-full flex flex-col gap-2 text-white dark:text-second_color_lt"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Campo ID */}
          <label htmlFor="ID" className="font-bold">
            ID
          </label>
          <input
            type="text"
            {...register("ID")}
            defaultValue={servicio.ID} // Asignar el valor actual del ID del servicio
            disabled // El campo ID no se puede editaz
            className="focus:outline-none bg-transparent border-b-2 dark:border-second_color_lt"

          />

          {/* Campo para Imagen */}
          <label htmlFor="imagen" className="font-bold">
            Imagen
          </label>
          <div className="mt-1 flex justify-center items-center">
            <label
              htmlFor="imagen"
              className="cursor-pointer bg-gray-100 dark:bg-second_color_lt border border-gray-300 dark:border-second_color_lt rounded-lg py-2 px-4 text-sm text-gray-700 dark:text-second_color_lt hover:bg-gray-200 dark:hover:bg-slate-50 transition-all duration-300"
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


          {/* Campo Nombre */}
          <label htmlFor="nombre" className="font-bold">
            Nombre
          </label>
          <input
            type="text"
            {...register("nombre", {
              required: "Este campo es requerido",
            })}
            defaultValue={servicio.nombre} // Asignar el valor actual del nombre del servicio
            className="focus:outline-none bg-transparent border-b-2 dark:border-second_color_lt"
          />
          {errors.nombre && <span>{errors.nombre.message}</span>}

          {/* Campo Descripción */}
          <label htmlFor="descripcion" className="font-bold">
            Descripción
          </label>
          <textarea
            {...register("descripcion", {
              required: "Este campo es requerido",
            })}
            defaultValue={servicio.descripcion} // Asignar el valor actual de la descripción del servicio
            className="focus:outline-none bg-transparent border-b-2 dark:border-second_color_lt"

          />
          {errors.descripcion && <span>{errors.descripcion.message}</span>}

          {/* Campo Valor del Servicio */}
          <label htmlFor="valor_servicio" className="font-bold">
            Valor del Servicio
          </label>
          <input
            type="number"
            {...register("valor_servicio", {
              required: "Este campo es requerido",
            })}
            defaultValue={servicio.valor_servicio} // Asignar el valor actual del valor del servicio
          />
          {errors.valor_servicio && <span>{errors.valor_servicio.message}</span>}

          {/* Campo Código de Subcategoría */}
          <label htmlFor="COD_subCategoria" className="font-bold">
            Código de Subcategoría
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

          {/* Botón de Envío */}
          <button
            type="submit"
            className="text-white mt-2 bg-color_switch_theme_dark w-full p-2 font-bold rounded-md hover:bg-[#8e5ee0] dark:bg-[#eb2651] dark:hover:bg-[#d61540]"
          >
            Editar
          </button>
        </form>
      </div>
    </div>
  );
};
