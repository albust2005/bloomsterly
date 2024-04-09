import { useForm } from "react-hook-form";
export const FormAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },

  } = useForm();
     const onSubmit = handleSubmit((data) => {
       console.log(data);
       alert("enviando datos");

     });
  return (
    <>
      <div className="flex justify-center  flex-col gap-3 mt-3 w-full relative  p-5 rounded-lg">
        <form
          className="w-full  flex flex-col gap-2 text-white dark:text-second_color_lt"
          onSubmit={onSubmit}
        >
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
                message: "Este campo debe contar con al menos 4 carácteres",
              },
              maxLength: {
                value: 18,
                message: "Este campo tiene máximo para 18 carécteres",
              },
            })}
          />
          {errors.nombre && <span>{errors.nombre.message}</span>}
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
              }
            })}
          />
          {errors.apellido && <span>{errors.apellido.message}</span>}
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
          {errors.Email && (
            <span className="text-sm">{errors.Email.message}</span>
          )}
          <label htmlFor="password" className="font-bold">
            Contraseña
          </label>
          <input
            type="password"
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
          {errors.password && (
            <span className="text-sm">{errors.password.message}</span>
          )}
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
            <option value="rg" className="bg-dark_theme dark:bg-light_theme">
              Rionegro
            </option>
            <option value="ml" className="bg-dark_theme dark:bg-light_theme">
              Marinilla
            </option>
            <option value="gr" className="bg-dark_theme dark:bg-light_theme">
              Guarne
            </option>
            <option value="md" className="bg-dark_theme dark:bg-light_theme">
              Medellín
            </option>
          </select>
          <button
            type="submit"
            className="text-white mt-2 bg-color_switch_theme_dark w-full p-1 rounded-md hover:bg-[#8e5ee0]
             dark:bg-[#eb2651] dark:hover:bg-[#d61540]"
          >
            Registro
          </button>
        </form>
      </div>
    </>
  );
};
