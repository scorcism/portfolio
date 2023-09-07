import { motion, useScroll, useTransform } from "framer-motion";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { useEffect, useState } from "react";

const Landing = ({ setSelectedPage }) => {

    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });

    const [cursorVarient, setCursorVarient] = useState("default")

    useEffect(() => {
        const mouseMoveFunction = e => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener("mousemove", mouseMoveFunction)

        return () => {
            window.removeEventListener("mousemove", mouseMoveFunction)
        }
    }, [])

    useEffect(() => {
        setSelectedPage("home")
    }, [])

    const variants = {
        default: {
            x: mousePosition.x - 10,
            y: mousePosition.y - 10
        },
        text: {
            x: mousePosition.x - 35,
            y: mousePosition.y - 35,
            height: 70,
            width: 70,
            backgroundColor: "#2c3333",
            mixBlendMode: "difference"
        }
    }

    const textEnter = () => {
        setCursorVarient("text")
    }
    const textLeave = () => {
        setCursorVarient("default")
    }


    return (
        <section id="home" className="flex justify-center flex-col gap-5 items-center w-[100%] h-screen"
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
                variants={{
                    hidden: { opacity: 0, scale: 0 },
                    visible: { opacity: 1, scale: 1 }
                }}
            >
                <div onMouseEnter={textEnter} onMouseLeave={textLeave} className="text-5xl sm:text-9xl font-League-Spartan capitalize flex gap-1 justify-between">
                    {
                        isAboveMediumScreens ?
                        <motion.span
                            initial="left"
                            transition={{
                                delay: 0.5, duration: 0.2,
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

                    <h1
                    >
                        COR

                    </h1>
                    <h1>
                        CIS
                    </h1>
                    {
                        isAboveMediumScreens ?


                        <motion.span
                            initial={{
                                x: 0
                            }}
                            transition={{
                                delay: 0.7, duration: 0.3
                            }}
                            whileInView={{
                                x: +60, opacity: 0,
                                color: "red"
                            }}
                        >
                            M
                        </motion.span>
                        :
                        <h1>
                            M
                        </h1>
                    }
                    {
                        isAboveMediumScreens &&
                        <motion.span
                            initial={{
                                opacity: 0,
                                color: "red"
                            }}
                            transition={{
                                delay: 1.2,
                                duration: 0.3
                            }}
                            whileInView={{
                                x: -110,
                                opacity: 1,
                                color: "#ffffdd"
                            }}
                        >
                            M
                        </motion.span>
                    }
                </div>

            </motion.div>
            <motion.div
                initial={{
                    x: -100,
                    color: "#2c3333"
                }}
                transition={{
                    delay: 1.5,
                    duration: 0.4
                }}
                whileInView={{
                    x: 0,
                    color: "#ffffdd"

                }}
                whileHover={{
                    letterSpacing: "2px",
                }}
                className={`h-1 text-2xl`}
            >
                Learner | Developer
            </motion.div>

            {/* <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true, amount: 0.5
                }}
                transition={{ duration: 0.5, delay: 0.6 }}
                variants={{
                    hidden: { opacity: 0, x: -50, },
                    visible: { opacity: 1, x: 0 }
                }}
            >
                <h3 className="md:text-xl">Abhishek Pathak</h3>
            </motion.div> */}
            <motion.div className="cursor" style={{
                backgroundColor: "#ffffdd",
                height: "20px",
                width: "20px",
                borderRadius: "50%",
                position: "fixed",
                top: "0",
                left: "0",
                pointerEvents: "none"
            }}
                variants={variants}
                animate={cursorVarient}
            />


        </section>
    )
}

export default Landing;