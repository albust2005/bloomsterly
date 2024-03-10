
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faLinkedin, faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
    return (
        <footer className="flex flex-col w-full mt-auto gap-2 px-5 md:px-16 lg:px-24 2xl:px-64 py-5 bg-transparent dark:bg-second_color_lt ">
            <article className="flex w-full justify-center gap-3 items-center">
                <div className="bg-white border-white w-full h-0.5 rounded-sm m-2"></div>
                <div className="flex gap-3 text-white justify-center p-2">
                    <FontAwesomeIcon icon={faGithub} style={{ color: "#ffffff", }} size="lg" />
                    <FontAwesomeIcon icon={faInstagram} style={{ color: "#ffffff", }} size="lg" />
                    <FontAwesomeIcon icon={faFacebook} style={{ color: "#ffffff", }} size="lg" />
                    <FontAwesomeIcon icon={faLinkedin} style={{ color: "#ffffff", }} size="lg" />
                </div>
                <div className="bg-white border-white w-full h-0.5 rounded-sm m-2"></div>
            </article>
            <article className="flex flex-col place-content-center m-auto items-center">
                <h1 className="font-bloomsterly text-4xl text-white">BloomSterly</h1>
                <small className="text-white">Copyright 2024 nombregroup</small>
            </article>
        </footer>
    )
}