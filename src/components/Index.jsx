
import "../App.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { PolaroidCard } from "./PolaroidCard";

import { PropTypes } from "prop-types"

function Titles({ title, subTitle }) {
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
        md:text-5xl ml-8 md:ml-16 lg:ml-20 -mt-5 md:-mt-5 lg:-mt-6 dark:text-color_font_light">
        {subTitle}
      </h2>
    </>
  )
}

Titles.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
}

export function LandingPage() {

  return (
    <main className="bg-dark_theme flex flex-col gap-20 dark:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
    from-[#F5E1CE] via-[#EEDAC7] to-[#83786D]">
      <Header></Header>
      {/* BloomSterly */}
      <section className="">
        <h1 className="flex justify-center font-bloomsterly text-white text-7xl 
        sm:text-9xl md:text-[170px] lg:text-[210px] xl:text-[250px] dark:text-second_color_lt">
          BloomSterly
        </h1>
      </section>


      {/*Seccion Nosotros*/}

      <div className="flex flex-col gap-16 xl:gap-32">

        <section className="h-full xl:flex gap-5 px-10 md:px-16 lg:px-24 2xl:px-64 mb-3">

          <article className="w-full xl:w-3/5 2xl:w-1/2">

            <Titles
              title='NOSOTROS'
              subTitle='¿Que hacemos?'
            />


            <p className="text-white w-full pt-6 text-1xl sm:text-2xl md:text-3xl lg-text-4xl
            dark:text-color_font_light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
              vero accusantium rem quas facilis, placeat modi, distinctio
              exercitationem ipsam necessitatibus vitae enim assumenda,
              asperiores optio dignissimos. Dolorum recusandae porro reiciendis.
            </p>

          </article>

          <article className="flex xl:w-2/5 2xl:w-1/2 justify-center">
            <img
              className='aspect-auto w-full object-cover xl:scale-115'
              src="../src/assets/img/nosotros_imagen_mesas.png"
              alt="" />
          </article>

        </section>


        {/*Seccion Conoce*/}
        <section className="flex flex-col gap-5 px-10 md:px-16 lg:px-24 2xl:px-64 mb-3">

          <article>

            <Titles
              title='CONOCE'
              subTitle='Nuestros servicios'
            />

          </article>

          <article className="container mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <PolaroidCard
              url={"../src/assets/img/musica_servicio.jpg"}
              nombre={"Musica"}
              descripcion={
                "Ofrecemos distintos estilos de: DJ, musica y animacion para tu evento"
              }
            />
            <PolaroidCard
              url={"../src/assets/img/decoracion_servicio.jpg"}
              nombre={"Decoracion"}
              descripcion={
                "Ofrecemos distintos estilos en el momento de la decoracion de tu evento"
              }
            />
            <PolaroidCard
              url={"../src/assets/img/comida_servicio.jpg"}
              nombre={"Alimentacion"}
              descripcion={"Ofrecemos distintos de comida para tu evento"}
            />
              <PolaroidCard
              url={"../src/assets/img/comida_servicio.jpg"}
              nombre={"Cocteleria"}
              descripcion={"Ofrecemos distintos servicios de cocteleria para tu evento"}
            />
          </article>

        </section>
        <Footer></Footer>
      </div>
    </main>
  );
}