import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

import { useThemeContext } from "../providers/themeProvider";

export function Footer() {

    const theme = useThemeContext()
    const logoColor = theme === 'dark' ? '#BC0B38' : '#fff'

    return (
        <footer className="flex flex-col w-full mt-auto gap-2  bg-transparent dark:bg-transparent text-white dark:text-second_color_lt z-10">
            <article className="flex w-full justify-center gap-3 items-center">
                <div className="bg-white dark:bg-second_color_lt *: w-full h-0.5 rounded-sm m-2"></div>
                <div className="flex gap-3 justify-center p-2">
                    <FontAwesomeIcon icon={faGithub} style={{ color: logoColor, }} size="lg" />
                    <FontAwesomeIcon icon={faInstagram} style={{ color: logoColor, }} size="lg" />
                    <FontAwesomeIcon icon={faFacebook} style={{ color: logoColor, }} size="lg" />
                    <FontAwesomeIcon icon={faLinkedin} style={{ color: logoColor, }} size="lg" />
                </div>
                <div className="bg-white dark:bg-second_color_lt w-full h-0.5 rounded-sm m-2"></div>
            </article>
            <article className="flex flex-col place-content-center m-auto items-center">
                <h1 className="font-bloomsterly text-4xl">BloomSterly</h1>
                <small className="">Copyright 2024 nombregroup</small>
            </article>
        </footer>
    )
}