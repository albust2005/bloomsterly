import { useForm } from "react-hook-form";

export function Registro() {

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
    <div className="form-box flex justify-center items-center flex-col gap-4 mt-6 w-full bg-yellow-400 relative  ">
      <h1 className="font-semibold">Registro</h1>

      <form action="" className="w-full " onSubmit={onSublime} >
        <div className="input-box animation flex flex-col ">
          <label htmlFor="Username" className="mb-1 font-semibold">
            Username
          </label>
           <input type="text" 
           className="focus:outline-none bg-transparent border-b-2 border-black " 
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
          className="focus:outline-none bg-transparent border-b-2 border-black" 
          {...register("Password",{
            required: {
              value: true,
              message: "Escribe tu contraseña"
            }
          })} />
          {errors.Password && <span className="text-sm text-black">{errors.Password.message}</span>}
        </div>

        <div className="flex justify-center items-center w-full bg-slate-400 mt-12 ">
          <button className="text-white mt-2 ">
            Iniciar Sesión
          </button>
        </div>
      </form>
    </div>
  );
}

