//importaciones propias de proyecto
import { ButtonNav } from "../buttons/buttonNav";

//importaciones de dependencias
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { useThemeContext } from "../providers/themeProvider";
import { useUserContext } from "../providers/userProvider";

export function Header() {
    const location = useLocation()

    const {sesionUser} = useUserContext()
    const [menu, setMenu] = useState(faBars);   //use stated para asignar el logo y las clases necesarias al menu responsive
    //cada click cambia el estado 
    const toggleClick = () => {
        setMenu(menu === faBars ? faXmark : faBars);
    };

    //para evitar la reutilizacion de nuevo del hook useEffect y estar pasando 
    //informacion mediante las props creamos un objeto que va a guardar el valor del contexto 
    //dependiendo de este valor podemos aplicar la logica deseada
    const theme = useThemeContext()
    const logoColor = theme === 'dark' ? '#BC0B38' : '#fff'

    if (location.pathname !== '/login' && location.pathname !== '/empresa') {
        return (
            <nav className="bg-transparent flex justify-between items-center h-20 dark:bg-transparent dark:shadow-[#f7e6d5] ">
                <Link className="flex justify-between items-center" to="/">
                    <span className="cursor-pointer dark:text-red-600 text-white pr-10">BloomSterly</span>
                </Link>

        <div
          className={`dark:bg-nav_light_theme md:dark:bg-transparent bg-color_font_dark md:bg-transparent flex flex-col px-4 md:flex-row md:px-0 md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 md:pl-0 pl-7 md:opacity-100 duration-75 md:duration-0
                    ${
                      menu === faBars
                        ? "top-[-400px] opacity-0"
                        : "top-[80px] opacity-100"
                    }`}
        >
          <ButtonNav text="Nosotros" />
          <ButtonNav text="Servicios" href="/servicios" />
          <ButtonNav text="Reservas" href="/pedidos" />
        </div>

                <div className="flex justify-center items-center">

                    {sesionUser === null ? <ButtonNav href="/login" text="Iniciar sesión" /> : <h1>Logout</h1>}


                    <span className="text-3xl cursor-pointer md:hidden block dark:fill-black">
                        <FontAwesomeIcon
                            icon={menu}
                            onClick={toggleClick}
                            style={{ color: logoColor, }}
                            size="xs"
                        />
                    </span>
                </div>
            </nav>
        )
    } else if (location.pathname === "/empresa") {
        return (
            <nav className="flex items-center justify-between p-[3vh] h-[20%]">
                <h1 className="dark:text-red-600 text-white text-2xl">BloomSterly</h1>
                <ButtonNav text="Cerrar Sesion" />
            </nav>
        )
    } else {
        return null
    }


}

//Para evitar la redundancia se componetiza en ./buttons/buttonNav
