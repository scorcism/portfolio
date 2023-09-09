import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { Link } from "react-router-dom";

const HeaderLink = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();

    return (
        <AnchorLink className={`${selectedPage === lowerCasePage ? "text-gold" : ""} hover:text-gold text-white transition duration-300
        border-b-[1px] border-transparent
                hover:border-white
        `}
            href={`#${lowerCasePage}`}
            onClick={() => { setSelectedPage(lowerCasePage) }}
        >
            {page}
        </AnchorLink>
    )
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {

    const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");

    return (
        <nav className={`z-40 w-full fixed top-0 py-5  mb-3`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-League-Spartan text-3xl font-bold
                
                ">
                    scor32k
                </h4>

                {/* DESKTOP */}
                {
                    isAboveMediumScreens ?
                        (
                            <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
                                <HeaderLink page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <HeaderLink page="about" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <HeaderLink page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link to={"/blogs"} className=" hover:text-red-800 text-white transition duration-300
        border-b-[1px] border-transparent hover:border-white cursor-pointer">Blogs</Link>
                                <HeaderLink page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            </div>
                        )
                        :
                        (
                            <button
                                className="rounded-md bg-red p-2 border-2 
                                py-2 px-5
                                hover:text-gold
                                transition duration-200
                                "
                            >
                                Blogs
                            </button>
                        )
                }


            </div>

        </nav>
    )
}

export default Navbar;