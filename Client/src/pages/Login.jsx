
//import "./Login.css";
import { useState } from "react";

import { InicioSesion } from "./inicio_sesion";
import { Registro } from "./registro";

export function Login() {

  const [form, setForm] = useState("Iniciar") //[1valor=>estado actual, 2do es el que hacer el cambio]

 
  
  const formRender = form === "Iniciar" ? <InicioSesion></InicioSesion> : <Registro></Registro>


    const Inicios = () => {
      setForm(prevform => prevform === "Iniciar" ? "Iniciar" : "Iniciar")
    }

    const Registros = () => {
      setForm(prevform => prevform === "Registro" ? "Registro" : "Registro")
    }
  

  return (
    <div className=" h-screen flex justify-center items-center bg-red-400 font-title italic text-xl">
      <div className=" bg-dark_theme w-1/2 h-[97%] p-8 ">
        <nav className="bg-[#6a33c2]">
          <ul className="flex justify-center content-center cursor-pointer p-2">
            <li className="cursor-pointer bg-[#8549e6] px-5 py-2 w-1/2 flex justify-center" onClick={Inicios}>Iniciar sesión</li>
            <li className="cursor-pointer bg-[#8549e6] px-7 py-2 w-1/2 flex justify-center" onClick={Registros}>Registro</li>
          </ul>
        </nav>

        {formRender}
      </div>


      
      <div className="bg-yellow-200 w-1/2 h-[97%] p-6"> {/*imagen */}
        <img src="../src/assets/img/imagenlogin.webp" alt=""
         className=" w-full h-full  object-cover "/>
      </div>
    </div>
  );
}
