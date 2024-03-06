import { Header } from "./Header";
import { Footer } from "./Footer"

import PropTypes from 'prop-types'

export function Layaout({ children }) {

    return (
        <main 
        className="bg-dark_theme flex flex-col gap-20 xl:gap-36 dark:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
        from-[#F5E1CE] via-[#EEDAC7] to-[#83786D] min-h-full min-w-full absolute"
        >
            <Header></Header>
            {children}
            <Footer></Footer>   
        </main>
    )

}

Layaout.propTypes = {
    children: PropTypes.node
}

