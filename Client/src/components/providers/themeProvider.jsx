import { useState, useEffect, createContext, useContext } from "react";

//creacion de los contextos 
const themeContext = createContext()
const toggleThemeContext = createContext()

//creamos dos custom hooks para evitar estar importando useContext()
export const useThemeContext = () =>{
    return useContext(themeContext)
}

export const useToggleThemeContext = () =>{
    return useContext(toggleThemeContext)
}

//Componente encargado de renderizar y esparcir el estado a todos los componentes hijos
export function ThemeProvider({ children }) {

    //se aplica la logica para cambiar de tema 
    //creamos un nuevo estado que luego lo agregaremos al contexto
    const [theme, setTheme] = useState(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return "dark"
        }
        return "light"
    })

    //use effect para hacer el cambio de tema al elemento html 
    //usando como dependencia cada que cambie el theme
    useEffect(() => {
        if (theme == "dark") {
            document.querySelector("html").classList.add("dark")
        } else {
            document.querySelector("html").classList.remove("dark")
        }
    }, [theme])

    //creamos un objeto con las funciones que cambian de tema
    //se pasa en un objeto para poder pasarle esta al context
    const themeFunctions = {
        handleChangeDark : () =>{
            setTheme(prevTheme => prevTheme == "dark" ? "dark" : "dark")
        },

        handleChangeLight : () =>{
            setTheme(prevTheme => prevTheme == "light" ? "light" : "light")
        }
    }

    //renderizamos los contextos que proporcionan el valor actual 
    //este value se actualiza con la logica anterior 
    //usando el prop children esta informacion se esparcira en todos los elementos hijos
    return (
        <themeContext.Provider value={theme}>
            <toggleThemeContext.Provider value={themeFunctions}>
                {children}
            </toggleThemeContext.Provider>
        </themeContext.Provider>
    )
}

