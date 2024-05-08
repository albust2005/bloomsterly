//importaciones propias de proyecto
import { ButtonNav } from "../buttons/buttonNav";
//importación del ícono para el perfil del administrador
import { IconUser } from "../../pages/administrador/templates/iconUser";
//importaciones de dependencias
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { useThemeContext } from "../providers/themeProvider";
import { useLoginUserContext, useUserContext } from "../providers/userProvider";

export function Header() {
    const location = useLocation()
    const { sesionUser } = useUserContext()
    const { logout } = useLoginUserContext()

    const scrollToSection = () => {
        const elemento = document.getElementById('nosotros');
        elemento.scrollIntoView({ behavior: 'smooth' });
    }

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

    if (location?.pathname === '/login') {
        return null
    }

    if (location?.pathname === '/registroEmpresa') {
        return null
    }

    let route = "/"
    if (sesionUser?.Rol === "Empresa") {
        route = "/empresa"
    }
    if (sesionUser?.Rol === "Administrador") {
        route = "/administrador"
    }

    

    return (
      <nav className="bg-transparent flex justify-between items-center h-20 dark:bg-transparent dark:shadow-[#f7e6d5] z-10 ">
        <Link className="flex w-full items-center" to={route}>
          <div className="flex w-full h-full items-end gap-1">
            <span className="cursor-pointer dark:text-red-600 text-white font-bloomsterly text-3xl">
              BloomSterly
            </span>
            <img
              src="../src/assets/flor_img/lirioblanco.webp"
              alt=""
              className="h-10 aspect-auto object-cover rotate-180"
            />
          </div>
        </Link>

        <div
          className={`dark:bg-nav_light_theme md:dark:bg-transparent bg-color_font_dark md:bg-transparent 
                    flex flex-col px-4 md:flex-row md:px-0 md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 
                    md:pl-0 pl-7 md:opacity-100 duration-75 md:duration-0 z-10
                    ${
                      menu === faBars
                        ? "top-[-400px] opacity-0"
                        : "top-[80px] opacity-100"
                    }`}
        >
          {!sesionUser && (
            <div className="flex flex-col md:flex-row">
              <button onClick={scrollToSection}>
                <ButtonNav text="Nosotros" />
              </button>
              <ButtonNav text="Servicios" href="/categorias" />
              <ButtonNav text="Reservas" href="/reservas" />
            </div>
          )}
          {sesionUser?.Rol === "Cliente" && (
            <div className="flex flex-col md:flex-row">
              <ButtonNav text="Nosotros" href="#nosotros" />
              <ButtonNav text="Servicios" href="/categorias" />
              <ButtonNav text="Reservas" href="/reservas" />
            </div>
          )}
          {sesionUser?.Rol === "Empresa" && (
            <div className="flex flex-col md:flex-row">
              <ButtonNav text="Clientes" href={"empresa/reserva"} />
              <ButtonNav text="Servicios" href="empresa/servicios" />
              <ButtonNav text="Perfil" href="empresa/perfil" />
            </div>
          )}
          {sesionUser?.Rol === "Administrador" && (
            <div className="flex flex-col md:flex-row">
              <ButtonNav text="Clientes" href="/administrador/clientes" />
              <ButtonNav text="Empresas" href="/administrador/empresas" />
              <ButtonNav
                text="Administradores"
                href="/administrador/administradores"
              />
              <ButtonNav text="Solicitudes" href="/administrador/solicitudes" />
            </div>
          )}
        </div>

        <div className="flex flex-row-reverse w-full gap-7">
          {sesionUser ? (
            <>
              <button onClick={logout}>
                <ButtonNav text="Cerrar sesión"></ButtonNav>
              </button>
              <IconUser 
              clasName="h-6 cursor-pointer  bg-transparent hover:bg-purple-900 px-6 py-5 md:py-1 rounded-lg hover:ease-in-out duration-300 z-10 dark:text-second_color_lt hover:dark:bg-[#ebd1b8]" 
              href={`/perfil`} 
              />
            </>
          ) : sesionUser === null ? (
            <ButtonNav href="/login" text="Iniciar sesión" />
          ) : (
            <button onClick={logout}>
              <ButtonNav text="Cerrar sesión"></ButtonNav>
            </button>
          )}

          <span className="text-3xl cursor-pointer md:hidden block dark:fill-black">
            <FontAwesomeIcon
              icon={menu}
              onClick={toggleClick}
              style={{ color: logoColor }}
              size="xs"
            />
          </span>
        </div>
      </nav>
    );


}

//Para evitar la redundancia se componetiza en ./buttons/buttonNav
