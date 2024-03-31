import PropTypes from 'prop-types'

export function TitleAE({title, descripcion}) {
    return (
        <section className="flex flex-col items-center text-center w-full">
            <h1 className="flex justify-center font-bloomsterly text-white text-6xl celular:text-7xl
            sm:text-9xl md:text-[160px] lg:text-[210px] xl:text-[180px] dark:text-second_color_lt z-0">
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