// importación de los componentes cuando ya se puedan utilizar 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useThemeContext } from "../../components/providers/themeProvider";

export function LateralMenu(){

    const theme = useThemeContext();
    const logoColor = theme === "dark" ? "#BC0B38" : "rgb(38, 6, 91)";

    return(
        <div className="flex flex-col w-[40vh] rounded-lg bg-blue-700 items-center dark:bg-light_theme absolute">
            <div>
                <FontAwesomeIcon
                    className="h-[10vh] p-[5vh]"
                    style={{ color : logoColor}}
                    icon={faUser}
                />
            </div>
            <h2 className="text-white text-2xl dark:text-second_color_lt">@Empresa</h2>
            <button className="bg-dark_theme text-white w-[20vh] rounded-lg m-3 h-[5vh] hover:bg-hover_boton_admin dark:bg-second_color_lt dark:hover:bg-[#e25164]">Clientes</button>
            <button className="bg-dark_theme text-white w-[20vh] rounded-lg m-3 h-[5vh] hover:bg-hover_boton_admin dark:bg-second_color_lt dark:hover:bg-[#e25164">Servicios</button>
            <button className="bg-dark_theme text-white w-[20vh] rounded-lg m-3 h-[5vh] hover:bg-hover_boton_admin dark:bg-second_color_lt dark:hover:bg-[#e25164">Modificar</button>
        </div>
    )
}