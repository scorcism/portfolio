import { motion } from "framer-motion";

const Socials = () => {
    return (
        <section id="contact" className="pt-1 pb-1 flex flex-col w-full items-center justify-center font-Poppins text-xl gap-3">
            <motion.h2 className="text-2xl font-Poppins "

                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 }
                }}
            >Contacts: </motion.h2>
            <motion.div className="flex flex-row gap-12 mb-2"
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: +50 },
                    visible: { opacity: 1, y: 0 }
                }}
            >

                <motion.a 
                transition={{
                    duration: 0.2
                }}
                whileHover={{ scale: 1.2, rotate: 360, borderRadius:"50%" }}
                className="hover:opacity-50 transition duration-500" href="#"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src="assets/linkedin.png" alt="linkedin" />
                </motion.a>
                <motion.a
                    transition={{
                        duration: 0.2
                    }}
                    whileHover={{ scale: 1.2, x: +10, y: -30, color:"blue" }}
                    className="hover:opacity-50 transition duration-500" href="#"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src="assets/twitter.png" alt="twitter" />
                </motion.a>
                <motion.a
                    transition={{
                        duration: 0.2
                    }}
                    whileHover={{ scale: 1.2, rotate: -360 }}
                    className="hover:opacity-50 transition duration-500" href="#"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src="assets/facebook.png" alt="facebook" />
                </motion.a>
                <motion.a
                    transition={{
                        duration: 0.2
                    }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="hover:opacity-50 transition duration-500" href="#"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src="assets/instagram.png" alt="instagram" />
                </motion.a>
            </motion.div>
        </section>
    )
}

export default Socials;