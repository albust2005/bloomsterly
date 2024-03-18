import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";

export function Registro({ChangeActive}) {

    

  return (
    <div className="form-box Register">
      <h2 className="animation font-semibold">Registro</h2>

      <form action="" className="">
        <div className="input-box animation ">
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

        <div className="input-box animation ">
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

        <div className="input-box animation ">
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

        <div className="regi-link animation ">
          <p>
            Tienes una cuenta?
            <a
              href="#"
              className="SignInLink  dark:hover:bg-light_theme dark:hover:text-second_color_lt"
              onClick={ChangeActive}
            >
              Inicia Sesión
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

Registro.propTypes = {
    ChangeActive: PropTypes.func
}