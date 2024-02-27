import PropTypes from 'prop-types'

export function PolaroidCard({url, nombre, descripcion}) {
    return (
        <article className='flex flex-col w-full 2xl:h-[600px] bg-white p-5 rounded-md gap-1'>
            <img
                className='w-full h-96 border-2 object-cover'
                src={`${url}`}
                alt='imagen servicio'
            ></img>
            <h1 
            className='font-title text-2xl italic text-dark_theme font-bold'
            >
                {nombre}
            </h1>

            <p>{descripcion}</p>
        </article>
    )
} 

//Polaroid Cards **Falta definir medidas

PolaroidCard.propTypes = {
    url: PropTypes.string,
    nombre: PropTypes.string,
    descripcion: PropTypes.string,
}