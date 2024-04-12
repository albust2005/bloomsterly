import { useUserContext } from "../../components/providers/userProvider";
import { TitleAE } from "../../components/titles/titleAE"
export const IndexAdmin = () => {
  const { sesionUser } = useUserContext()
  
  return (
    <div className="flex justify-center items-center text-center">
      <TitleAE title="Administrador" descripcion={`Bienvenido a tu espacio ${sesionUser?.Username}`} />
    </div>
  );
}