import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export function PolaroidCard({url, nombre, descripcion}) {

    return (
        <Link to={`/servicios/${nombre}`} className='flex flex-col w-full sm:min-h-[300px] md:min-h-[550px]  bg-white dark:bg-[#f8ebdf] p-4 celular:p-5 rounded-md gap-3 hover:scale-105 transition-all 
            '>
            <img 
                className='w-full h-72 celular:h-96 object-cover grayscale hover:grayscale-0 rounded-md transition-all duration-200 '
                src={url}
                alt='imagen servicio'
            ></img>
            <h1 
            className='font-title text-2xl italic text-dark_theme font-bold dark:text-second_color_lt'
            >
                {nombre}
            </h1>

            <p className='font-subTitle'>{descripcion}</p>
        </Link>    
    )
} 

//Polaroid Cards **Falta definir medidas

PolaroidCard.propTypes = {
    url: PropTypes.string,
    nombre: PropTypes.string,
    descripcion: PropTypes.string,
    uuid: PropTypes.string,
}