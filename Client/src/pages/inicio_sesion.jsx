import { useForm } from "react-hook-form";
import { useLoginUserContext } from "../components/providers/userProvider";
import { Link } from "react-router-dom";
import { IconPass } from "./administrador/templates/iconPass";
import { IconPassO } from "./administrador/templates/iconPassO";

import { useState } from "react";
// import PropTypes from "prop-types";

export function InicioSesion() {
  const [showPassword, setShowPassword] = useState(false);

  const visibilidad = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { loginUser } = useLoginUserContext();

  return (
    <div className="form-box flex justify-center items-center flex-col gap-4 mt-6 w-full bg-transparent relative text-white ">
      <form action="" className="w-full " onSubmit={handleSubmit(loginUser)}>
        <div className="input-box animation flex flex-col ">
          <label htmlFor="Username" className="mb-1 font-semibold">
            Username
          </label>
          <input
            type="text"
            className="focus:outline-none bg-transparent border-b-2 border-white text-base font-text"
            {...register("Username", {
              required: {
                value: true,
                message: "Escribe tu nombre de usuario",
              },
            })}
          />
          {errors.Username && (
            <span className="text-sm">{errors.Username.message}</span>
          )}
        </div>

        <div className="input-box animation flex flex-col">
          <label htmlFor="Password" className="mt-2 mb-1 font-semibold">
            Contraseña
          </label>
          <div className="flex flex-col relative">
            <div
              className=" cursor-pointer absolute right-[1%] bottom-[10%]"
              onClick={visibilidad}
            >
              {showPassword ? <IconPass /> : <IconPassO />}
            </div>

            <input
              type={showPassword ? "text" : "password"}
              className="focus:outline-none bg-transparent border-b-2 border-white text-base font-text"
              {...register("Password", {
                required: {
                  value: true,
                  message: "Escribe tu contraseña",
                },
              })}
            />
          </div>
          {errors.Password && (
            <span className="text-sm text-white">
              {errors.Password.message}
            </span>
          )}
        </div>

        <div className="flex flex-col mt-3">
          <label htmlFor="Rol" className="font-semibold mb-1">
            Rol
          </label>
          <select
            name="Rol"
            id=""
            {...register("Rol")}
            className="focus:outline-none bg-transparent border-b-2 border-white text-base font-text"
          >
            <option value="rol" disabled className="text-black">
              Rol
            </option>
            <option value="Cliente" className="text-black">
              Cliente
            </option>
            <option value="Empresa" className="text-black">
              Empresa
            </option>
            <option value="Administrador" className="text-black">
              Administrador
            </option>
          </select>
          <p className="flex justify-end mt-2 text-xs md:text-base">
            ¿Olvidaste la contraseña?
          </p>
        </div>

        <div className="text-xs md:text-base">
          <p className="flex justify-end mt-2 ">
            ¿Tienes una empresa o emprendimiento?
            <Link
              to="/registroEmpresa"
              className="px-0  md:px-2 hover:bg-light_theme rounded-md hover:text-dark_theme"
            >
              Entra aquí
            </Link>
          </p>
        </div>

        <button
          className="text-white mt-2 bg-color_switch_theme_dark w-full p-1 rounded-md hover:bg-[#8e5ee0]
          minicel:text-sm celular:text-base sm:text-lg md:text-xl 
          dark:bg-[#eb2651] dark:hover:bg-[#d61540]"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}
