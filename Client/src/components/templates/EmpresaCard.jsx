import PropTypes from 'prop-types'  
import { Link, useParams } from 'react-router-dom'

export function EmpresaCards({ img, empresa, municipio, direccion, telefono, uuid }) {
    
    const {servicioName} = useParams()
    
    return (
        <Link to={`/servicios/${servicioName}/${uuid}`} className="flex bg-empresa_card gap-10 rounded-lg py-5 px-5 max-h-64">
            <article className="w-full h-full">
                <img src={img} alt="imagen_empresa" className="w-full h-full aspect-auto object-cover rounded-lg"/>
            </article>
            <article className="flex flex-col w-3/4 justify-center gap-5">
                <h1 className="font-title text-3xl italic font-black ">
                    {empresa}
                </h1>
                <p className="font-subTitle">
                    Municipio: {municipio}
                </p>
                <p className="font-subTitle">
                    Direccion: {direccion}
                </p>
                <p className="font-subTitle">
                    Telefono: {telefono}
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