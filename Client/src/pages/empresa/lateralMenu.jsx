// importación de los componentes cuando ya se puedan utilizar 
import { useThemeContext } from "../../components/providers/themeProvider";
import { IconUser } from "../administrador/iconUser";
import { ButtonAdmin } from "../../components/buttons/buttonAdmin";


export function LateralMenu(){

    const theme = useThemeContext();
    const logoColor = theme === "dark" ? "#BC0B38" : "rgb(38, 6, 91)";

    return(
        <div className="flex flex-col w-[25%] rounded-lg bg-admin_card items-center dark:bg-light_theme">
            <div>
                <IconUser/>
            </div>
            <h2 className="text-white text-2xl dark:text-second_color_lt">@Empresa</h2>
            <ButtonAdmin>Clientes</ButtonAdmin>
            <ButtonAdmin>Servicios</ButtonAdmin>
            <ButtonAdmin>Modificar</ButtonAdmin>
        </div>
    )
}