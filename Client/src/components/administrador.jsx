import { Layaout } from "./templates/Layaout"

import { FirtsTitle } from "./titles/FirtsTitle"

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
                        Tenga en cuenta los parámetros de los elementos con cuidado y actúe con responsabilidad. No tengo inspiración
                    </p>
                </div>
            </section>
        </Layaout>
    )
}

