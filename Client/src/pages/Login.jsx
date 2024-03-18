//import { Ingresar } from "./inicio_sesion";
//import { Registrar } from "./registro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";
import { useState } from "react";



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
          <div className="form-box Login left-0 px-[40px]">
            <h2 className="animation font-semibold">Inicio de Sesión</h2>

            {/*FORM inicio sesion*/}

            <form action="" className="">

              <div className="input-box animation">
                <input type="text" className="" required />
                <label htmlFor="Username" className="">
                  Username
                </label>
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ color: "FFFFEF" }}
                  className="absolute top-[50%] right-0 translate-y-[-50%] "
                />
              </div>

              <div className="input-box animation" >
                <input type="text" className="" required />
                <label htmlFor="password" className="">
                  Password
                </label>
                <FontAwesomeIcon
                  icon={faLock}
                  style={{ color: "FFFFEF" }}
                  className="absolute top-[50%] right-0 translate-y-[-50%]"
                />
              </div>

              <div className="input-box animation " >
                <button type="submit" className="btn">
                  Login
                </button>
              </div>

              <div className="regi-link animation " >
                <p>
                  NO tienes una cuenta?
                  <a href="#" className="SignUpLink dark:hover:bg-light_theme dark:hover:text-second_color_lt" onClick={ChangeActive}>
                    Registrate
                  </a>
                </p>
              </div>

              <div className="regi-link animation " >
                <p>
                  Eres empresario o emprendedor?
                  <a href="#" className="SignUpLink  dark:hover:bg-light_theme dark:hover:text-second_color_lt" >
                    Ingresa aquí
                  </a>
                </p>
              </div>

            </form>
          </div>

          <div className="info-content Login " >
            <h2 className="animation">BIENVENIDO DE VUELTA!</h2>
            <p className="animation" >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim,
              ipsam non?
            </p>
          </div>

          {/*FORM registro*/}

          <div className="form-box Register" >
            <h2 className="animation font-semibold" >Registro</h2>

            <form action="" className="">
            <div className="input-box animation " >
                <input type="text" className="" required />
                <label htmlFor="email" className="">
                  Correo electronico
                </label>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "FFFFEF" }}
                  className="absolute top-[50%] right-0 translate-y-[-50%] "
                />
              </div>

              <div className="input-box animation ">
                <input type="text" className="" required />
                <label htmlFor="Username" className="">
                  Nombre de usuario
                </label>
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ color: "FFFFEF" }}
                  className="absolute top-[50%] right-0 translate-y-[-50%] "
                />
              </div>

              <div className="input-box animation " >
                <input type="text" className="" required />
                <label htmlFor="password" className="">
                  Contraseña
                </label>
                <FontAwesomeIcon
                  icon={faLock}
                  style={{ color: "FFFFEF" }}
                  className="absolute top-[50%] right-0 translate-y-[-50%]"
                />
              </div>

              <div className="input-box animation " >
                <input type="text" className="" required />
                <label htmlFor="confirm-password" className="">
                  Confirma tu contraseña
                </label>
                <FontAwesomeIcon
                  icon={faLock}
                  style={{ color: "FFFFEF" }}
                  className="absolute top-[50%] right-0 translate-y-[-50%]"
                />
              </div>

              <div className="animation ">
                <button type="submit" className="btn">
                  Register
                </button>
              </div>

              <div className="regi-link animation " >
                <p>
                  Dont have an account ?
                  <a href="#" className="SignInLink  dark:hover:bg-light_theme dark:hover:text-second_color_lt" onClick={ChangeActive}>
                    Sign In
                  </a>
                </p>
              </div>
            </form>
          </div>

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
