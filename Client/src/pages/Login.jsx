//import { Ingresar } from "./inicio_sesion";
//import { Registrar } from "./registro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import '../App.css'

export function Login() {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    sign_up_btn.addEventListener("click", () => {
        container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
        container.classList.remove("sign-up-mode");
    });

    return (
        <div className="container"> {/*CONTAINER */}
            <div className="forms-container"> {/*FORMS CONTAINER*/}
                <div className="signin-signup"> {/*SIGN IN-UP*/}

                    {/*SIGN IN*/}

                    <form action="" className="sign-in-form"> {/*SIGN IN*/}
                        <h2 className="title">SIGN IN</h2>
                        <div className="input-field"> {/*INPUT USER*/}
                            <FontAwesomeIcon 
                            icon={faUser}
                            style={{ color: "#190042",}}
                            size="md" 
                            className="i"/>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="input-field"> {/*INPUT PASSWORD*/}
                            <FontAwesomeIcon 
                            icon={faLock}
                            style={{ color: "#190042",}}
                            size="md"
                            className="i"/>
                            <input type="password" placeholder="Password" className=""/>
                        </div>
                        <input type="submit" value="Login" className="btn-solid" /> {/*BTN SOLID*/}
                    </form>

                    {/*SIGN UP*/}

                    <form action="" className="sign-up-form"> {/*SIGN UP*/}
                        <h2 className="title">SIGN UP</h2>
                        <div className="input-field"> {/*INPUT USER*/}
                            <FontAwesomeIcon 
                            icon={faUser}
                            style={{ color: "#190042",}}
                            size="md"
                            className="i"/>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="input-field"> {/*INPUT EMAIL*/}
                            <FontAwesomeIcon 
                            icon={faEnvelope}
                            style={{ color: "#190042",}}
                            size="md" 
                            className="i"/>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="input-field"> {/*INPUT PASSWORD*/}
                            <FontAwesomeIcon 
                            icon={faLock}
                            style={{ color: "#190042",}}
                            size="md" 
                            className="i"/>
                            <input type="password" placeholder="Password" />
                        </div>
                        <input type="submit" value="Sign Up" className="btn-solid" /> {/*BTN SOLID*/}
                    </form>
                </div>
            </div>
            
            <div className="panels-container"> {/*PANELS CONTAINER*/}
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here ?</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                            ex ratione. Aliquid!
                        </p>
                        <button className="btn transparent" id="sign-up-btn">
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
                        <button className="btn transparent" id="sign-in-btn">
                            Sign in
                        </button>
                    </div>
                    <img src="" className="image" alt="" />
                </div>
            </div>
        </div>
    )
}