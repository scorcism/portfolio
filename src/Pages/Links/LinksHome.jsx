import { motion } from "framer-motion";
import { links } from "./assets/links";
import { FaAlignJustify, FaAsterisk } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";




const LinksHome = () => {

    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);


    return (
        <div className="min-h-[100vh] flex flex-col m-3">
            <section className="relative meta mb-1 flex py-5 items-center justify-center text-center flex-col bg-black/90 "
                style={{
                    borderBottomLeftRadius: "1.5rem",
                    borderBottomRightRadius: "1.5rem",
                    borderTopRightRadius: "0.8rem",
                    borderTopLeftRadius: "0.8rem",
                }}
            >
                <motion.h1
                    initial={{
                        y: -30,
                        opacity: 0
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 0.3
                    }}
                    className="text-5xl font-semibold px-1">Abhishek Pathak</motion.h1>
                <div className="languages sm:w-[80%] px-3 flex my-5 gap-4 flex-wrap items-center justify-center flex-col">
                    <p>
                        Hey! this is Abhishek Pathak. I’m a graduate who likes to always keep learning. <br />I look forward to waking up early each day and devote most of my time into learning. <br />I take some time off in between to watch movies or connect to my friends. But mostly, I’d be at my desk, immersed into my laptop.
                    </p>
                </div>
                <div className="absolute sm:top-10 sm:right-10 xs:top-8 xs:right-0">
                    <button
                        className="rounded-full bg-red p-2 text-xl"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <FaAlignJustify />
                    </button>
                </div>
            </section>

            <section className="links mt-1 flex py-5 pb-10 items-center justify-centerc flex-col bg-black/70 px-2"
                style={{
                    borderTopLeftRadius: "1.5rem",
                    borderTopRightRadius: "1.5rem",
                    borderBottomLeftRadius: "0.5rem",
                    borderBottomRightRadius: "0.5rem",
                }}
            >
                {
                    links && links.map((link) => (
                        <p key={link.id} className="flex flex-row gap-5 my-3 border-2 border-white/60 items-center justify-center py-2 px-3 xs:w-[350px] sm:w-[600px] text-base rounded-3xl text-white/90 hover:bg-gray transition duration-300 mx-2">
                            <motion.span
                                transition={{
                                    duration: 0.3
                                }}
                                whileHover={{
                                    rotate: +360,
                                    scale: 1.5,
                                }}
                            >
                                <a href={link.url} target="_blank" rel="noopener noreferrer">{link.icon}</a>
                            </motion.span>
                            <a href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a></p>
                    ))
                }

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

                            className="fixed right-0 bottom-0 h-full bg-black/80 w-[200px]">
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

                                className="flex flex-col gap-10 ml-[25%] text-2xl text-red-700 ">

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
            </section>


            {

            }

        </div>
    )
}


export default LinksHome;