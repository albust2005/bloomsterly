import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useThemeContext } from "../../../components/providers/themeProvider";
import { Link } from "react-router-dom";
export const IconUser = ({href}) => {
  const theme = useThemeContext();
  const logoColor = theme === "dark" ? "#BC0B38" : "#FFFFFF";
  return (
      <Link 
      className="flex items-center justify-center cursor-pointer bg-transparent hover:scale-110 md:py-1 rounded-lg hover:ease-in-out duration-300 z-10"
      to={href}
      >
        <FontAwesomeIcon
          style={{ color: logoColor }}
          icon={faUser}
          size="xl"
        />
      </Link>
  );
};