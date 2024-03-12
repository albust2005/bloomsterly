//import { Ingresar } from "./inicio_sesion";
//import { Registrar } from "./registro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

export function Login() {
  const changePanel = () => {
    const container = document.querySelector(".container");
    container.classList.add("sign-up-mode");
    console.log("cambio")
  };

  const changePanel2 = () => {
    const container = document.querySelector(".container");
    container.classList.remove("sign-up-mode");
    console.log("cambio")
  };

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
                <FontAwesomeIcon 
                icon={faUser}
                style={{color: "#190042"}}
                />
                <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
                <FontAwesomeIcon 
                icon={faLock}
                style={{color: "190042"}}
                />
                <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
          </form>


          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
                <FontAwesomeIcon 
                icon={faUser}
                style={{color: "#190042"}}
                />
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
                <FontAwesomeIcon 
                icon={faEnvelope}
                style={{color: "#190042"}}
                />
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
                <FontAwesomeIcon 
                icon={faLock}
                style={{color: "#190042"}}
                />
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" id="sign-up-btn" onClick={changePanel}>
              Sign up
            </button>
          </div>
          <img src="" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" id="sign-in-btn" onClick={changePanel2}>
              Sign in
            </button>
          </div>
          <img src="" className="image" alt="" />
        </div>
      </div>
    </div>
  );
}
