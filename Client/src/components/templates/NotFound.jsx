import PropTypes from 'prop-types';

export function NotFound ({razon}){
    return (
        <div className="w-full text-center col-span-3">
            <h1 className="font-subTitle text-white  dark:text-black text-xs celular:text-xl sm:text-3xl text-balance">No se encontraron {razon}</h1>
        </div>
    )
}

NotFound.propTypes = {
    razon: PropTypes.string
}