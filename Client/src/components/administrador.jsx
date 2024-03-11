import { Layaout } from "./templates/Layaout"

import { FirtsTitle } from "./titles/Title.jsx"

export function Administrador({ user }) {
    return(
        <Layaout>
            {/*Titulo administrador*/}
            <FirtsTitle
                title="Administrador"
                descripcion={`Buenos dias Señor ${user}`} 
            />
            <section>
                <div>
                    <p>
                        Estamos ingresando al apartado del administrador. <br/>
                        Tenga en cuenta los parametros de los elementos con cuidado y actue con responsabilidad
                    </p>
                </div>
            </section>
        </Layaout>
    )
}

