import { Header } from "./Header";
import { Footer } from "./Footer"

export function Layaout({ children }) {

    return (
        <main 
        className="bg-dark_theme flex flex-col gap-20 dark:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
        from-[#F5E1CE] via-[#EEDAC7] to-[#83786D]"
        >
            <Header></Header>
            {children}
            <Footer></Footer>   
        </main>
    )

}