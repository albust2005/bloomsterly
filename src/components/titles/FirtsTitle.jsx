
export function FirtsTitle({title, descripcion}) {
    return (
        <section className="flex flex-col items-center">
            <h1 className="flex justify-center font-bloomsterly text-white text-7xl 
            sm:text-9xl md:text-[170px] lg:text-[210px] xl:text-[250px] dark:text-second_color_lt">
                {title}
            </h1>
            <p className="font-text text-xl text-white dark:text-black">
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