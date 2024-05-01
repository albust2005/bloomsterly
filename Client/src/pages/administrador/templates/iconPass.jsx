import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useThemeContext } from "../../../components/providers/themeProvider";
export const IconPass = () => {
  const theme = useThemeContext();
  const logoColor = theme === "dark" ? "#BC0B38" : "#FFFFFF";
  return (
    <div>
        <FontAwesomeIcon
          className="h-5"
          style={{ color: logoColor }}
          icon={faEye}
        />
    </div>
  );
};
