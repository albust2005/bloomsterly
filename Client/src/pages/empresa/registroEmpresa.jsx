import { useForm } from "react-hook-form";
import { useCreateEmpresa } from "../../components/hooks/useCreateEmpresa";

 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
 import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export function RegistroEmpresa() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const { createEmpresa } = useCreateEmpresa()

  return (
    <>
      <div className="h-full w-full bg-dark_theme dark:bg-second_color_lt text-white  p-10 shadow-xl shadow-[#4e1ba1]
      flex flex-col gap-9 mt-10 dark:shadow-[#d91e4e] z-10">
        <div>
          <Link to="/login">
          <FontAwesomeIcon icon={faArrowLeft} size="xl"/>
          </Link>
          <h1 className="font-bloomsterly text-white text-9xl text-center ">
            Empresa
          </h1>
          <p className="text-balance text-center font-text text-xl ">
            Envia este formulario para poder ser parte de BloomSterly y ayudar a crear una noche inolvidable a tus clientes!
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action=""
            className="w-[90%] text-base minicel:text-sm sm:text-lg md:text-xl  "
            onSubmit={handleSubmit(createEmpresa)}
          >
            <div className="flex w-full gap-4">
              <div className="input-box animation flex flex-col w-full ">
                <label htmlFor="Nit" className="   font-semibold">
                  NIT
                </label>
                <input
                  type="text"
                  className="focus:outline-none bg-transparent border-b-2 border-white text-base font-text 
                    minicel:w-2/3 sm:w-full minicel:mb-1"
                  {...register("Nit", {
                    required: {
                      value: true,
                      message: "Escribe tu Nit",
                    },
                  })}
                />
                {errors.Nit && (
                  <span className="text-sm">{errors.Nit.message}</span>
                )}
              </div>

              <div className="input-box animation flex flex-col w-full">
                <label
                  htmlFor="Nombreempresa"
                  className="minicel:text-xs sm:text-lg md:text-xl  font-semibold"
                >
                  Nombre de la empresa
                </label>
                <input
                  type="text"
                  className="focus:outline-none bg-transparent border-b-2 border-white 
                    minicel:text-sm sm:text-lg md:text-xl   font-text minicel:w-2/3 sm:w-full
                    minicel:mb-1"
                  {...register("Nombreempresa", {
                    required: {
                      value: true,
                      message: "Escribe el nombre de la empresa",
                    },
                  })}
                />
                {errors.Nombreempresa && (
                  <span className="text-sm text-white ">
                    {errors.Nombreempresa.message}
                  </span>
                )}
              </div>
            </div>

            <div className="input-box animation flex flex-col w-full">
              <label
                htmlFor="descripcion"
                className="font-texto dark:text-primary-color text-second-color font-semibold"
              >
                Descripcion
              </label>
              <textarea
                cols="2"
                rows="4"
                {...register("descripcion", {
                  required: {
                    value: true,
                    message: "La descripcion es obligatoria",
                  },
                  minLength: {
                    value: 25,
                    message: "Tu descripcion debe ser más extensa",
                  },
                  maxLength: {
                    value: 200,
                    message: "Tu descripcion debe ser menos extensa",
                  },
                })}
                className="w-full font-titulos dark:text-primary-color text-second-color pb-2 pr-3 mr-2 border-b-2 border-r-2 border-second-color dark:border-white bg-transparent focus:outline-none"
              ></textarea>
              {errors.descripcion && (
                <span className="text-sm">{errors.descripcion.message}</span>
              )}
            </div>

            <div className="input-box animation flex flex-col w-full">
              <label
                htmlFor="email"
                className="minicel:text-sm sm:text-lg md:text-xl  mt-2  font-semibold"
              >
                Email
              </label>
              <input
                type="tel"
                className="focus:outline-none bg-transparent border-b-2 border-white text-base font-text minicel:w-2/3 sm:w-full"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Escribe tu email",
                  },
                })}
              />
              {errors.telefono && (
                <span className="text-sm text-white ">
                  {errors.telefono.email}
                </span>
              )}
            </div>


            <div className="flex w-full gap-4">
              <div className="input-box animation flex flex-col w-full">
                <label
                  htmlFor="Instagram"
                  className="minicel:text-sm sm:text-lg md:text-xl  mt-2  font-semibold"
                >
                  Instagram
                </label>
                <input
                  type="text"
                  className="focus:outline-none bg-transparent border-b-2 border-white text-base font-text minicel:w-2/3 sm:w-full"
                  {...register("Instagram")}
                />
              </div>

              <div className="input-box animation flex flex-col w-full">
                <label
                  htmlFor="Facebook"
                  className="minicel:text-sm sm:text-lg md:text-xl  mt-2  font-semibold"
                >
                  Facebook
                </label>
                <input
                  type="text"
                  className="focus:outline-none bg-transparent border-b-2 border-white text-base font-text minicel:w-2/3 sm:w-full"
                  {...register("Facebook")}
                />
              </div>
            </div>

            <div className="flex w-full gap-4">
              <div className="input-box animation flex flex-col w-full">
                <label
                  htmlFor="telefono"
                  className="minicel:text-sm sm:text-lg md:text-xl  mt-2  font-semibold"
                >
                  Telefono
                </label>
                <input
                  type="tel"
                  className="focus:outline-none bg-transparent border-b-2 border-white text-base font-text minicel:w-2/3 sm:w-full"
                  {...register("telefono", {
                    required: {
                      value: true,
                      message: "Escribe tu telefono ",
                    },
                  })}
                />
                {errors.telefono && (
                  <span className="text-sm text-white ">
                    {errors.telefono.message}
                  </span>
                )}
              </div>

              <div className="input-box animation flex flex-col w-full">
                <label
                  htmlFor="municipio"
                  className="minicel:text-sm sm:text-lg md:text-xl  mt-2 mb-1 font-semibold"
                >
                  Municipio
                </label>
                <select
                  {...register("municipio")}
                  className="text-white rounded-md bg-transparent text-base font-text focus:outline-none border-b-2"
                >
                  <option
                    value=""
                    disabled
                    className="bg-dark_theme minicel:text-xs sm:text-lg md:text-xl  "
                  >
                    Municipio
                  </option>
                  <option
                    value="1"
                    className="bg-dark_theme minicel:text-xs sm:text-lg md:text-xl  "
                  >
                    Rionegro
                  </option>
                  <option
                    value="2"
                    className="bg-dark_theme minicel:text-xs sm:text-lg md:text-xl  "
                  >
                    Marinilla
                  </option>
                  <option
                    value="3"
                    className="bg-dark_theme minicel:text-xs sm:text-lg md:text-xl  "
                  >
                    Guarne
                  </option>
                  <option
                    value="4"
                    className="bg-dark_theme minicel:text-xs sm:text-lg md:text-xl  "
                  >
                    Medellín
                  </option>
                </select>
              </div>
            </div>

            <div className="input-box animation flex flex-col w-full">
              <label
                htmlFor="direccion"
                className="minicel:text-sm sm:text-lg md:text-xl  mt-2  font-semibold"
              >
                Direccion
              </label>
              <input
                type="text"
                className="focus:outline-none bg-transparent border-b-2 border-white text-base font-text minicel:w-2/3 sm:w-full"
                {...register("direccion", {
                  required: {
                    value: true,
                    message: "Escribe tu direccion",
                  },
                })}
              />
              {errors.direccion && (
                <span className="text-sm text-white ">
                  {errors.direccion.message}
                </span>
              )}
            </div>

            <div className="input-box animation flex flex-col">
              <label
                htmlFor="Password"
                className="minicel:text-sm sm:text-lg md:text-xl  l mt-2 font-semibold"
              >
                Contraseña
              </label>
              <input
                type="text"
                className="focus:outline-none bg-transparent border-b-2 border-white text-base font-text "
                {...register("Password", {
                  required: {
                    value: true,
                    message: "Escribe tu contraseña",
                  },
                })}
              />
              {errors.Password && (
                <span className="text-sm text-white ">
                  {errors.Password.message}
                </span>
              )}
            </div>

            <div className="input-box animation flex flex-col">
              <label
                htmlFor="ConfirmPassword"
                className="minicel:text-sm sm:text-lg md:text-xl   mt-2 font-semibold"
              >
                Confirma contraseña
              </label>
              <input
                type="password"
                className="focus:outline-none bg-transparent border-b-2 border-white text-base font-text"
                {...register("ConfirmPassword", {
                  required: {
                    value: true,
                    message: "Confirma tu contraseña",
                  },
                  validate: (value) => {
                    if (value === watch("Password")) {
                      return true;
                    } else {
                      return "Las contraseñas no coinciden";
                    }
                  },
                })}
              />
              {errors.ConfirmPassword && (
                <span className="text-sm text-white">
                  {errors.ConfirmPassword.message}
                </span>
              )}
            </div>

            <button
              className="text-white mt-2 bg-color_switch_theme_dark w-full p-1 rounded-md hover:bg-[#8e5ee0]
          minicel:text-sm celular:text-base sm:text-lg md:text-xl  
          minicel:mt-3 sm:mt-6 dark:bg-[#eb2651] dark:hover:bg-[#d61540]"
              type="submit"
            >
              Enviar solicitud
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
