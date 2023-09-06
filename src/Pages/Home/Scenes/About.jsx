import useMediaQuery from "../../../hooks/useMediaQuery";
import { motion } from 'framer-motion'
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocalMediaIcons from "../Components/SocialMediaIcons";
import { useEffect } from "react";

const About = ({ setSelectedPage }) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    return (
        <section id="about" className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">
            <div className="z-30 basis-2/5 mt-12 md:mt-32 ">
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
                    <p className="text-6xl font-playfair z-10 text-center md:text-start text-gold">
                        Abhishek {""}
                        <span
                            className="xs:relative xs:text-deep-blue font-semibold z-20 text-white
                            "
                        >Pathak</span>
                    </p>
                    <p className="mt-10  mb-7 text-md text-center md:text-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam repellat expedita quaerat?</p>
                </motion.div>

            </div>
            <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
                {isAboveMediumScreens ?
                    (<div className="relative z-0 ml-20">
                        <img src="assets/profile-image.png" alt="profile" className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]" />
                    </div>)
                    :
                    (<div>
                        <img src="assets/profile-image.png" alt="profile" className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]" />
                    </div>)
                }
            </div>

        </section>
    )
}

export default About;