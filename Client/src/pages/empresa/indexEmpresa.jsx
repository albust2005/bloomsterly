import { useUserContext } from "../../components/providers/userProvider";
import { TitleAE } from "../../components/titles/titleAE";
import { ScrollAnimatedSection } from "../../components/templates/ScrollAnimatedSection";

export function Index_empresa() {
  const { sesionUser } = useUserContext();

  return (
    <>
      <ScrollAnimatedSection animation="animate-fade-up" className="opacity-0">
        <div className="flex justify-center items-center text-center min-h-96">
          <TitleAE
            title="Empresa"
            descripcion={`Bienvenido a tu espacio empresa ${sesionUser?.Username}`}
          />
        </div>
      </ScrollAnimatedSection>
    </>
  );
}
