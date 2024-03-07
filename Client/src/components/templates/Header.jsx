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
        console.log(menu);

        console.log(document.querySelector('ul'))

    };

    return (
        <nav className="bg-dark_theme p-5 shadow flex justify-between md:items-center md:justify-between h-20 ">
            <Link className="flex justify-between items-center" to="/">
                <span className="cursor-pointer text-white">BloomSterly</span>
            </Link>

            <ul
                className={`md:flex md:items-center md:z-auto md:static absolute bg-color_font_dark md:bg-dark_theme w-full left-0 md:w-auto
                md:py-0 px-4 md:pl-0 pl-7 md:opacity-100 transition-all ease-in duration-500 z-[-1]
                ${menu === faBars ? "top-[-400px] opacity-0" : "top-[80px] opacity-100"}`}
            >
                <li className="mx-4 my-6 md:my-0">
                    <ButtonNav text="Nosotros" />
                </li>
                <li className="mx-4 my-6 md:my-0">
                    <ButtonNav text="Servicios" href="/servicios" />
                </li>
                <li className="mx-4 my-6 md:my-0">
                    <ButtonNav text="Reservas" href="/pedidos" />
                </li>
            </ul>

            <div className="flex h-full justify-center">
                <ButtonNav href="/login" text="Iniciar sesión" />
                <span className="text-3xl cursor-pointer md:hidden block mx-2">
                    <FontAwesomeIcon
                        icon={menu}
                        onClick={toggleClick}
                        style={{ color: "#ffff", }}
                        size="xs"
                    />{" "}
                </span>
            </div>
        </nav>
    );
}

//Para evitar la redundancia se componetiza en ./buttons/buttonNav
/*<nav class="bg-white p-5 shadow flex justify-between md:items-center md:justify-between h-20 ">
        <DIv class="flex justify-between items-center">
            <span class="text-2xl font-[Merriweather] font-semibold cursor-pointer">
                <img src="https://s.tmimgcdn.com/scr/800x500/273600/plantilla-de-logotipo-de-flor-
                de-loto-de-belleza-ilustracion-vectorial-v3_273666-original.jpg" 
                class="h-50 inline">
                BloomSterly
            </span>
        </DIv>

        <ul class="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto
        md:py-0 px-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
            <li class="mx-4 my-6 md:my-0">
                <a href="#" class="text-xl hover:text-red-400 duration-500">Inicio</a>
            </li>
            <li class="mx-4 my-6 md:my-0">
                <a href="#" class="text-xl hover:text-red-400 duration-500">Nosotros</a>
            </li>
            <li class="mx-4 my-6 md:my-0">
                <a href="#" class="text-xl hover:text-red-400 duration-500">Servicios</a>
            </li>
            <li class="mx-4 my-6 md:my-0">
                <a href="#" class="text-xl hover:text-red-400 duration-500">Reservas</a>
            </li>
        </ul>
        <div class="flex h-full justify-center">
            <button class="bg-red-400 py-2 px-6 rounded-md mx-4  text-white font-[Poppins] hover:bg-red-500 ">
                Inicia Sesion
            </button>
            <span class="text-3xl cursor-pointer md:hidden block mx-2 inline">
                <ion-icon name="menu-outline" onclick="menu(this)"></ion-icon>
            </span>
        </div>
        
       

    <script>
        function menu(e){
            let list = document.querySelector('ul')
            e.name === 'menu' ? (e.name = "close",list.classList.add('top-[80px]'), list.classList.add('opacity-100')) 
            : (e.name = "menu",list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'))
            console.log(e)
        }
    </script>*/
