import { useForm } from "react-hook-form";
import { useNewUserContext } from "../components/providers/userProvider";

export function Registro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const createUser = useNewUserContext();

  return (
    <div className="form-box flex justify-center items-center flex-col gap-4 mt-3 w-full text-white  relative">

      <form
        action=""
        className="w-full text-base minicel:text-sm sm:text-lg md:text-xl "
        onSubmit={handleSubmit(createUser)}
      >
        <div className="flex w-full gap-4 minicel:flex-col sm:flex-row">
          <div className="input-box animation flex flex-col w-full ">
            <label htmlFor="Name" className="   font-semibold">
              Nombre
            </label>
            <input
              type="text"
              className="focus:outline-none bg-transparent border-b-2 border-white text-base font-text 
              minicel:w-2/3 sm:w-full minicel:mb-1"
              {...register("Name", {
                required: {
                  value: true,
                  message: "Escribe tu nombre",
                },
              })}
            />
            {errors.Name && (
              <span className="text-sm">{errors.Name.message}</span>
            )}
          </div>

          <div className="input-box animation flex flex-col w-full">
            <label
              htmlFor="Firstlastname"
              className="minicel:text-xs sm:text-xs md:text-xl  font-semibold"
            >
              Primer Apellido
            </label>
            <input
              type="text"
              className="focus:outline-none bg-transparent border-b-2 border-white 
              minicel:text-sm sm:text-lg md:text-xl   font-text minicel:w-2/3 sm:w-full
              minicel:mb-1"
              {...register("Firstlastname", {
                required: {
                  value: true,
                  message: "Escribe tu Primer aperllido", 
                },
              })}
            />
            {errors.Firstlastname && (
              <span className="text-sm text-white ">
                {errors.Firstlastname.message}
              </span>
            )}
          </div>
        </div>

        <div className="input-box animation flex flex-col w-full">
          <label
            htmlFor="Cedula"
            className="minicel:text-sm sm:text-lg md:text-xl   mb-1 font-semibold"
          >
            Cédula
          </label>
          <input
            type="text"
            className="focus:outline-none bg-transparent border-b-2 border-white text-base font-text"
            {...register("Cedula", {
              required: {
                value: true,
                message: "Escribe tu numero de documento",
              },
            })}
          />
          {errors.Cedula && (
            <span className="text-sm">{errors.Cedula.message}</span>
          )}
        </div>

        <div className="input-box animation flex flex-col w-full">
          <label
            htmlFor="Email"
            className="minicel:text-sm sm:text-lg md:text-xl   mb-1 font-semibold"
          >
            Email
          </label>
          <input
            type="text"
            className="focus:outline-none bg-transparent border-b-2 border-white text-base font-text"
            {...register("Email", {
              required: {
                value: true,
                message: "Escribe tu nombre",
              },
            })}
          />
          {errors.Email && (
            <span className="text-sm">{errors.Email.message}</span>
          )}
        </div>

        <div className="flex w-full gap-10">
          <div className="input-box animation flex flex-col w-full">
            <label
              htmlFor="Username"
              className="minicel:text-sm sm:text-lg md:text-xl  mt-2  font-semibold"
            >
              Nombre de usuario
            </label>
            <input
              type="text"
              className="focus:outline-none bg-transparent border-b-2 border-white text-base font-text minicel:w-2/3 sm:w-full"
              {...register("Username", {
                required: {
                  value: true,
                  message: "Escribe tu nombre de usuario",
                },
              })}
            />
            {errors.Username && (
              <span className="text-sm text-white ">
                {errors.Username.message}
              </span>
            )}
          </div>

          <div className="input-box animation flex flex-col w-full">
            <label
              htmlFor="Town"
              className="minicel:text-sm sm:text-lg md:text-xl  mt-2 mb-1 font-semibold"
            >
              Municipio
            </label>
            <select
              name=""
              id=""
              {...register("Town")}
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

        <div className="input-box animation flex flex-col">
          <label
            htmlFor="Password"
            className="minicel:text-sm sm:text-lg md:text-xl  l mt-2 font-semibold"
          >
            Contraseña
          </label>
          <input
            type="text"
            className="focus:outline-none bg-transparent border-b-2 border-white text-base font-text"
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

        
          <button className="text-white mt-2 bg-color_switch_theme_dark w-full p-1 rounded-md hover:bg-[#8e5ee0]
          minicel:text-sm celular:text-base sm:text-lg md:text-xl  
          minicel:mt-3 sm:mt-6 dark:bg-[#eb2651] dark:hover:bg-[#d61540]">
            Registro
          </button>
       
      </form>
    </div>
  );
}
