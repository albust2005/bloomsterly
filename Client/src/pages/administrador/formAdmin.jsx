import { useToastify } from "../../components/hooks/useToastify";
import { useForm } from "react-hook-form";
import axios from "axios";
import { IconUser } from "./templates/iconUser";
import { IconPass } from "./templates/iconPass";
import { IconPassO } from "./templates/iconPassO";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export const FormAdmin = () => {
  const { showToastMessage } = useToastify();
  const navegate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const visibilidad = () => {
    setShowPassword(!showPassword);
  };
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    const { nombre, apellido, Cedula, Email, password, Username, municipio } =
      data;
    try {
      const respuesta = await axios.post("http://localhost:8000/admin/crear", {
        COD: Cedula,
        nombre: nombre,
        primer_apelli: apellido,
        COD_municipios: municipio,
        contrasena: password,
        username: Username,
        email: Email,
      });
      showToastMessage(respuesta.data.message);
      navegate("/administrador/perfil");
    } catch (error) {
      alert(error);
    }
  });
  return (
    <>
      <div className="z-10 border-2 dark:bg-white  dark:border-second_color_lt shadow-lg bg-dark_theme rounded-2xl">
        <div className="flex flex-col justify-center text-center dark:bg-light_theme bg-admin_card p-4 gap-3 rounded-2xl">
          <IconUser clasName="h-32" />
          <h2 className="dark:text-second_color_lt text-white font-semibold text-3xl">
            Crear Administrador
          </h2>
        </div>
        <div className="flex justify-center  flex-col gap-3 mt-3 w-full relative  p-5 rounded-lg">
          <form
            className="w-full  flex flex-col gap-2 text-white dark:text-second_color_lt"
            onSubmit={onSubmit}
          >
            <div className="flex  w-full gap-4">
              <div className="flex flex-col w-full ">
                <label htmlFor="nombre" className="font-bold">
                  Nombre
                </label>
                <input
                  type="text"
                  className="focus:outline-none bg-transparent border-b-2 border-white text-base font-text dark:border-second_color_lt"
                  {...register("nombre", {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                    minLength: {
                      value: 4,
                      message:
                        "Este campo debe contar con al menos 4 carácteres",
                    },
                    maxLength: {
                      value: 18,
                      message: "Este campo tiene máximo para 18 carécteres",
                    },
                  })}
                />
                {errors.nombre && <span>{errors.nombre.message}</span>}
              </div>
              <div className="input-box animation flex flex-col w-full ">
                <label htmlFor="apellido" className="font-bold">
                  Apellido
                </label>
                <input
                  type="text"
                  className="focus:outline-none bg-transparent border-b-2 border-white text-base font-text dark:border-second_color_lt"
                  {...register("apellido", {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                  })}
                />
                {errors.apellido && <span>{errors.apellido.message}</span>}
              </div>
            </div>
            <label htmlFor="Cedula" className="font-bold">
              Cédula
            </label>
            <input
              type="text"
              className="focus:outline-none bg-transparent border-b-2 border-white text-base font-text dark:border-second_color_lt"
              {...register("Cedula", {
                required: {
                  value: true,
                  message: "Este campo es requerido",
                },
              })}
            />
            {errors.Cedula && (
              <span className="text-sm">{errors.Cedula.message}</span>
            )}
            <label htmlFor="Email" className="font-bold">
              Email
            </label>
            <input
              type="text"
              className="focus:outline-none bg-transparent border-b-2 border-white text-base font-text dark:border-second_color_lt"
              {...register("Email", {
                required: {
                  value: true,
                  message: "Este campo es requerido",
                },
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Correo no es válido",
                },
              })}
            />
            {errors.Email && <span>{errors.Email.message}</span>}
            <div className="flex gap-4 w-full">
              <div className="flex flex-col w-full ">
                <label htmlFor="Username" className="font-bold">
                  Nombre de usuario
                </label>
                <input
                  type="text"
                  className="focus:outline-none bg-transparent border-b-2 border-white dark:border-second_color_lt"
                  {...register("Username", {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                  })}
                />
                {errors.Username && (
                  <span className="text-sm text-white ">
                    {errors.Username.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col w-full ">
                <label htmlFor="municipio" className="font-bold">
                  Municipio
                </label>
                <select
                  name=""
                  id=""
                  className="text-white rounded-md bg-transparent text-base font-text focus:outline-none border-b-2 dark:border-second_color_lt dark:text-second_color_lt"
                  {...register("municipio")}
                >
                  <option
                    value=""
                    disabled
                    className="bg-dark_theme dark:bg-light_theme"
                  >
                    Municipio
                  </option>
                  <option
                    value="1"
                    className="bg-dark_theme dark:bg-light_theme"
                  >
                    Rionegro
                  </option>
                  <option
                    value="2"
                    className="bg-dark_theme dark:bg-light_theme"
                  >
                    Marinilla
                  </option>
                  <option
                    value="3"
                    className="bg-dark_theme dark:bg-light_theme"
                  >
                    Guarne
                  </option>
                  <option
                    value="4"
                    className="bg-dark_theme dark:bg-light_theme"
                  >
                    Medellín
                  </option>
                </select>
              </div>
            </div>
            <div className="flex flex-col w-full relative">
              <label htmlFor="password" className="font-bold">
                Contraseña
              </label>
              <input
                type={showPassword ? "text" : "password"}
                className="focus:outline-none bg-transparent border-b-2 border-white text-base font-text dark:border-second_color_lt"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Contraseña es requerida",
                  },
                  minLength: {
                    value: 6,
                    message: "la contraseña debe tener al menos 6 carácteres",
                  },
                })}
              />
              <div
                className="absolute right-[1vh] pt-3 cursor-pointer"
                onClick={visibilidad}
              >
                {showPassword ? <IconPass /> : <IconPassO />}
              </div>
            </div>
            {errors.password && (
              <span className="text-sm">{errors.password.message}</span>
            )}
            <button
              type="submit"
              className="text-white mt-2 bg-color_switch_theme_dark w-full p-2 font-bold  rounded-md hover:bg-[#8e5ee0]
             dark:bg-[#eb2651] dark:hover:bg-[#d61540]"
            >
              Crear
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
