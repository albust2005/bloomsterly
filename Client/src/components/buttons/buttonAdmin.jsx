import { Link } from "react-router-dom";
export const ButtonAdmin = ({ children, href }) => {
  return (
    <div>
      <Link to={href} className="text-white w-full rounded-sm  h-full border-2 border-transparent
      bg-hover_boton_admin p-1 font-text hover:bg-transparent hover:border-hover_boton_admin 
      transition-all ease-in-out
      dark:bg-light_theme dark:hover:bg-transparent dark:hover:border-light_theme dark:text-second_color_lt
      dark:hover:text-light_theme">
          {children}
      </Link>
    </div>
  );
};
