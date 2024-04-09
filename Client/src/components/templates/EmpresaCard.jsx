import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function EmpresaCards({
  subCategoria,
  nombre,
  direccion,
  telefono,
  instagram,
  facebook,
  logo,
}) {
  return (
    <Link
      to={`/servicio/${subCategoria}/${nombre}`}
      className="flex flex-col bg-empresa_card rounded-lg w-full   
        dark:bg-second_color_lt dark:text-white relative overflow-hidden transition-all]"
    >
      <article className="w-full h-full max-h-[350px]">
        <img
          src={logo}
          alt="imagen_empresa"
          className="imagen w-full h-full aspect-auto object-cover rounded-t-lg bg-black  hover:max-h-[50%]"
        />
        <div className="opacity-100 p-3">
          <h1 className="font-title text-3xl italic font-black">{nombre}</h1>
          <div className="">
            <div>
              <p className="font-subTitle">
                Dirección: {direccion}
              </p>
              <p className="font-subTitle">
                Teléfono: {telefono}
              </p>
            </div>
            <div>
              <p className="font-subTitle">
                Instagram: {instagram}
              </p>
              <p className="font-subTitle">
                Facebook: {facebook}
              </p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

EmpresaCards.propTypes = {
  img: PropTypes.string,
  uuid: PropTypes.string,
  empresa: PropTypes.string,
  municipio: PropTypes.string,
  direccion: PropTypes.string,
  telefono: PropTypes.string,
};
