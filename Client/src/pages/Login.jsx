
import "./Login.css";
import { useState } from "react";

import { InicioSesion } from "./inicio_sesion";
import { Registro } from "./registro";

export function Login() {

  const [active, setActive] = useState("") //[1valor=>estado actual, 2do es el que hacer el cambio]

  const ChangeActive = () => {
    setActive(
      active === "active" ? "" : "active" 
    )
  }

  return (
    <div className="bodyy font-title">
      <div className={`container ${active} w-full dark:bg-second_color_lt`} >
        <div className="curved-shape dark:bg-light_theme"></div>
        <div className="curved-shape2 dark:bg-second_color_lt"></div>
          
          <InicioSesion ChangeActive={ChangeActive}></InicioSesion>

          <div className="info-content Login " >
            <h2 className="animation">BIENVENIDO DE VUELTA!</h2>
            <p className="animation" >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim,
              ipsam non?
            </p>
          </div>

          {/*FORM registro*/}

          <Registro ChangeActive={ChangeActive}></Registro>

          <div className="info-content Register" >
            <h2 className="animation ">BIENVENIDO DE VUELTA!</h2>
            <p className="animation ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim,
              ipsam non?
            </p>
          </div>

      </div>
    </div>
  );
}
