import PropTypes from 'prop-types'

import { Layaout } from "../../components/templates/Layaout.jsx"
import { FirtsTitle } from "../../components/titles/Title.jsx"

export function Administrador({ user }) {
    return(
        <section>
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
        </section>
    )
}

Administrador.propTypes = {
    user: PropTypes.string,
}
