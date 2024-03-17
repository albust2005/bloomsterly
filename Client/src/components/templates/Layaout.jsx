import PropTypes from 'prop-types'

export function Layaout({ children }) {

    return (
        <main
            className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
        from-[#451693] from-40% via-[#370d7d] via-60% to-[#190042] 
        to-90%  dark:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
        dark:from-[#ffffff] dark:via-[#ffffec] dark:to-[#ffffd2] 
        flex flex-col min-h-screen gap-16 px-5 md:px-16 lg:px-24 2xl:px-64"
        >
            {children}
        </main>
    )

}

Layaout.propTypes = {
    children: PropTypes.node
}

