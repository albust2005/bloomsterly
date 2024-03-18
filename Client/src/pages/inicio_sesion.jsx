import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";

export function InicioSesion({ChangeActive}) {
  

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  return (
    <div className="form-box Login left-0 px-[40px]">
      <h2 className="animation font-semibold">Inicio de Sesión</h2>
      {/*FORM inicio sesion*/}
      <form action="" className="">
        <div className="input-box animation">
          <input type="text" 
          className="" 
          required 
          {errors.Username && <span className="text-sm">{errors.Username.message}</span>
          />
          <label htmlFor="Username" className="">
            Username
          </label>
          <FontAwesomeIcon
            icon={faUser}
            style={{ color: "FFFFEF" }}
            className="absolute top-[50%] right-0 translate-y-[-50%] "
          />
        </div>

        <div className="input-box animation">
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

        <div className="input-box animation ">
          <button type="submit" className="btn">
            Ingresar
          </button>
        </div>

        <div className="regi-link animation ">
          <p>
            NO tienes una cuenta?
            <a
              href="#"
              className="SignUpLink dark:hover:bg-light_theme dark:hover:text-second_color_lt"
              onClick={ChangeActive}
            >
              Registrate
            </a>
          </p>
        </div>

        <div className="regi-link animation ">
          <p>
            Eres empresario o emprendedor?
            <a
              href="#"
              className="SignUpLink  dark:hover:bg-light_theme dark:hover:text-second_color_lt"
            >
              Ingresa aquí
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}


InicioSesion.propTypes = {
    ChangeActive: PropTypes.func
}