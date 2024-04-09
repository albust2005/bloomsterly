import PropTypes from 'prop-types'

export function TitleAE({title, descripcion}) {
    return (
        <section className="flex flex-col items-center text-center w-full">
            <h1 className="flex justify-center text-white text-6xl celular:text-7xl
            sm:text-9xl md:text-[160px] lg:text-[19vh] xl:text-[16vh] dark:text-second_color_lt z-0 mb-[3vh]">
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