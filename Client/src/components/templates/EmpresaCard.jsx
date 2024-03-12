import PropTypes from 'prop-types'  
import { Link, useParams } from 'react-router-dom'

export function EmpresaCards({ img, empresa, municipio, direccion,  uuid }) {
    
    const {servicioName} = useParams()
    
    return (
        <Link to={`/servicios/${servicioName}/${uuid}`} className="flex bg-empresa_card gap-5 rounded-lg  flex-col max-h-96 min-w-96 mx-4 
        dark:bg-second_color_lt dark:text-white">
            <article className="w-full h-full ">
                <img src={img} alt="imagen_empresa" className="w-full h-full aspect-auto object-cover rounded-t-lg bg-black min-h-36 max-h-36"/>
            </article>
            <article className="flex flex-col w-3/4 justify-center gap-5  px-5 pt-2 pb-5">
                <h1 className="font-title text-3xl italic font-black ">
                    {empresa}
                </h1>
                <p className="font-subTitle">
                    Municipio: {municipio}
                </p>
                <p className="font-subTitle">
                    Tipo : {direccion}
                </p>
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