import { motion, useScroll, useTransform } from "framer-motion";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { useContext, useEffect, useState } from "react";
import HomeContext from "../Context/HomeContext";

const Landing = ({ setSelectedPage }) => {

    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    let onHover = "red"


    const { whoami, cursorSize, variants, cursorVarient, textEnter, textLeave } = useContext(HomeContext);
    let abhishek = whoami.split("");




    useEffect(() => {
        setSelectedPage("home")
    }, [])



    return (
        <section id="home" className="relative flex justify-center flex-col gap-5 items-center w-[100%] h-screen
                "
            style={{
                cursor: "none"
            }}
        >
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true, amount: 0.5
                }}
                transition={{ duration: 0.5 }}
                variants={variants}
            >
                <div onMouseEnter={textEnter} onMouseLeave={textLeave} className="text-5xl sm:text-9xl font-League-Spartan capitalize flex gap-1 justify-between">
                    {
                        isAboveMediumScreens ?
                            <motion.span
                                initial="left"
                                transition={{
                                    delay: 0.6, duration: 0.3,
                                }}
                                whileInView="bounce"
                                variants={{
                                    left: { x: -60 },
                                    bounce: { x: 0 }
                                }}
                            >
                                S
                            </motion.span>
                            :
                            <h1>
                                S
                            </h1>
                    }
                    <motion.h1
                        initial={{
                            opacity: 0,
                            x: -20,
                        }}
                        transition={{
                            delay: 0.7,
                            duration: 0.1,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                    >
                        COR

                    </motion.h1>
                    <motion.h1
                        initial={{
                            opacity: 0,
                            x: +20,
                        }}
                        transition={{
                            delay: 0.9,
                            duration: 0.2,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                    >
                        CIS
                    </motion.h1>
                    {
                        isAboveMediumScreens ?
                            <motion.span
                                initial={{
                                    x: +60,
                                    color: "red"
                                }}
                                transition={{
                                    delay: 1, duration: 0.2
                                }}
                                whileInView={{
                                    x: 0,
                                    color: "white"
                                }}
                            >
                                M
                            </motion.span>
                            :
                            <h1>
                                M
                            </h1>
                    }
                </div>

            </motion.div>
            <motion.div
                initial={{
                    x: +100,
                    color: "#2c3333"
                }}
                transition={{
                    delay: 1.9,
                    duration: 0.4
                }}
                whileInView={{
                    x: 0,
                    color: "#ffffdd"

                }}
                className={`h-1 text-2xl`}
            >
                <motion.p

                    whileHover={{
                        letterSpacing: "2px",
                    }}
                >
                    Learner | Developer
                </motion.p>
            </motion.div>

            <motion.div className="cursor" style={{
                backgroundColor: "#ffffdd",
                height: `${cursorSize.h}px`,
                width: `${cursorSize.w}px`,
                borderRadius: "50%",
                position: "fixed",
                top: "0",
                left: "0",
                pointerEvents: "none"
            }}
                variants={variants}
                animate={cursorVarient}
            />
            <motion.div
                initial={{
                    x: -10,
                    opacity: 0,
                    color: "#2c3333"
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                    color: "#383838"
                }}
                transition={{
                    duration: 0.3,
                    delay: 1.9
                }}

                className="absolute bottom-0 right-0 font-League-Spartan opacity-10"
            >
                <motion.h1
                    className="flex flex-row sm:text-9xl text-7xl"
                >
                    {
                        abhishek.map((a) => {
                            return <motion.span
                                key={a}
                                whileHover={{
                                    color: `${onHover}`,
                                    y: -10
                                }}
                                transition={{
                                    duration: 0.2
                                }}
                            >
                                {a.toLowerCase()}
                            </motion.span>
                        })
                    }
                </motion.h1>
            </motion.div>


        </section>
    )
}

export default Landing;