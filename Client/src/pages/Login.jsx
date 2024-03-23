//import "./Login.css";
import { useState } from "react";

import { InicioSesion } from "./inicio_sesion";
import { Registro } from "./registro";

import { Changeimgs } from "../components/hooks/useChangeimgs";

export function Login() {
  const [form, setForm] = useState("Iniciar"); //[1valor=>estado actual, 2do es el que hacer el cambio]
  const [inicioColor, setInicioColor] = useState("bg-[#8549e6]");
  const [registerColor, setRegisterColor] = useState("bg-transparent");

  const formRender =
    form === "Iniciar" ? <InicioSesion></InicioSesion> : <Registro></Registro>;

  const Inicios = () => {
    setForm((prevform) => (prevform === "Iniciar" ? "Iniciar" : "Iniciar"));
    setInicioColor("bg-[#8549e6]");
    setRegisterColor("bg-transparent");
  };

  const Registros = () => {
    setForm((prevform) => (prevform === "Registro" ? "Registro" : "Registro"));
    setRegisterColor("bg-[#8549e6]");
    setInicioColor("bg-transparent");
  };

  return (
    <div className=" h-screen flex justify-center items-center  font-title italic text-xl minicel:flex-col sm:flex-row mt-3">
      <div className=" bg-dark_theme w-full sm:w-2/4 h-full p-8 dark:bg-second_color_lt">
        <nav className="bg-[#6a33c2] w-full dark:bg-rose-600">
          <ul className="flex justify-center content-center cursor-pointer p-2  w-full ">
            <li
              className={`cursor-pointer ${inicioColor} px-5 py-2 w-1/2 flex justify-center minicel:text-xs celular:text-sm sm:text-base md:text-xl hover:bg-[#8549e6]`}
              onClick={Inicios}
            >
              Iniciar sesión
            </li>
            <li
              className={`cursor-pointer ${registerColor} px-7 py-2 w-1/2 flex justify-center minicel:text-xs celular:text-sm sm:text-base md:text-xl hover:bg-[#8549e6]`}
              onClick={Registros}
            >
              Registro
            </li>
          </ul>
        </nav>

        {formRender}
      </div>

      <div className="bg-white w-full sm:w-2/4 lg:w-1/2 h-full p-8">
        {" "}
        {/*imagen */}
        <Changeimgs></Changeimgs>
      </div>
    </div>
  );
}
