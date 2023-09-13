import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaAlignJustify, FaAsterisk } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);

    return (
        <nav className="fixed top-0 z-40 w-full h-16 mb-4 py-3 bg-black/50">
            <div className="relative flex justify-center items-center px-5">
                <motion.h1 whileHover={{
                    letterSpacing: "2px",
                    color: "red"
                }}
                    transition={{
                        duration: 0.2
                    }}
                    className="text-4xl font-Satisfy font-semibold ">Gallery</motion.h1>
                <div className="absolute sm:top-3 sm:right-5 xs:top-2 xs:right-0">
                    <button
                        className="rounded-full bg-red p-2 text-xl"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <FaAlignJustify />
                    </button>
                </div>            </div>

            {/* MOBILE MENU POPUP */}
            {
                isMenuToggled && (
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

                        className="fixed z-50 right-0 bottom-0 h-full bg-black/80 w-[200px]">
                        {/* CLOSE ICON */}
                        <div className="flex justify-end p-12 text-2xl">
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

                            className="flex z-50 flex-col gap-10 ml-[25%] text-2xl text-red-700 ">

                            <Link to={"/"} className=" hover:text-red-600 text-white transition duration-300
             cursor-pointer">Home</Link>
                            <Link to={"https://dev.to/scorcism/"} target="_blank" className=" hover:text-red-600 text-white transition duration-300
             cursor-pointer">Blogs</Link>
                            <Link to={"/gallery"} className=" hover:text-red-600 text-white transition duration-300
             cursor-pointer">Gallery</Link>
                            <Link to={"/links"} className=" hover:text-red-600 text-white transition duration-300
             cursor-pointer">Links</Link>
                        </motion.div>
                    </motion.div>
                )
            }

        </nav>
    )
}

export default Header;