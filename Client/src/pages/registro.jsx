import { useForm } from "react-hook-form";
import { useNewUserContext } from "../components/providers/userProvider";

export function Registro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const createUser = useNewUserContext()

  return (
    <div className="form-box flex justify-center items-center flex-col gap-4 mt-6 w-full text-white  relative  ">
      <h1 className="font-semibold text-base sm:text-xl md:text-2xl lg:3xl">
        Registro
      </h1>

      <form
        action=""
        className="w-full text-base md:text-xl "
        onSubmit={handleSubmit(createUser)}
      >

        <div className="flex w-full gap-4">
          <div className="input-box animation flex flex-col w-full">
            <label htmlFor="Name" className="mb-1 font-semibold">
              Nombre
            </label>
            <input
              type="text"
              className="focus:outline-none bg-transparent border-b-2 border-white text-base font-text"
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
            <label htmlFor="Firstlastname" className=" mb-1 font-semibold">
              Primer Apellido
            </label>
            <input
              type="text"
              className="focus:outline-none bg-transparent border-b-2 border-white text-base font-text"
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
          <label htmlFor="Email" className="mb-1 font-semibold">
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

        <div className="input-box animation flex flex-col w-full">
          <label htmlFor="Cedula" className="mb-1 font-semibold">
            Cedula
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

        <div className="input-box animation flex flex-col">
          <label htmlFor="Username" className="mt-2 mb-1 font-semibold">
            Nombre de usuario
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
            <span className="text-sm text-white ">
              {errors.Username.message}
            </span>
          )}
        </div>

        <div className="input-box animation flex flex-col">
          <label htmlFor="Town" className="mt-2 mb-1 font-semibold">
            Municipio
          </label>
          <select
            name=""
            id=""
            {...register("Town")}
            className="text-white rounded-md bg-transparent text-base font-text focus:outline-none border-b-2"
          >
            <option value="" disabled className="bg-dark_theme">
              Municipio
            </option>
            <option value="rg" className="bg-dark_theme">
              Rionegro
            </option>
            <option value="ml" className="bg-dark_theme">
              Marinilla
            </option>
            <option value="gr" className="bg-dark_theme">
              Guarne
            </option>
            <option value="md" className="bg-dark_theme">
              Medellin
            </option>
          </select>
        </div>

        <div className="input-box animation flex flex-col">
          <label htmlFor="Password" className="mt-2 mb-1 font-semibold">
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
          <label htmlFor="ConfirmPassword" className="mt-2 mb-1 font-semibold">
            Confirma contraseña
          </label>
          <input
            type="text"
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

        <div className="flex justify-center items-center w-full bg-slate-400 mt-12 ">
          <button className="text-white mt-2 ">Registro</button>
        </div>
      </form>
    </div>
  );
}
