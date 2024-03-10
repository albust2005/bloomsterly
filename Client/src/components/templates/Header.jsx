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
        <nav className="bg-transparent px-5 md:px-16 lg:px-24 2xl:px-64 flex justify-between items-center h-20 dark:bg-transparent dark:shadow-[#f7e6d5]">
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
                <span className="border-2 rounded-lg border-solid border-purple-900">
                    <ButtonNav href="/login" text="Iniciar sesión" />
                </span>
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
