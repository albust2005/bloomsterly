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
      {children}

      {/*IZQUIERDA */}
      <ScrollAnimatedSection 
        className=" 
        absolute
        z-0 opacity-0
        top-[10%]
        left-[2%]
        minicel:w-[75px] sm:w-[100px]
        "
        animation="animate-fade-right"
      >
        <img src="../../../src/assets/flor_img/liriorosa.webp" alt="" />
      </ScrollAnimatedSection>


      <ScrollAnimatedSection 
        className="
        absolute
        z-0 opacity-0
        top-[21%]
        left-[0%]
        minicel:w-[15px] sm:w-[30px]
        "
        animation="animate-fade-right"
      >
        <img src="../../../src/assets/flor_img/lirioamarillo.webp" alt="" />
      </ScrollAnimatedSection>


      <ScrollAnimatedSection 
        className="
        absolute
        z-0 opacity-0
        top-[30%]
        left-[2%]
        minicel:w-[75px] sm:w-[100px]
        "
        animation="animate-fade-right"
      >
        <img src="../../../src/assets/flor_img/lirioblanco-rosa.webp" alt="" />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection 
        className="
        absolute
        z-0 opacity-0
        top-[50%]
        left-[0%]
        minicel:w-[75px] sm:w-[100px]
        "
        animation="animate-fade-right"
      >
        <img src="../../../src/assets/flor_img/lirioblanco.webp" alt="" />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection 
        className="
        absolute
        z-0 opacity-0
        top-[70%]
        left-[0%]
        minicel:w-[50px] sm:w-[90px]
        "
        animation="animate-fade-up"
      >
        <img src="../../../src/assets/flor_img/lirioamarillo.webp" alt="" />
      </ScrollAnimatedSection>

      

      <ScrollAnimatedSection
        className="absolute 
        top-[85%] 
        left-[6%] 
        w-[130px] 
        z-10 opacity-0"
        animation="animate-fade-up"
      >
        <img src="../../../src/assets/flor_img/lirioblanco-rosa.webp" alt="" />
      </ScrollAnimatedSection>

      {/*CENTRO */}
      <ScrollAnimatedSection
        className="absolute 
        top-[5%] minicel:top-[10%] lg:top-[12%] xl:top-[11%] 2xl:top-[8%] 
        minicel:left-[10%] lg:left-[15%] 
        minicel:w-[95px] sm:w-[120px] 
        -rotate-12 opacity-0"
        animation="animate-fade-right"
      >
        <img src="../../../src/assets/flor_img/lirioamarillo.webp" alt="" />
      </ScrollAnimatedSection>


      <ScrollAnimatedSection
        className=" absolute 
        w-[80px] 
        left-[25%] 
        top-[30%] 
        opacity-0"
        animation="animate-fade-right"
      >
        <img src="../../../src/assets/flor_img/liriorosa.webp" alt="" />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection
        className=" absolute 
        w-[70px] 
        left-[34%] 
        top-[17%] 
        opacity-0"
        animation="animate-fade-down"
      >
        <img src="../../../src/assets/flor_img/lirioblanco-rosa.webp" alt="" />
      </ScrollAnimatedSection>


      <ScrollAnimatedSection
        className="absolute 
        top-[50%] 
        left-[25%]
         w-[100px] 
        opacity-0"
        animation="animate-fade-up"
      >
        <img src="../../../src/assets/flor_img/liriorosa.webp" alt="" />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection
        className=" absolute w-[110px] left-[46%] top-[30%] opacity-0"
        animation="animate-fade-up"
      >
        <img src="../../../src/assets/flor_img/liriorosa.webp" alt="" />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection
        className="absolute 
        top-[20%] 
        right-[30%]
         w-[70px] 
         z-10 opacity-0"
        animation="animate-fade-down"
      >
        <img src="../../../src/assets/flor_img/lirioamarillo.webp" alt="" />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection
        className="absolute 
        top-[5%] minicel:top-[30%] lg:top-[35%] xl:top-[40%] 2xl:top-[45%] 
        minicel:left-[10%] lg:left-[37%] 
        minicel:w-[15px] sm:w-[45px] 
        -rotate-12 opacity-0"
        animation="animate-fade-down"
      >
        <img src="../../../src/assets/flor_img/lirioamarillo.webp" alt="" />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection
        className=" absolute w-[85px] left-[54%] top-[10%] opacity-0"
        animation="animate-fade-down"
      >
        <img src="../../../src/assets/flor_img/lirioblanco.webp" alt="" />
      </ScrollAnimatedSection>

      {/*DERECHA */}
      <ScrollAnimatedSection
        className=" absolute 
        w-[100px] 
        right-[10%] 
        top-[10%] 
        opacity-0"
        animation="animate-fade-left"
      >
        <img src="../../../src/assets/flor_img/lirioblanco-rosa.webp" alt="" />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection
        className="absolute 
        top-[48%] 
        right-[3%]
        w-[70px]  
        opacity-0"
        animation="animate-fade-left"
      >
        <img src="../../../src/assets/flor_img/lirioblanco.webp" alt="" />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection
        className="absolute 
        top-[50%] 
        right-[5%] 
        w-[90px] 
        opacity-0"
        animation="animate-fade-down"
      >
        <img src="../../../src/assets/flor_img/liriorosa.webp" alt="" />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection 
        className="
        absolute
        z-0 opacity-0
        top-[70%]
        right-[1%]
        minicel:w-[30px] sm:w-[60px]
        "
        animation="animate-fade-up"
      >
        <img src="../../../src/assets/flor_img/lirioamarillo.webp" alt="" />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection
        className="absolute 
        top-[5%] minicel:top-[20%] lg:top-[25%] xl:top-[30%] 2xl:top-[35%] 
        minicel:right-[3%] lg:right-[6%] 
        minicel:w-[15px] sm:w-[45px] 
        -rotate-12 opacity-0"
        animation="animate-fade-left"
      >
        <img src="../../../src/assets/flor_img/lirioamarillo.webp" alt="" />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection
        className="absolute 
        top-[5%] minicel:top-[5%] lg:top-[10%] xl:top-[25%] 2xl:top-[30%] 
        minicel:right-[1%] lg:right-[1%] 
        minicel:w-[15px] sm:w-[45px] 
        -rotate-12 opacity-0"
        animation="animate-fade-left"
      >
        <img src="../../../src/assets/flor_img/liriorosa.webp" alt="" />
      </ScrollAnimatedSection>

    </main>
  );
}

Layaout.propTypes = {
  children: PropTypes.node,
};
