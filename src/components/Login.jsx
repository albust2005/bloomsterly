import { Ingresar } from "./inicio_sesion";
import { Registrar } from "./registro";

export function Login() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center h-full absolute w-full 
            bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
          from-[#451693] from-40% via-[#370d7d] via-60% to-[#190042] 
            to-90% ">
            <div className="flex bg-dark_theme w-1/2 
            sm:max-w-xs xl:max-w-xl h-1/3 md:h-2/3 lg:3/4 rounded-xl text-white justify-center items-center">
                <Ingresar></Ingresar>
            </div>
            <div className="flex bg-color_inicio_sesion w-1/2 border-2 
            sm:max-w-xs xl:max-w-xl h-1/3 md:h-2/3 lg:3/4 rounded-xl text-color_font_light justify-center items-center" >
                <Registrar></Registrar>
            </div>
        </div>
    )
}