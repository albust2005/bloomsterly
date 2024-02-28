
import "../App.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ThemeColor } from "./buttons/buttonThemeColor"


import { PolaroidCard } from "./PolaroidCard";

export function LandingPage() {
  return (
    <main className="bg-dark_theme flex flex-col gap-16">
      <Header></Header>
      {/* BloomSterly */}
      <section className="">
        <h1 className="flex justify-center font-bloomsterly text-white text-7xl sm:text-8xl md:text-[170px] lg:text-[210px] xl:text-[250px]">
          BloomSterly
        </h1>
      </section>


      {/*Seccion Nosotros*/}

      <div className="flex flex-col gap-32">
        <section className="h-full xl:flex gap-5 px-10 md:px-16 lg:px-24 2xl:px-64 mb-3">

          <article className="w-full xl:w-3/5 2xl:w-1/2">
            <h1 className="font-subTitle font-extrabold italic text-color_font_dark text-5xl md:text-8xl lg:text-9xl">
              NOSOTROS
            </h1>
            <h2 className="font-text text-white text-2xl md:text-5xl lg:text-6xl ml-12 md:ml-16 lg:ml-20 -mt-5 md:-mt-7 lg:-mt-9 ">
              ¿Que hacemos?
            </h2>
            <p className="text-white w-full pt-6 text-1xl sm:text-2xl md:text-3xl lg-text-4xl">
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
            <h1 className="font-subTitle font-extrabold italic text-color_font_dark text-4xl md:text-8xl lg:text-9xl">
              CONOCE
            </h1>

            <h2 className="font-text text-white text-xl md:text-5xl lg:text-6xl ml-12 md:ml-16 lg:ml-20 -mt-5 md:-mt-7 lg:-mt-9 ">
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
            <PolaroidCard />
            <PolaroidCard />
            <PolaroidCard />
          </article>

        </section>
        <ThemeColor></ThemeColor>
        <Footer></Footer>
      </div>
    </main>
  );
}


