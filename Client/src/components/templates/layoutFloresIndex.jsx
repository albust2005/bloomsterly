import { ScrollAnimatedSection } from "./ScrollAnimatedSection";

export function FloresIndex() {
  return (
    <>
      <ScrollAnimatedSection
        className="absolute 
        top-[80%] 
        right-[30%] 
        w-[60px] minicel:w-[30px] sm:w-[50px] lg:w-[60px]
        z-0 opacity-0"
        animation="animate-fade-left"
      >
        <img src="../../../src/assets/flor_img/lirioamarillo.webp" alt="" />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection
        className="absolute 
        top-[80%] 
        right-[10%] 
        w-[100px] minicel:w-[40px] sm:w-[90px] lg:w-[150px]
        z-0 opacity-0"
        animation="animate-fade-left"
      >
        <img src="../../../src/assets/flor_img/lirioamarillo.webp" alt="" />
      </ScrollAnimatedSection>

      {/*BLANCO */}


      <ScrollAnimatedSection
        className="absolute 
        top-[70%] 
        left-[25%] 
        w-[60px] minicel:w-[60px] sm:w-[110px] lg:w-[130px]
        z-0 opacity-0"
        animation="animate-fade-left"
      >
        <img src="../../../src/assets/flor_img/lirioblanco.webp" alt="" />
      </ScrollAnimatedSection>

      

      {/*NOSOTROS */}

      {/*AMARILLAS */}
      <ScrollAnimatedSection
        className="absolute 
        bottom-[-80%] 
        left-[2%]
        w-[20px] minicel:w-[35px] sm:w-[80px] lg:w-[100px]
        z-0 opacity-0"
        animation="animate-fade-right"
      >
        <img src="../../../src/assets/flor_img/lirioamarillo.webp" alt="" />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection
        className="absolute 
        top-[175%] 
        right-[35%] 
        minicel:w-[50px] sm:w-[90px] md:w-[105px]
        z-0 opacity-0"
        animation="animate-fade-left"
      >
        <img src="../../../src/assets/flor_img/lirioamarillo.webp" alt="" />
      </ScrollAnimatedSection>

      {/*ROSA */}

      <ScrollAnimatedSection
        className="absolute 
        top-[180%] 
        left-[28%] 
        minicel:w-[50px] sm:w-[90px] md:w-[105px] 
        opacity-0"
        animation="animate-fade-down"
      >
        <img src="../../../src/assets/flor_img/liriorosa.webp" alt="" />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection
        className="absolute 
        bottom-[-90%] 
        right-[12%] 
        minicel:w-[50px] sm:w-[90px] md:w-[130px] 
        z-0 opacity-0"
        animation="animate-fade-left"
      >
        <img src="../../../src/assets/flor_img/liriorosa.webp" alt="" />
      </ScrollAnimatedSection>

      {/*BLANCO-ROSA */}
      <ScrollAnimatedSection
        className="absolute 
        top-[815px] 
        left-[50px] 
        minicel:w-[40px] sm:w-[60px] md:w-[70px]
        z-0 opacity-0"
        animation="animate-fade-down"
      >
        <img src="../../../src/assets/flor_img/lirioblanco-rosa.webp" alt="" />
      </ScrollAnimatedSection>

      

      {/*BLANCO */}
      <ScrollAnimatedSection
        className="absolute 
        top-[180%] 
        left-[10%] 
        minicel:w-[50px] sm:w-[90px] md:w-[105px]  
        z-10 opacity-0"
        animation="animate-fade-up"
      >
        <img src="../../../src/assets/flor_img/lirioblanco.webp" alt="" />
      </ScrollAnimatedSection>

      {/*CONOCE MAS  */}
      <ScrollAnimatedSection
        className="absolute 
        bottom-[-120%] 
        right-[20%] 
        w-[50px]  sm:w-[100px]
        z-0 opacity-0"
        animation="animate-fade-left"
      >
        <img src="../../../src/assets/flor_img/lirioblanco-rosa.webp" alt="" />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection
        className="absolute 
        bottom-[-160%] 
        right-[5%] 
        w-[90px]  sm:w-[130px]
        z-0 opacity-0"
        animation="animate-fade-left"
      >
        <img src="../../../src/assets/flor_img/lirioamarillo.webp" alt="" />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection
        className="absolute 
        bottom-[-115%] 
        right-[50%] 
        w-[50px]  sm:w-[100px]
        z-0 opacity-0"
        animation="animate-fade-left"
      >
        <img src="../../../src/assets/flor_img/lirioblanco.webp" alt="" />
      </ScrollAnimatedSection>
    </>
  );
}
