import PropTypes from 'prop-types'

export function TitleSubCategoria({title, descripcion, subtitle}) {
    return (
        <section className="flex flex-col items-center text-center w-full">
            <h1 className="font-bloomsterly flex justify-center text-white text-6xl celular:text-7xl
            sm:text-9xl md:text-[160px] lg:text-[200px]  dark:text-second_color_lt z-0 mb-[3vh]">
                {title}
            </h1>
            <strong className='flex text-center text-white font-title text-2xl celular:text-3xl
            sm:text-4xl md:text-5xl dark:text-second_color_lt '>
                {subtitle}
            </strong>
            <p className="font-subTitle text-sm md:text-xl lg:text-3xl text-white dark:text-black text-balance">
                {descripcion}
            </p>
        </section>

    )
}

TitleSubCategoria.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    descripcion: PropTypes.string,
}