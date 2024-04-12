//import "./Login.css";
import { useState } from "react";

import { InicioSesionEmpresa } from "./inicioSesionEmpresa";
import { RegistroEmpresa } from "./registroEmpresa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export function LoginEmpresa() {
  
  const [form, setForm] = useState("Iniciar"); //[1valor=>estado actual, 2do es el que hacer el cambio]
  const [inicioColor, setInicioColor] = useState("bg-[#FBFBDC]");
  const [registerColor, setRegisterColor] = useState("bg-transparent");

  const formRender =
    form === "Iniciar" ? <InicioSesionEmpresa></InicioSesionEmpresa> : <RegistroEmpresa></RegistroEmpresa>;

  const Inicios = () => {
    setForm((prevform) => (prevform === "Iniciar" ? "Iniciar" : "Iniciar"));
    setInicioColor("bg-[#FBFBDC]");
    setRegisterColor("bg-transparent");
  };

  const Registros = () => {
    setForm((prevform) => (prevform === "Registro" ? "Registro" : "Registro"));
    setRegisterColor("bg-[#FBFBDC]");
    setInicioColor("bg-transparent");
  };

  return (
    <div className=" h-screen flex justify-center items-center  font-title italic text-xl minicel:flex-col sm:flex-row mt-2 ">
      <div className=" bg-dark_theme w-[80%] sm:h-[70%] md:h-[95%]  p-8 dark:bg-second_color_lt relative">
        <div className="absolute top-[5px] left-[5px] p-1">
          <Link to="/">
          <FontAwesomeIcon 
            icon={faHouse}
            style={{color: "fff"}}/>
          </Link>
        </div>
        <nav className="bg-[#6a33c2] w-full dark:bg-rose-600 ">
          <ul className="flex justify-center content-center cursor-pointer p-2  w-full ">
            <li
              className={`cursor-pointer ${inicioColor} px-5 py-2 w-full flex justify-center minicel:text-sm celular:text-base md:text-xl hover:bg-[#FBFBDC]`}
              onClick={Inicios}
            >
              Iniciar sesión
            </li>
            <li
              className={`cursor-pointer ${registerColor} px-7 py-2 w-full flex justify-center minicel:text-sm celular:text-base  md:text-xl hover:bg-[#FBFBDC]`}
              onClick={Registros}
            >
              Registro
            </li>
          </ul>
        </nav>
        <div className='h-full'>
          {formRender}
        </div>
      </div>

    </div>
  );
}
