import PropTypes from "prop-types";
import { ScrollAnimatedSection } from "./ScrollAnimatedSection";

export function Layaout({ children }) {
  {
    /*const Flor = ({ name, positionx, positiony, width}) => {
        return(
            <ScrollAnimatedSection className={`absolute top-[${positiony}px] left-[${positionx}px] w-[${width}px] 
            rotate-45 z-0`} animation="animate-fade-right">
                <img src={`../src/assets/flor_img/lirio${name}.webp`} alt="" />
            </ScrollAnimatedSection>
        )
    }*/
  }

  return (
    <main
      className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
        from-[#451693] from-40% via-[#370d7d] via-60% to-[#190042] 
        to-90%  dark:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
        dark:from-[#ffffff] dark:via-[#ffffec] dark:to-[#ffffd2] 
        flex flex-col h-full gap-48 px-5 md:px-16 lg:px-24 2xl:px-64"
    >
      {/*AMARILLAS */}
      <ScrollAnimatedSection
        className="absolute top-[60px] w-[150px] left-[120px] -rotate-12 opacity-0"
        animation="animate-fade-right"
      >
        <img src="../../../src/assets/flor_img/lirioamarillo.webp" alt="" />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection
        className="absolute top-[190px] w-[95px] left-[255px] -rotate-12 opacity-0 z-10"
        animation="animate-fade-right"
      >
        <img src="../../../src/assets/flor_img/lirioamarillo.webp" alt="" />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection
        className="absolute top-[108px] right-[350px] w-[70px] z-10 opacity-0"
        animation="animate-fade-down"
      >
        <img src="../../../src/assets/flor_img/lirioamarillo.webp" alt="" />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection
        className="absolute top-[440px] left-[130px] w-[70px] z-10 opacity-0"
        animation="animate-fade-right"
      >
        <img src="../../../src/assets/flor_img/lirioamarillo.webp" alt="" />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection
        className="absolute top-[480px] right-[500px] w-[60px] z-0 opacity-0"
        animation="animate-fade-left"
      >
        <img src="../../../src/assets/flor_img/lirioamarillo.webp" alt="" />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection
        className="absolute top-[500px] right-[90px] w-[150px] z-0 opacity-0"
        animation="animate-fade-left"
      >
        <img src="../../../src/assets/flor_img/lirioamarillo.webp" alt="" />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection
        className="absolute top-[570px] left-[350px] w-[45px] z-10 opacity-0"
        animation="animate-fade-right"
      >
        <img src="../../../src/assets/flor_img/lirioamarillo.webp" alt="" />
      </ScrollAnimatedSection>


      {/*ROSA */}

      <ScrollAnimatedSection
        className=" absolute w-[80px] left-[450px] top-[150px] opacity-0"
        animation="animate-fade-right"
      >
        <img src="../../../src/assets/flor_img/liriorosa.webp" alt="" />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection
        className="absolute top-[308px] left-[97px] w-[110px] z-10 opacity-0"
        animation="animate-fade-up"
      >
        <img src="../../../src/assets/flor_img/liriorosa.webp" alt="" />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection
        className=" absolute w-[120px] left-[615px] top-[210px]"
        animation="animate-fade-up"
      >
        <img src="../../../src/assets/flor_img/liriorosa.webp" alt="" />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection
        className="absolute top-56 right-[220px] w-[70px] opacity-0"
        animation="animate-fade-left"
      >
        <img src="../../../src/assets/flor_img/liriorosa.webp" alt="" />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection
        className="absolute top-[440px] left-[150px] w-[110px] z-10 opacity-0"
        animation="animate-fade-up"
      >
        <img src="../../../src/assets/flor_img/liriorosa.webp" alt="" />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection
        className=" absolute w-[220px] left-[580px] top-[550px] opacity-0"
        animation="animate-fade-down"
      >
        <img src="../../../src/assets/flor_img/liriorosa.webp" alt="" />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection
        className="absolute top-[320px] right-[65px] w-[90px] z-10 opacity-0"
        animation="animate-fade-down"
      >
        <img src="../../../src/assets/flor_img/liriorosa.webp" alt="" />
      </ScrollAnimatedSection>


      {/*BLANCO */}

      <ScrollAnimatedSection
        className=" absolute w-[98px] left-[625px] top-[60px]"
        animation="animate-fade-down"
      >
        <img src="../../../src/assets/flor_img/lirioblanco.webp" alt="" />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection
        className="absolute top-[440px] left-[200px] w-[85px] z-10 opacity-0"
        animation="animate-fade-left"
      >
        <img src="../../../src/assets/flor_img/lirioblanco.webp" alt="" />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection
        className="absolute top-[500px] left-[350px] w-[130px] z-0 opacity-0"
        animation="animate-fade-left"
      >
        <img src="../../../src/assets/flor_img/lirioblanco.webp" alt="" />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection
        className="absolute top-[310px] right-[30px] w-[70px] z-0 opacity-0"
        animation="animate-fade-left"
      >
        <img src="../../../src/assets/flor_img/lirioblanco.webp" alt="" />
      </ScrollAnimatedSection>


      {/*BLANCO-ROSA */}

      <ScrollAnimatedSection
        className=" absolute w-[100px] right-[80px] top-[60px] opacity-0"
        animation="animate-fade-left"
      >
        <img src="../../../src/assets/flor_img/lirioblanco-rosa.webp" alt="" />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection
        className="absolute top-56 left-[50px] w-[70px] opacity-0"
        animation="animate-fade-right"
      >
        <img src="../../../src/assets/flor_img/lirioblanco-rosa.webp" alt="" />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection
        className="absolute top-[540px] left-[50px] w-[130px] z-10 opacity-0"
        animation="animate-fade-right"
      >
        <img src="../../../src/assets/flor_img/lirioblanco-rosa.webp" alt="" />
      </ScrollAnimatedSection>


      {/*NOSOTROS */}

      {/*AMARILLAS */}
      <ScrollAnimatedSection
        className="absolute top-[1000px] left-[2px] w-[100px] z-0 opacity-0"
        animation="animate-fade-right"
      >
        <img src="../../../src/assets/flor_img/lirioamarillo.webp" alt="" />
      </ScrollAnimatedSection>

      {/*ROSA */}
      <ScrollAnimatedSection
        className="absolute top-[745px] left-[310px] w-[65px] z-10 opacity-0"
        animation="animate-fade-down"
      >
        <img src="../../../src/assets/flor_img/liriorosa.webp" alt="" />
      </ScrollAnimatedSection>


      {/*BLANCO-ROSA */}
      <ScrollAnimatedSection
        className="absolute top-[815px] left-[50px] w-[70px] z-10 opacity-0"
        animation="animate-fade-right"
      >
        <img src="../../../src/assets/flor_img/lirioblanco-rosa.webp" alt="" />
      </ScrollAnimatedSection>

      {children}
    </main>
  );
}

Layaout.propTypes = {
  children: PropTypes.node,
};
