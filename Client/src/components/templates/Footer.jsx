
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faLinkedin, faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

export function Footer({theme}) {

    const [logoColor, setLogoColor] = useState("#fff")
    
    useEffect(()=>{
        setLogoColor(theme === 'dark' ? '#BC0B38' : '#fff')
    },[theme])

    return (
        <footer className="flex flex-col w-full mt-auto gap-2 py-5 bg-transparent dark:bg-transparent dark:text-second_color_lt">
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