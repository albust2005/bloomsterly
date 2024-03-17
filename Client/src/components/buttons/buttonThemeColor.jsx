import { useToggleThemeContext } from "../providers/themeProvider"

export function ThemeColor() {

    //se obtiene el objeto con las funciones desde useToggleThemeContext
    const themeFunctions = useToggleThemeContext()

    return (
        <div className='fixed bottom-20 right-0 w-auto h-auto dark:b z-10'>
            <button className=" border-solid rounded border-2 border-yellow-500 hover:border-yellow-300 
            bg-trasparent dark:bg-second_color_lt dark:border-second_color_lt
            w-6 h-6 celular:w-8 celular:h-8"
                onClick={themeFunctions.handleChangeDark}
            >
                <img src="../src/assets/img/light_theme.webp" alt="" />
            </button>
            <div className="border-solid rounded border-2 border-yellow-500 
             bg-color_switch_theme_dark dark:bg-transparent dark:border-second_color_lt 
             w-6 h-6 celular:w-8 celular:h-8"
                onClick={themeFunctions.handleChangeLight}
            >
                <img src="../src/assets/img/dark_theme.webp" alt="" />
            </div>
        </div>
    )
}