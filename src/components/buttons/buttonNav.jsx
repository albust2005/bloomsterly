import PropTypes from 'prop-types'

export function ButtonNav ({text}){
    return(
        <a href="#" 
        className="font-title italic text-white text-lg bg-transparent hover:bg-purple-900 px-3 py-1 rounded-lg hover:ease-in-out duration-300">
        {text}
        </a>
    )
}

//Validacion de props
ButtonNav.propTypes = {
    text: PropTypes.string
}



