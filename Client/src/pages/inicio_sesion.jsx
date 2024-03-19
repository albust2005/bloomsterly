import { useForm } from "react-hook-form";
// import PropTypes from "prop-types";




export function InicioSesion() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()


  console.log(errors)

  const onSublime = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <div className="form-box flex justify-center items-center flex-col gap-4 mt-6 w-full bg-transparent relative text-white ">
      <h1 className="font-semibold">Inicio de Sesión</h1>

      <form action="" className="w-full " onSubmit={onSublime} >
        <div className="input-box animation flex flex-col ">
          <label htmlFor="Username" className="mb-1 font-semibold">
            Username
          </label>
           <input type="text" 
           className="focus:outline-none bg-transparent border-b-2 border-white text-base font-text" 
          {...register("Username",{
            required: {
              value: true,
              message: "Escribe tu nombre de usuario"
            },
            
          })} />
          {errors.Username && <span className="text-sm">{errors.Username.message}</span>}
        </div>

        <div className="input-box animation flex flex-col">
          
          <label htmlFor="Password" className="mt-2 mb-1 font-semibold">
            Contraseña
          </label>
          <input type="text" 
          className="focus:outline-none bg-transparent border-b-2 border-white text-base font-text" 
          {...register("Password",{
            required: {
              value: true,
              message: "Escribe tu contraseña"
            }
          })} />
          {errors.Password && <span className="text-sm text-white">{errors.Password.message}</span>}
        </div>

        <div className="flex flex-col mt-3">
            <label htmlFor="Rol" className="font-semibold mb-1">Rol</label>
            <select name="Rol" id="" {...register("Rol")}
            className="focus:outline-none bg-transparent border-b-2 border-white text-base font-text">
              <option value="rol" disabled className="text-black">Rol</option>
              <option value="Cliente" className="text-black">Cliente</option>
              <option value="Administrador" className="text-black">Administrador</option>
            </select>
            <p className="flex justify-end mt-2 text-base">Se te olvido la contraseña?</p>
        </div>

        <div>
          <p className="flex justify-end mt-2 text-base">Tienes una empresa o emprendimiento?
          <a href="#" className="px-2 hover:bg-light_theme rounded-md">Entra aquí</a></p>
        </div>

        <div className="flex justify-center items-center w-full bg-slate-400 mt-5 ">
          <button className="text-white mt-2 ">
            Iniciar Sesión
          </button>
        </div>
      </form>
    </div>
  );
}

