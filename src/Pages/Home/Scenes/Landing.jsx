import { motion } from "framer-motion";
import useMediaQuery from "../../../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useEffect, useState } from "react";

const Landing = ({setSelectedPage}) => {

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

    useEffect(()=>{
        setSelectedPage("home")
    },[])

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
            backgroundColor:"#2c3333",
            mixBlendMode:"difference"
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
                  cursor:"none"  
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
                <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className="text-5xl sm:text-9xl font-League-Spartan capitalize">SCORCISM</h1>

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