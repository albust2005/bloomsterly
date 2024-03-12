import PropTypes from 'prop-types'

export function FirtsTitle({title, descripcion}) {
    return (
        <section className="flex flex-col items-center text-center w-full px-6">
            <h1 className="flex justify-center font-bloomsterly text-white text-6xl celular:text-7xl
            sm:text-9xl md:text-[160px] lg:text-[210px] xl:text-[250px] dark:text-second_color_lt ">
                {title}
            </h1>
            <p className="font-subTitle text-sm md:text-xl lg:text-3xl px-5 md:px-16 lg:px-24 2xl:px-64 text-white dark:text-black ">
                {descripcion}
            </p>
        </section>

    )
}

export function Titles({ title, subTitle }) {
    return (
      <>
        <h1
          className="font-subTitle font-extrabold italic text-color_font_dark text-5xl sm:text-6xl md:text-8xl lg:text-7xl xl:text-8xl
          animate-pulse hover:text-yellow-300 cursor-pointer
          transition ease-in-out duration-300 dark:text-second_color_lt dark:hover:text-color_font_light"
        >
          {title}
        </h1>
  
        <h2 className="font-text text-white text-2xl 
          md:text-5xl ml-8 md:ml-16 lg:ml-20 -mt-5 md:-mt-5 lg:-mt-6 dark:text-black">
          {subTitle}
        </h2>
      </>
    )
  }

  FirtsTitle.propTypes = {
    title: PropTypes.string,
    descripcion: PropTypes.string,
}

  Titles.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
}