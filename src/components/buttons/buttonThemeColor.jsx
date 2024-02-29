import { useEffect, useState } from "react"

export function ThemeColor (){

        // Cambio al tema dep la config del sistema
        const [theme, setTheme]= useState(() => {
            if (window.matchMedia("(prefers-color-scheme: dark)").matches){
                return "dark"
            }
                return "light"
        })

        //Cambio de tema dep de la persona
        useEffect(() => {
            if (theme == "dark"){
                document.querySelector("html").classList.add("dark")
            } else {
                document.querySelector("html").classList.remove("dark")
            }
        }, [theme]) 
    
    

     //boton dark_theme
        const handleChangeDark = () => {
            setTheme (prevTheme => prevTheme == "dark" ? "dark" : "dark")
        }

    //boton light_theme
        const handleChangeLight = () => {
            setTheme (prevTheme => prevTheme == "light" ? "light" : "light")
        }

    return (
        <div className='fixed bottom-20 right-0 w-auto h-auto dark:b'>
            <button className="w-10 h-10 border-solid rounded border-2 border-yellow-500 hover:border-yellow-300 
            bg-trasparent dark:bg-second_color_lt dark:border-second_color_lt"
            onClick={handleChangeDark}
            >
                <img src="../src/assets/img/light.theme_1.png" alt="" 
                className="flex justify-center "/>
            </button>
            <div className="w-10 h-10 border-solid rounded border-2 border-yellow-500 
             bg-color_switch_theme_dark dark:bg-transparent dark:border-second_color_lt "
            onClick={handleChangeLight}
            >
                <img src="../src/assets/img/dark_theme.png" alt="" />
            </div>
        </div>
    )
}