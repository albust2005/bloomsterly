<<<<<<< HEAD
import { Layaout } from "./templates/Layaout"

import { FirtsTitle } from "./titles/FirtsTitle"
=======
import { FirtsTitle, Titles } from "../../components/titles/Title";
import { Layaout } from "../../components/templates/Layaout";
>>>>>>> 5d57c32bf460894f269381074648b786ce4eb918

export function Administrador({ user }) {
    return(
        <>
            {/*Titulo administrador*/}
            <FirtsTitle
                title="Administrador"
                descripcion={`Buenos dias Señor ${user}`} 
            />
            <section>
                <div>
                    <p>
                        Estamos ingresando al apartado del administrador. <br/>
                        Tenga en cuenta los parámetros de los elementos con cuidado y actúe con responsabilidad. No tengo inspiración
                    </p>
                </div>
            </section>
        </>
    )
}

