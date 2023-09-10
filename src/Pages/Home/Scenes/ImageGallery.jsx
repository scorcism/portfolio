import { motion } from "framer-motion";
import { useContext } from "react";
import HomeContext from "../Context/HomeContext";
import Crousal from "../Components/Crousal";
import Line from "../Components/Line";


const ImageGallery = () => {

    const {textEnter, textLeave} = useContext(HomeContext);

    return (
        <section className="md:flex md:justify-between md:items-center md:h-full gap-16 py-20 ">
            <div className="z-30  mt-12 md:mt-32 basis-1/2">
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
                        
                        <motion.span
                            whileHover={{ letterSpacing: "4px" }}
                            className="xs:relative xs:text-deep-blue font-semibold z-20 text-gold
                            "
                            onMouseEnter={textEnter}
                            onMouseLeave={textLeave}
                        >Gallery</motion.span>
                    </p>
                    <p className="mt-10  mb-7 text-md text-center md:text-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam repellat expedita quaerat?</p>
                </motion.div>

            </div>
            <div className='flex justify-center items-center flex-col basis-1/2 '>

                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    transition={{
                        duration: 0.2
                    }}
                    whileInView={{
                        opacity: 1
                    }}
                >
                    <Crousal />
                </motion.div>

            </div>
        </section>
    )
}
export default ImageGallery;