import PropTypes from 'prop-types'

export function TitleAE({title, descripcion}) {
    return (
        <section className="flex flex-col items-center text-center w-full z-10">
            <h1 className="flex font-bloomsterly justify-center text-white text-6xl celular:text-7xl
            sm:text-9xl md:text-[160px] lg:text-[180px] xl:text-[190px] dark:text-second_color_lt z-10 mb-[3vh]">
                {title}
            </h1>
            <p className="font-subTitle text-sm md:text-xl lg:text-3xl text-white dark:text-black text-balance">
                {descripcion}
            </p>
        </section>

    )
}

TitleAE.propTypes = {
    title: PropTypes.string,
    descripcion: PropTypes.string,
}