
import "../App.css";

import { PolaroidCard } from "../components/templates/PolaroidCard";
import { FirtsTitle, Titles } from "../components/titles/Title";
import { categorias } from "../db/categorias.js";


import { PropTypes } from "prop-types"
import { Layaout } from "../components/templates/Layaout";
import { Flor } from "../components/Flores.jsx"



Titles.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
}

export function LandingPage() {

  return (
    <>
      {/* BloomSterly */}
      <FirtsTitle 
        title="BloomSterly"
      />
      {/*Seccion Nosotros*/}
      <div className="flex flex-col items-center gap-16 xl:gap-32">

        <section className="h-full xl:flex gap-5">

          <article className="w-full xl:w-3/5 2xl:w-1/2">

            <Titles
              title='NOSOTROS'
              subTitle='¿Que hacemos?'
            />

            <p className="text-white w-full pt-6 text-1xl sm:text-2xl md:text-3xl lg-text-4xl
            dark:text-black z-10">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
              vero accusantium rem quas facilis, placeat modi, distinctio
              exercitationem ipsam necessitatibus vitae enim assumenda,
              asperiores optio dignissimos. Dolorum recusandae porro reiciendis.
            </p>

          </article>

          <article className="flex xl:w-2/5 2xl:w-1/2 justify-center">
            <img
              className='aspect-auto w-full object-cover xl:scale-115'
              src="../src/assets/img/nosotros_imagen_mesas.webp"
              alt="" />
          </article>

        </section>


        {/*Seccion Conoce*/}
        <section className="flex flex-col w-full gap-5">

          <article className="w-full">
            <Titles
              title='CONOCE'
              subTitle='Nuestros servicios'
            />
          </article>

          <article className="mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {categorias.slice(0, 3).map(servicio => (

                    <div key={servicio.nombre}>
                        <PolaroidCard
                            url={servicio.img}
                            nombre={servicio.nombre}
                            descripcion={servicio.descripcion}
                        />
                    </div>
                ))}
            </article>

        </section>
        
      </div>
    </>
  );
}