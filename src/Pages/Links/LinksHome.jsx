import { motion } from "framer-motion";
import { links } from "./assets/links";
import { languages } from "./assets/skills";


const LinksHome = () => {
    return (
        <div className="min-h-[100vh] flex flex-col">
            <section className="meta mb-1 flex py-5 items-center justify-center text-center flex-col bg-black/90 " style={{
                borderBottomLeftRadius: "1.5rem",
                borderBottomRightRadius: "1.5rem"
            }}>
                <motion.h1
                    initial={{
                        y: -30,
                        opacity: 0
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 0.3
                    }}
                    className="text-5xl font-semibold">Abhishek Pathak</motion.h1>
                <div className="languages sm:w-[80%] px-3 flex my-5 flex-row gap-4 flex-wrap items-center justify-center">
                    {languages && languages.map((lang) => (
                        <motion.p key={lang} className="border border-1 border-white py-[3px] px-[5px] rounded-sm hover:bg-gray transition duration-250"

                        >{lang}</motion.p>
                    ))}
                </div>
            </section>
            <section className="links mt-1 flex py-5 pb-10 items-center justify-centerc flex-col bg-black/70"
                style={{
                    borderTopLeftRadius: "1.5rem",
                    borderTopRightRadius: "1.5rem"
                }}
            >
                {
                    links && links.map((link) => (
                        <p key={link.id} className="flex flex-row gap-5 my-3 border-2 border-white/60 items-center justify-center py-2 px-3 xs:w-[400px]  sm:w-[600px] text-base rounded-3xl text-white/90 hover:bg-gray transition duration-300">
                            <motion.span
                                transition={{
                                    duration: 0.3
                                }}
                                whileHover={{
                                    rotate: +360,
                                    scale: 1.5,
                                }}
                            >
                                <a href={link.url} target="_blank" rel="noopener noreferrer">{link.icon}</a>
                            </motion.span>
                            <a href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a></p>
                    ))
                }
            </section>
        </div>
    )
}


export default LinksHome;