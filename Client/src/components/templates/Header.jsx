//importaciones propias de proyecto
import { ButtonNav } from "../buttons/buttonNav";

//importaciones de dependencias 
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

export function Header() {

    //use stated para asignar el logo y las clases necesarias al menu responsive
    const [menu, setMenu] = useState(faBars);

    //cada click cambia el estado 
    const toggleClick = () => {
        setMenu(menu === faBars ? faXmark : faBars);
    };

    return (
        <nav className="bg-transparent flex justify-between items-center h-20 dark:bg-transparent dark:shadow-[#f7e6d5]">
            <Link className="flex justify-between items-center" to="/">
                <span className="cursor-pointer text-white">BloomSterly</span>
            </Link>

            <div
                className={`dark:bg-nav_light_theme md:dark:bg-transparent bg-color_font_dark md:bg-transparent flex flex-col px-4 md:flex-row md:px-0 md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 md:pl-0 pl-7 md:opacity-100 duration-75 md:duration-0
                ${menu === faBars ? "top-[-400px] opacity-0" : "top-[80px] opacity-100"}`}
            >
                <ButtonNav text="Nosotros" />
                <ButtonNav text="Servicios" href="/servicios" />
                <ButtonNav text="Reservas" href="/pedidos" />
            </div>

            <div className="flex justify-center items-center">

                <ButtonNav href="/login" text="Iniciar sesión" />

                <span className="text-3xl cursor-pointer md:hidden block dark:fill-black">
                    <FontAwesomeIcon
                        icon={menu}
                        onClick={toggleClick}
                        style={{ color: "#ffff", }}
                        size="xs"
                    />
                </span>
            </div>
        </nav>
    );
}

//Para evitar la redundancia se componetiza en ./buttons/buttonNav

