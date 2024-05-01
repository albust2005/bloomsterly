import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useThemeContext } from "../../../components/providers/themeProvider";
export const IconPassO = () => {
  const theme = useThemeContext();
  const logoColor = theme === "dark" ? "#BC0B38" : "#FFFFFF";
  return (
    <div>
      <FontAwesomeIcon
        className="h-5"
        style={{ color: logoColor }}
        icon={faEyeSlash}
      />
    </div>
  );
};
