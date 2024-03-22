//import "./Login.css";
import { useState } from "react";

import { InicioSesion } from "./inicio_sesion";
import { Registro } from "./registro";

import { Changeimgs } from "../components/hooks/useChangeimgs";

export function Login() {
  const [form, setForm] = useState("Iniciar"); //[1valor=>estado actual, 2do es el que hacer el cambio]

  const formRender =
    form === "Iniciar" ? <InicioSesion></InicioSesion> : <Registro></Registro>;

  const Inicios = () => {
    setForm((prevform) => (prevform === "Iniciar" ? "Iniciar" : "Iniciar"));
  };

  const Registros = () => {
    setForm((prevform) => (prevform === "Registro" ? "Registro" : "Registro"));
  };

  return (
    <div className=" h-screen flex justify-center items-center  font-title italic text-xl minicel:flex-col sm:flex-row mt-3">
      <div className=" bg-dark_theme w-full sm:w-2/4 lg:w-1/2 h-full p-8 ">
        <nav className="bg-[#6a33c2] w-full ">
          <ul className="flex justify-center content-center cursor-pointer p-2  w-full ">
            <li
              className="cursor-pointer bg-[#8549e6] px-5 py-2 w-1/2 flex justify-center minicel:text-xs celular:text-sm sm:text-base md:text-xl"
              onClick={Inicios}
            >
              Iniciar sesión
            </li>
            <li
              className="cursor-pointer bg-[#8549e6] px-7 py-2 w-1/2 flex justify-center minicel:text-xs celular:text-sm sm:text-base md:text-xl"
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
