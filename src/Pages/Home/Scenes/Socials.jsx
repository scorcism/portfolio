import { motion } from "framer-motion";

const Socials = () => {
    return (
        <section id="contact" className="pt-3 pb-3 flex flex-col w-full items-center justify-center font-Poppins text-xl gap-10">
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
            <motion.div className="flex flex-row gap-12"
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: +50 },
                    visible: { opacity: 1, y: 0 }
                }}
            >

                <a className="hover:opacity-50 transition duration-500" href="#"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src="assets/linkedin.png" alt="linkedin" />
                </a>
                <a className="hover:opacity-50 transition duration-500" href="#"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src="assets/twitter.png" alt="twitter" />
                </a>
                <a className="hover:opacity-50 transition duration-500" href="#"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src="assets/facebook.png" alt="facebook" />
                </a>
                <a className="hover:opacity-50 transition duration-500" href="#"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src="assets/instagram.png" alt="instagram" />
                </a>
            </motion.div>
        </section>
    )
}

export default Socials;