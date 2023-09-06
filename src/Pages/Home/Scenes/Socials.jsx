import { motion } from "framer-motion";

const Socials = () => {
    return (
        <section id="contact" className="pt-7 pb-7 md:flex w-full items-center justify-center font-Poppins text-xl gap-10">
            <h2 className="text-2xl font-Poppins ">Contacts: </h2>
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
        </section>
    )
}

export default Socials;