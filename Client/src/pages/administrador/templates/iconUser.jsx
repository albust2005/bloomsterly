import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useThemeContext } from "../../../components/providers/themeProvider";
import { Link } from "react-router-dom";
export const IconUser = ({href, clasName}) => {
  const theme = useThemeContext();
  const logoColor = theme === "dark" ? "#BC0B38" : "#FFFFFF";
  return (
    <div>
      <Link to={href}>
        <FontAwesomeIcon
          className={clasName}
          style={{ color: logoColor }}
          icon={faUser}
        />
      </Link>
    </div>
  );
};