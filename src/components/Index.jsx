import { Header } from "./Header";
import { Footer } from "./Footer";
import '../App.css'
//solucion para cuando no funcione la carga de imagenes
//si encuentran otra avisen

import luces from "../assets/luces_dark_theme.png"
import { PolaroidCard } from "./PolaroidCard";


export function LandingPage() {
    return (
<<<<<<< HEAD
        <main className='bg-dark_theme'>
            <Header />
            <section className=''>
                <img className='aspect-auto w-full -mt-7' src={luces} alt="luces portada" />
=======
        <main>
            <Header/>

            <section>
                <img src="../src/assets/luces_dark_theme.png" alt="" />
>>>>>>> 969b5b9f6a2aaa6fccf974076720bb0bab4918c7
            </section>
            <section>
                {/*Seccion Nosotros*/}
            </section>
            <section className='flex flex-col gap-5 px-10 md:px-16 lg:px-24 2xl:px-64 mb-3'>
                <div>

                    <h1 
                    className='font-subTitle font-extrabold italic text-color_font_dark text-4xl md:text-8xl lg:text-9xl'
                    >
                        CONOCE
                    </h1>

                    <h2 
                    className='font-text text-white text-xl md:text-5xl lg:text-6xl ml-12 md:ml-16 lg:ml-20 -mt-5 md:-mt-7 lg:-mt-9 '
                    >
                        Nuestros servicios
                    </h2>

                </div>

                <div className="container bg-black mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    
                  <PolaroidCard/>
                  <PolaroidCard/>
                  <PolaroidCard/>
                  <PolaroidCard/>
                  <PolaroidCard/>
                  <PolaroidCard/>

                </div>
            </section>

            <Footer />
        </main>
    )
}