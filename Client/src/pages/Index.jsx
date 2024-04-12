
import "../App.css";

import { PolaroidCard } from "../components/templates/PolaroidCard";
import { FirtsTitle, Titles } from "../components/titles/Title";
//import { Flor } from "../components/Flores.jsx"
import { useCategoriaContext } from "../components/providers/categoriaProvider.jsx";
import { Link } from "react-router-dom";

export function LandingPage() {

  const categorias = useCategoriaContext()

  return (
    <>
      {/* BloomSterly */}
      <FirtsTitle title="BloomSterly" />
      {/*Seccion Nosotros*/}
      <div className="flex flex-col items-center gap-16 xl:gap-32">
        <section className="h-full xl:flex gap-5">
          <article className="w-full xl:w-3/5 2xl:w-1/2">
            <Titles title="NOSOTROS" subTitle="¿Qué hacemos?" />

            {/* <Flor name='blanco' positionx={200} positiony={300} size={10}/> */}

            <p
              className="text-white w-full pt-6 text-1xl sm:text-2xl md:text-3xl lg-text-4xl
            dark:text-black text-balance"
            >
              Explora todos los servicios que te ofrecemos, para que puedas
              diseñar y personalizar tu evento desde la comodidad de tu hogar.
              Aquí te brindamos todas las herramientas que te permitirán hacer
              de tu evento una experiencia inolvidable.
            </p>
          </article>

          <article className="flex xl:w-2/5 2xl:w-1/2 justify-center">
            <img
              className="aspect-auto w-full object-cover xl:scale-115"
              src="../src/assets/img/nosotros_imagen_mesas.webp"
              alt=""
            />
          </article>
        </section>

        {/*Seccion Conoce*/}
        <section className="flex flex-col w-full gap-5">
          <article className="w-full">
            <Link to="/categorias">
              <Titles title="CONOCE" subTitle="Nuestros servicios" />
            </Link>
          </article>

          <article className="mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {categorias.slice(0, 3).map((categoria) => (
              <div key={categoria.id}>
                <PolaroidCard
                  url={categoria.img}
                  nombre={categoria.nombre}
                  descripcion={categoria.descripcion}
                />
              </div>
            ))}
          </article>
        </section>
      </div>
    </>
  );
}