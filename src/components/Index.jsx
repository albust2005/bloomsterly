
import "../App.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
<<<<<<< HEAD

import { ThemeColor } from "./buttons/buttonThemeColor"
=======
>>>>>>> 5c43f2e (responsive desing)


import { PolaroidCard } from "./PolaroidCard";
import { Flores } from "./Flores";

export function LandingPage() {

  return (
<<<<<<< HEAD
    <main className="bg-gradient-radial from-[#664B93] via-[#432474] to-dark_theme flex flex-col gap-16 
    dark:bg-gradient-radial dark:from-light_theme dark:via-[#f7dabe dark:to-[#C0AB96]">
      <Header></Header>
      {/* BloomSterly */}
      <section className="">
        <h1 className="flex justify-center font-bloomsterly text-white text-7xl sm:text-8xl md:text-[170px] lg:text-[210px] xl:text-[250px]
        dark:text-color_font_light ">
=======
    <main className="bg-dark_theme flex flex-col gap-20">
      <Flores
        x='20'
        y='20'
        size='20'
        color='black'
      >
      </Flores>


      <Header></Header>
      {/* BloomSterly */}
      <section className="">
        <h1 className="flex justify-center font-bloomsterly text-white text-7xl sm:text-9xl md:text-[170px] lg:text-[210px] xl:text-[250px]">
>>>>>>> 5c43f2e (responsive desing)
          BloomSterly
        </h1>
      </section>


      {/*Seccion Nosotros*/}

      <div className="flex flex-col gap:12 lg:gap-32">

        <section className="h-full xl:flex gap-5 px-10 md:px-16 lg:px-24 2xl:px-64 mb-3">

          <article className="w-full xl:w-3/5 2xl:w-1/2">
<<<<<<< HEAD
            <h1 className="font-subTitle font-extrabold italic text-color_font_dark text-5xl md:text-8xl lg:text-9xl
            dark:text-second_color_lt animate-pulse hover:text-yellow-300 cursor-pointer
            transition-all">
              NOSOTROS
            </h1>
            <h2 className="font-text text-white text-2xl md:text-5xl lg:text-6xl ml-12 md:ml-16 lg:ml-20 -mt-5 md:-mt-7 lg:-mt-9 
            dark:text-color_font_light">
=======
            <h1 className="font-subTitle font-extrabold italic text-color_font_dark text-5xl md:text-6xl lg:text-6xl xl:text-8xl">
              NOSOTROS
            </h1>
            <h2 className="font-text text-white text-2xl md:text-5xl ml-8 md:ml-16 lg:ml-20 -mt-5 md:-mt-5 lg:-mt-6 ">
>>>>>>> 5c43f2e (responsive desing)
              ¿Que hacemos?
            </h2>
            <p className="text-white w-full pt-6 text-1xl sm:text-2xl md:text-3xl lg-text-4xl
            dark:text-color_font_light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
              vero accusantium rem quas facilis, placeat modi, distinctio
              exercitationem ipsam necessitatibus vitae enim assumenda,
              asperiores optio dignissimos. Dolorum recusandae porro reiciendis.
            </p>
          </article>

          <div className="flex xl:w-2/5 2xl:w-1/2 justify-center">
            <img
              className='aspect-auto w-full object-cover xl:scale-115'
              src="../src/assets/img/nosotros_imagen_mesas.png"
              alt="" />
          </div>

        </section>


        {/*Seccion Conoce*/}
        <section className="flex flex-col gap-5 px-10 md:px-16 lg:px-24 2xl:px-64 mb-3">

          <article>
<<<<<<< HEAD
            <h1 className="font-subTitle font-extrabold italic text-color_font_dark text-4xl 
            md:text-8xl lg:text-9xl dark:text-second_color_lt animate-pulse
            hover:text-yellow-300 cursor-pointer transition-all">
=======
            <h1 className="font-subTitle font-extrabold italic text-color_font_dark text-5xl md:text-6xl lg:text-6xl xl:text-8xl">
>>>>>>> 5c43f2e (responsive desing)
              CONOCE
            </h1>

            <h2 className="font-text text-white text-xl md:text-5xl lg:text-6xl ml-12 md:ml-16 
            lg:ml-20 -mt-5 md:-mt-7 lg:-mt-9  dark:text-color_font_light">
              Nuestros servicios
            </h2>
          </article>

          <article className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
          </article>

        </section>
        <Footer></Footer>
      </div>
    </main>
  );
}


