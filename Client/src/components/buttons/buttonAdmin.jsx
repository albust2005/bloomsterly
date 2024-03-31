import { Link } from "react-router-dom";
export const ButtonAdmin = ({ children, href }) => {
  return (
    <div>
      <Link to={href}>
        <button className=" bg-dark_theme text-white w-[200px] rounded-lg m-3 h-[5vh] hover:bg-hover_boton_admin dark:bg-second_color_lt dark:hover:bg-[#e25164]">
          {children}
        </button>
      </Link>
    </div>
  );
};
