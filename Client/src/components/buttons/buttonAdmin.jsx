import { Link } from "react-router-dom";
export const ButtonAdmin = ({ children, href, onClick }) => {
  return (
    <div>
      <Link to={href} className="text-white w-full rounded-sm  h-full border-2 border-transparent
      bg-hover_boton_admin p-1 font-text hover:bg-transparent hover:border-hover_boton_admin 
      transition-all ease-in-out minicel:text-[8px]  md:text-[11px] sm:text-[9px] lg:text-[17px]
      dark:bg-light_theme dark:hover:bg-transparent dark:hover:border-light_theme dark:text-second_color_lt
      dark:hover:text-light_theme" onClick={onClick}>
          {children}
      </Link>
    </div>
  );
};
