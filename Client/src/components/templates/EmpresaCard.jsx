import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export function EmpresaCards({ nombre, direccion, telefono, instagram, facebook, logo }) {

    return (
        <Link to={`/`} className="flex flex-col bg-empresa_card rounded-lg min-w-full w-full sm:min-h-[300px]
        dark:bg-second_color_lt dark:text-white">
            <article className="w-full h-full">
                <img src={logo} alt="imagen_empresa" className="w-full h-full aspect-auto object-cover rounded-t-lg bg-black min-h-36 max-h-36" />
            </article>
            <article className="flex flex-col w-full justify-center gap-5 px-5 pt-2 pb-5">
                <h1 className="font-title text-3xl italic font-black">
                    {nombre}
                </h1>
                <div className=''>
                    <div>
                        <p className="font-subTitle">
                            Direccion: {direccion}
                        </p>
                        <p className="font-subTitle">
                            telefono : {telefono}
                        </p>
                    </div>
                    <div>
                        <p className="font-subTitle">
                           instagram: {instagram}
                        </p>
                        <p className="font-subTitle">
                            facebook : {facebook}
                        </p>
                    </div>
                </div>
            </article>
        </Link>
    )
}

EmpresaCards.propTypes = {
    img: PropTypes.string,
    uuid: PropTypes.string,
    empresa: PropTypes.string,
    municipio: PropTypes.string,
    direccion: PropTypes.string,
    telefono: PropTypes.string,
}