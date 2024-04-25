import PropTypes from 'prop-types';

export function NotFound ({razon}){
    return (
        <div className="w-full text-center col-span-3 z-10">
            <h1 className=" text-white  dark:text-black text-xs celular:text-xl sm:text-3xl text-balance
            font-text">
                No se encontraron {razon}
            </h1>
            <div className='w-full flex justify-center '>
                <img src="/src/assets/img/notFound.webp" alt="" className='w-72'/>
            </div>
        </div>
    )
}

NotFound.propTypes = {
    razon: PropTypes.string
}