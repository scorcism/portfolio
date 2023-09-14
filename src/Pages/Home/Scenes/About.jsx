import useMediaQuery from "../../../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import HomeContext from "../Context/HomeContext";

const About = ({ setSelectedPage }) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    const ref = useRef(null);

    const constraintsRef = useRef(null);

    const { textEnter, textLeave } = useContext(HomeContext)

    useEffect(() => {
        setSelectedPage(ref.current.id)
    }, [])



    return (
        <section id="about" ref={ref} className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">
            <div className="z-30 md:w-1/2  mt-12 md:mt-32 ">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    exit={{
                        opacity: 0,
                        x:-50
                    }}
                >
                    <p className="text-6xl font-playfair z-10 text-center md:text-start text-white">
                        about {""}
                        <motion.span
                            whileHover={{ letterSpacing: "4px" }}
                            className="xs:relative xs:text-deep-blue font-semibold z-20 text-gold
                            "
                            onMouseEnter={textEnter}
                            onMouseLeave={textLeave}
                        >Abhishek</motion.span>
                    </p>
                    <p className="mt-10  mb-7 text-md text-center text-lg md:text-start">Hey! this is Abhishek Pathak. <br/>I’m a Developer who likes to always keep learning. I look forward to waking up early each day and devote most of my time into learning. I take some time off in between to watch movies or connect to my friends. But mostly, I’d be at my desk, immersed into my laptop.<br/>I'm most happy to help you.</p>

                    <p className="border-2 mt-2 border-red-900 w-fit py-2 px-2 cursor-pointer bg-red-800 rounded-sm hover:border-black transition duration-500"><a href="mailto:abhishekpathak1720@gmail.com" target="_blank">Contact me</a></p>
                </motion.div>

            </div>
            <motion.div style={{ cursor: "pointer" }} className="md:order-2 md:w-1/2 flex justify-center z-10  items-ceter"
            >
                {/* ref={constraintsRef} */}
                <motion.div className="relative z-0 " >
                    <motion.img
                        // drag dragConstraints={constraintsRef}
                        src="assets/profile-image.png" alt="profile" className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]" />
                </motion.div>

            </motion.div>

        </section>
    )
}

export default About;