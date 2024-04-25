import { ScrollAnimatedSection } from "./ScrollAnimatedSection";

export function FloresIndex() {
  return (
    <>
      <ScrollAnimatedSection
        className="absolute 
        top-[80%] 
        right-[30%] 
        w-[60px] 
        z-0 opacity-0"
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

      {/*ROSA */}


      <ScrollAnimatedSection
        className="absolute top-56 right-[220px] w-[70px] opacity-0"
        animation="animate-fade-left"
      >
        <img src="../../../src/assets/flor_img/liriorosa.webp" alt="" />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection
        className="absolute top-[440px] left-[150px] w-[110px]  opacity-0"
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


      {/*BLANCO */}


      <ScrollAnimatedSection
        className="absolute top-[500px] left-[350px] w-[130px] z-0 opacity-0"
        animation="animate-fade-left"
      >
        <img src="../../../src/assets/flor_img/lirioblanco.webp" alt="" />
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
        className="absolute top-[108%] left-[28%] w-[65px] z-10 opacity-0"
        animation="animate-fade-down"
      >
        <img src="../../../src/assets/flor_img/liriorosa.webp" alt="" />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection
        className="absolute top-[180%] left-[28%] w-[105px] z-10 opacity-0"
        animation="animate-fade-down"
      >
        <img src="../../../src/assets/flor_img/liriorosa.webp" alt="" />
      </ScrollAnimatedSection>

      {/*BLANCO-ROSA */}
      <ScrollAnimatedSection
        className="absolute top-[815px] left-[50px] w-[70px]  opacity-0"
        animation="animate-fade-down"
      >
        <img src="../../../src/assets/flor_img/lirioblanco-rosa.webp" alt="" />
      </ScrollAnimatedSection>

      

      {/*BLANCO */}
      <ScrollAnimatedSection
        className="absolute top-[180%] left-[10%] w-[105px] z-10 opacity-0"
        animation="animate-fade-up"
      >
        <img src="../../../src/assets/flor_img/lirioblanco.webp" alt="" />
      </ScrollAnimatedSection>
    </>
  );
}
