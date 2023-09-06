import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../../../hooks/useMediaQuery";


const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();

    return (
        <AnchorLink className={`${selectedPage === lowerCasePage ? "text-gold" : ""} hover:text-gold text-white transition duration-300`}
            href={`#${lowerCasePage}`}
            onClick={() => { setSelectedPage(lowerCasePage) }}
        >
            {page}
        </AnchorLink>
    )
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {

    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
    const navbarBackground = isTopOfPage ? "" :
        "bg-red"

    return (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-8`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-League-Spartan text-3xl font-bold">
                    scor32k
                </h4>

            {/* DESKTOP */}
            {
                isAboveMediumScreens ? 
                (
                    <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
                            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page="Skills" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page="Testimonials" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        </div>
                )
                :
                (
                    <button
                                className="rounded-full bg-red p-2 "
                                onClick={() => setIsMenuToggled(!isMenuToggled)}
                            >
                                clicl
                            </button>
                )
            }


            </div>
        </nav>
    )
}

export default Navbar;