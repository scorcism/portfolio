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
            <div className="z-30  mt-12 md:mt-32 ">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
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
                    <p className="mt-10  mb-7 text-md text-center md:text-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam repellat expedita quaerat?</p>
                </motion.div>

            </div>
            <motion.div style={{ cursor: "pointer" }} className="md:order-2 flex justify-center z-10  items-ceter" 
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