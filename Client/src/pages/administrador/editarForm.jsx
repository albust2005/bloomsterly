import { useForm } from "react-hook-form";
import { IconUser } from "./templates/iconUser";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const EdiarForm = () => {
  const [dato, setdato] = useState([])
  const [showPassword, setShowPassword] = useState(false)
  const navegate= useNavigate()
  useEffect(() => {
    obtener()
  }, [])
  const token = localStorage.getItem("token")
  const obtener = async () => {
    try {
      const respuesta = await axios.get("http://localhost:8000/admin/getadmin", {
        headers: {
          Authorization: token
        }
      })
      setdato(respuesta.data)
    } catch (error) {
      alert(error)
    }
  }
  const visibilidad = () => {
    setShowPassword(!showPassword)
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onsubmit = async (data) => {
    let nombre,email, username, COD_municipios, contrasena
    if (data.nombre === "") {
        nombre = dato.nombre
    } else {
        nombre = data.nombre
    }
    if (data.Email === "") {
        email = dato.email
    } else {
        email = data.Email
    }
    if (data.Username === "") {
        username = dato.username
    } else {
        username = data.Username
    }
    if (data.municipio === "") {
        COD_municipios = dato.COD_municipios
    } else {
        COD_municipios = data.municipio
    }
    if (data.password === "") {
       contrasena = dato.contrasena
    } else {
       contrasena = data.password
    }
    try {
        const respuesta = await axios.put("http://localhost:8000/admin/editarPerfil", {
          nombre,
          email,
          username,
          COD_municipios,
          contrasena
        }, {
            headers: {
                Authorization: token
            }
        });
        alert(respuesta.data.message)
        navegate(`/administrador/perfil`)
    } catch (error) {
        if (error.response) {
            alert("Hubo un error al editar perfil de administrador")
        } else if (error.request) {
            // La solicitud fue realizada pero no se recibió respuesta
            console.error('No se recibió respuesta del servidor');
        } else {
            alert(error.message)
        }
    }
}
  return (
    <>
      <div className="z-10 border-2 dark:bg-white  dark:border-second_color_lt shadow-lg bg-dark_theme rounded-2xl">
        <div className="flex flex-col justify-center text-center dark:bg-light_theme bg-admin_card p-4 gap-3 rounded-xl">
          <IconUser clasName="h-32" />
          <h2 className="dark:text-second_color_lt text-white font-semibold text-3xl">
            Editar Mi Perfil
          </h2>
        </div>
        <div className="flex justify-center  flex-col gap-3 mt-3 w-full relative  p-5 rounded-lg">
          <form
            className="w-full  flex flex-col gap-2 text-white dark:text-second_color_lt"
          onSubmit={handleSubmit(onsubmit)}
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
                  })} defaultValue={dato.nombre}
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
                  defaultValue={dato.primer_apelli}
                />
              </div>
              {errors.apellido && <span>{errors.apellido.message}</span>}
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
              defaultValue={dato.COD}
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
              defaultValue={dato.email}
            />
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
                  defaultValue={dato.username}
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
                  {...register("municipio")} defaultValue={dato.municipio?.municipio}
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
            {errors.Email && (
              <span className="text-sm">{errors.Email.message}</span>
            )}
            <label htmlFor="password" className="font-bold">
              Contraseña
            </label>
            <div>
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
              <div className="ojo" onClick={visibilidad}>{showPassword ? "texto" : "contraseña"}</div>
            </div>
            {errors.password && (
              <span className="text-sm">{errors.password.message}</span>
            )}
            <button
              type="submit"
              className="text-white mt-2 bg-color_switch_theme_dark w-full p-2 font-bold  rounded-md hover:bg-[#8e5ee0]
             dark:bg-[#eb2651] dark:hover:bg-[#d61540]"
            >
              Registro
            </button>
          </form>
        </div>
      </div>
    </>
  );
};