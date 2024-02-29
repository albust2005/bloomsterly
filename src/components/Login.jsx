import { Ingresar } from "./inicio_sesion";
import { Registrar } from "./registro";

export function Login() {
    return (
        <div>
            <div>
                <Registrar></Registrar>
            </div>
            <div>
                <Ingresar></Ingresar>
            </div>
        </div>
    )
}