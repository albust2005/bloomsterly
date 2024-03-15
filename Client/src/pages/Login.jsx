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
    <div className="bodyy ">
      <div className={`container ${active} w-[750px]`}>
        <div className="curved-shape "></div>
        <div className="curved-shape2"></div>
          <div className="form-box Login left-0 px-[40px]">
            <h2 className="animation font-title transition delay-75">Login</h2>

            {/*FORM inicio sesion*/}

            <form action="" className="">

              <div className="input-box animation transition delay-100" >
                <input type="text" className="" required />
                <label htmlFor="Username" className="">
                  Username
                </label>
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ color: "190042" }}
                  className="absolute top-[50%] right-0 translate-y-[-50%] "
                />
              </div>

              <div className="input-box animation transition delay-150">
                <input type="text" className="" required />
                <label htmlFor="password" className="">
                  Password
                </label>
                <FontAwesomeIcon
                  icon={faLock}
                  style={{ color: "190042" }}
                  className="absolute top-[50%] right-0 translate-y-[-50%]"
                />
              </div>

              <div className="input-box animation transition delay-200" >
                <button type="submit" className="btn">
                  Login
                </button>
              </div>

              <div className="regi-link animation transition delay-300" >
                <p>
                  Dont have an account ?
                  <a href="#" className="SignUpLink" onClick={ChangeActive}>
                    Sign Up
                  </a>
                </p>
              </div>

              
            </form>
          </div>

          <div className="info-content Login right-0 text-right pr-[40px] pb-[60px] pl-[150px] 
           translate-x-0 ">
            <h2 className="animation">BIENVENIDO DE VUELTA!</h2>
            <p className="animation" >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim,
              ipsam non?
            </p>
          </div>

          {/*FORM */}

          <div className="form-box Register transition delay-100">
            <h2 className="animation transition ease delay-[1.3s]">Register</h2>

            <form action="" className="">
            <div className="input-box animation transition delay-[1.4s]">
                <input type="text" className="" required />
                <label htmlFor="email" className="">
                  Correo electronico
                </label>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "190042" }}
                  className="absolute top-[50%] right-0 translate-y-[-50%] "
                />
              </div>

              <div className="input-box animation transition delay-[1.5s]">
                <input type="text" className="" required />
                <label htmlFor="Username" className="">
                  Username
                </label>
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ color: "190042" }}
                  className="absolute top-[50%] right-0 translate-y-[-50%] "
                />
              </div>

              <div className="input-box animation transition delay-[1.6s]">
                <input type="text" className="" required />
                <label htmlFor="password" className="">
                  Password
                </label>
                <FontAwesomeIcon
                  icon={faLock}
                  style={{ color: "190042" }}
                  className="absolute top-[50%] right-0 translate-y-[-50%]"
                />
              </div>

              <div className="animation transition delay-[1.7s]">
                <button type="submit" className="btn">
                  Register
                </button>
              </div>

              <div className="regi-link animation transition delay-[1.8s]">
                <p>
                  Dont have an account ?
                  <a href="#" className="SignInLink" onClick={ChangeActive}>
                    Sign In
                  </a>
                </p>
              </div>
            </form>
          </div>

          <div className="info-content Register ">
            <h2 className="animation">BIENVENIDO DE VUELTA!</h2>
            <p className="animation">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim,
              ipsam non?
            </p>
          </div>

      </div>
    </div>
  );
}
