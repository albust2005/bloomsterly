import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useThemeContext } from "../../components/providers/themeProvider";
export const IconUser = () => {
  const theme = useThemeContext()
  const logoColor = theme === "dark" ? "#BC0B38" : "rgb(38, 6, 91)";
  return (
    <div>
      <FontAwesomeIcon
        className="h-24 p-5"
        style={{ color: logoColor }}
        icon={faUser}
      />
    </div>
  );
};
