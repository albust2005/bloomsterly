import "../App.css";

import { ScrollAnimatedSection } from "../components/templates/ScrollAnimatedSection.jsx";

import { PolaroidCard } from "../components/templates/PolaroidCard";
import { FirtsTitle, Titles } from "../components/titles/Title";
//import { Flor } from "../components/Flores.jsx"
import { useCategoriaContext } from "../components/providers/categoriaProvider.jsx";
import { Link } from "react-router-dom";

export function LandingPage() {
  const categorias = useCategoriaContext();

  return (
    <>
      {/* BloomSterly */}
      <div className="z-10 ">
        <ScrollAnimatedSection
          animation="animate-fade-up"
          delay="animate-delay-300"
          className="opacity-0"
        >
          <FirtsTitle title="BloomSterly" />
        </ScrollAnimatedSection>
      </div>

      {/*Seccion Nosotros*/}
      <div className="flex flex-col items-center gap-36 xl:gap-48 z-10">
        <section className="h-full xl:flex gap-5">
          <ScrollAnimatedSection
            className="w-full xl:w-3/5 2xl:w-1/2"
            id="nosotros"
            animation="animate-fade-right"
          >
            <Titles title="NOSOTROS" subTitle="¿Qué hacemos?" />

            {/* <Flor name='blanco' positionx={200} positiony={300} size={10}/> */}

            <p
              className="text-white text-balance w-full pt-6 text-xl sm:text-2xl md:text-4xl lg-text-5xl
            dark:text-black "
            >
              Explora todos los servicios que te ofrecemos, para que puedas
              diseñar y personalizar tu evento desde la comodidad de tu hogar.
              Aquí te brindamos todas las herramientas que te permitirán hacer
              de tu evento una experiencia inolvidable.
            </p>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection
            animation="animate-fade-left"
            className="flex xl:w-2/5 2xl:w-1/2 justify-center"
          >
            <img
              className="aspect-auto w-full object-cover object-center scale-75 xl:scale-110"
              src="../src/assets/img/nosotros_imagen_mesas.webp"
              alt=""
            />
          </ScrollAnimatedSection>
        </section>

        {/*Seccion Conoce*/}
        <section className="flex flex-col w-full gap-5">
          <ScrollAnimatedSection
            className="w-full"
            animation="animate-fade-right"
          >
            <Link to="/categorias">
              <Titles title="CONOCE" subTitle="Nuestros servicios" />
            </Link>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection
            className="mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 opacity-0"
            animation="animate-fade"
          >
            {categorias.slice(0, 3).map((categoria) => (
              <div key={categoria.id}>
                <PolaroidCard
                  url={categoria.img}
                  nombre={categoria.nombre}
                  descripcion={categoria.descripcion}
                />
              </div>
            ))}
          </ScrollAnimatedSection>
        </section>
      </div>
    </>
  );
}
