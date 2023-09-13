import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { Link } from "react-router-dom";
import { FaAlignJustify, FaAsterisk } from "react-icons/fa";
import { motion } from "framer-motion";


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
    const [isMenuToggled, setIsMenuToggled] = useState(false);


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
                                <Link to={"https://dev.to/scorcism/"} target="_blank" className=" hover:text-red-600 text-white transition duration-300
        border-b-[1px] border-transparent hover:border-white cursor-pointer">Blogs</Link>
                                <Link to={"/gallery"} className=" hover:text-red-600 text-white transition duration-300
        border-b-[1px] border-transparent hover:border-white cursor-pointer">Gallery</Link>
                                <Link to={"/links"} className=" hover:text-red-600 text-white transition duration-300
        border-b-[1px] border-transparent hover:border-white cursor-pointer">Links</Link>
                                <HeaderLink page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            </div>
                        )
                        :
                        (
                            <button
                                className="rounded-full bg-red p-2 "
                                onClick={() => setIsMenuToggled(!isMenuToggled)}
                            >
                                <FaAlignJustify />
                            </button>
                        )
                }

                {/* MOBILE MENU POPUP */}
                {
                    !isAboveMediumScreens && isMenuToggled && (
                        <motion.div
                            initial={{
                                x: +60,
                                opacity: 0
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                duration: 0.2
                            }}

                            className="fixed right-0 bottom-0 h-full bg-black/90 w-[200px]">
                            {/* CLOSE ICON */}
                            <div className="flex justify-end p-12">
                                <button onClick={() => {
                                    setIsMenuToggled(!isMenuToggled)
                                }}>
                                    <FaAsterisk />
                                </button>
                            </div>

                            {/* MENU ITEMS */}
                            <motion.div
                                initial={{
                                    x: +60,
                                    opacity: 0
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                transition={{
                                    duration: 0.3,
                                    delay: 0.2
                                }}

                                className="flex flex-col gap-10 ml-[33%] text-2xl text-red-700 ">

                                <Link to={"https://dev.to/scorcism/"} target="_blank" className=" hover:text-red-600 text-white transition duration-300
        border-b-[1px] border-transparent hover:border-white cursor-pointer">Blogs</Link>
                                <Link to={"/gallery"} className=" hover:text-red-600 text-white transition duration-300
        border-b-[1px] border-transparent hover:border-white cursor-pointer">Gallery</Link>
                                <Link to={"/links"} className=" hover:text-red-600 text-white transition duration-300
        border-b-[1px] border-transparent hover:border-white cursor-pointer">Links</Link>
                                <HeaderLink page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            </motion.div>
                        </motion.div>
                    )
                }

            </div>

        </nav>
    )
}

export default Navbar;