import { TitleAE } from "../../components/titles/titleAE"
export const IndexAdmin = ({user}) => {
  return (
    <div className="flex justify-center items-center text-center">
      <TitleAE title="Administrador" descripcion={`Bienvenido a tu espacio ${user}`} />
    </div>
  );
}