import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export function ButtonNav ({text, href}){
    return(
        <Link 
        to={href} 
        className="font-title italic text-white text-lg bg-transparent 
        hover:bg-purple-900 px-5 py-5 md:py-1 rounded-lg hover:ease-in-out duration-300 z-10
        dark:text-second_color_lt hover:dark:bg-[#ebd1b8]">
        {text}
        </Link>
    )
}

//Validacion de props
ButtonNav.propTypes = {
    text: PropTypes.string,
    href: PropTypes.string
}



