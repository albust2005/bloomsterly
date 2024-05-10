import { useToastify } from "../../components/hooks/useToastify";
import { useForm } from "react-hook-form";
import { IconPass } from "./templates/iconPass";
import { IconPassO } from "./templates/iconPassO";
import { useState } from "react";
import axios from "axios";
import { useFoundUser } from "../empresa/perfilEmpresa";

export const EdiarForm = () => {
  const { dataUser, sesionUser } = useFoundUser();
  const [showPassword, setShowPassword] = useState(false);

  const token = localStorage.getItem("token");

  const { showToastMessage } = useToastify();
  const visibilidad = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = async (data) => {
    let nombre, email, username, COD_municipios, contrasena;
    if (data.nombre === "") {
      nombre = dataUser.nombre || dataUser.nombre_c;
    } else {
      nombre = dataUser.nombre || dataUser.nombre_c;
    }
    if (data.Email === "") {
      email = dataUser.email;
    } else {
      email = data.Email;
    }
    if (data.Username === "") {
      username = dataUser.username;
    } else {
      username = data.Username;
    }
    if (data.municipio === "") {
      COD_municipios = dataUser.COD_municipios;
    } else {
      COD_municipios = data.municipio;
    }
    if (data.password === "") {
      contrasena = dataUser.contrasena;
    } else {
      contrasena = data.password;
    }

    if (sesionUser.Rol === "Administrador") {
      try {
        const respuesta = await axios.put(
          "http://localhost:8000/admin/editarPerfil",
          {
            nombre,
            email,
            username,
            COD_municipios,
            contrasena,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        );
        showToastMessage(respuesta.data.message);
      } catch (error) {
        if (error.response) {
          showToastMessage("Hubo un error al editar perfil de administrador");
        } else if (error.request) {
          // La solicitud fue realizada pero no se recibió respuesta
          console.error("No se recibió respuesta del servidor");
        } else {
          showToastMessage(error.message);
        }
      }
    }

    if (sesionUser.Rol === "Cliente") {
      try {
        const respuesta = await axios.put(
          "http://localhost:8000/user/editarPerfil",
          {
            nombre,
            email,
            username,
            COD_municipios,
            contrasena,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        );
        showToastMessage(respuesta.data.message);
      } catch (error) {
        if (error.response) {
          showToastMessage("Hubo un error al editar perfil de administrador");
        } else if (error.request) {
          // La solicitud fue realizada pero no se recibió respuesta
          console.error("No se recibió respuesta del servidor");
        } else {
          showToastMessage(error.message);
        }
      }
    }

    if (sesionUser.Rol === "Empresa") {
      try {
        const respuesta = await axios.put(
          "http://localhost:8000/empresa/editarPerfil",
          {
            nombre: nombre,
            email: email,
            contrasena: contrasena,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        );
        showToastMessage(respuesta.data.message);
      } catch (error) {
        if (error.response) {
          showToastMessage("Hubo un error al editar perfil de administrador");
        } else if (error.request) {
          // La solicitud fue realizada pero no se recibió respuesta
          console.error("No se recibió respuesta del servidor");
        } else {
          showToastMessage(error.message);
        }
      }
    }
  };

  return (
    <section className=" bg-dark_theme dark:bg-second_color_lt p-9 flex flex-col gap-4 z-20">
      <div>
        <h1 className="font-bloomsterly text-8xl text-center text-white">
          Editar Perfil
        </h1>
      </div>
      <div className="flex justify-center  flex-col gap-3 mt-3 w-full relative  p-5 rounded-lg">
        <form
          className="w-full  flex flex-col gap-2 text-white dark:text-second_color_lt font-title font-semibold text-xl "
          onSubmit={handleSubmit(onsubmit)}
        >
          <div className="flex  w-full gap-4">
            <div className="flex flex-col w-full ">
              <label htmlFor="nombre" className="font-bold">
                Nombre
              </label>
              <input
                type="text"
                className="focus:outline-none bg-transparent border-b-2 border-white dark:border-second_color_lt"
                {...register("nombre", {
                  required: {
                    value: true,
                    message: "Este campo es requerido",
                  },
                  minLength: {
                    value: 4,
                    message: "Este campo debe contar con al menos 4 carácteres",
                  },
                  maxLength: {
                    value: 18,
                    message: "Este campo tiene máximo para 18 carécteres",
                  },
                })}
                defaultValue={dataUser.nombre || dataUser.nombre_c}
              />
              {errors.nombre && <span>{errors.nombre.message}</span>}
            </div>
            <div className="input-box animation flex flex-col w-full ">
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
                defaultValue={dataUser.email}
              />
              {errors.Email && <span>{errors.Email.message}</span>}
            </div>
          </div>
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
                defaultValue={dataUser.username}
              />
              {errors.Username && (
                <span className="text-sm text-white ">
                  {errors.Username.message}
                </span>
              )}
            </div>
            <div className="flex flex-col w-full mt-[5px]">
              <label htmlFor="municipio" className="font-bold">
                Municipio
              </label>
              <select
                name=""
                id=""
                className="text-white rounded-md bg-transparent text-base font-text focus:outline-none border-b-2 dark:border-second_color_lt dark:text-second_color_lt"
                {...register("municipio")}
                defaultValue={dataUser.municipio?.municipio}
              >
                <option
                  value=""
                  disabled
                  className="bg-dark_theme dark:bg-light_theme"
                >
                  Municipio
                </option>
                <option value="1" className="bg-dark_theme dark:bg-light_theme">
                  Rionegro
                </option>
                <option value="2" className="bg-dark_theme dark:bg-light_theme">
                  Marinilla
                </option>
                <option value="3" className="bg-dark_theme dark:bg-light_theme">
                  Guarne
                </option>
                <option value="4" className="bg-dark_theme dark:bg-light_theme">
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
            Editar
          </button>
        </form>
      </div>
    </section>
  );
};
