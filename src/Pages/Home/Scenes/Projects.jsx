import { motion } from 'framer-motion';
import Line from '../Components/Line';
import { projects } from '../assets/projects-data'
import { useEffect, useRef } from 'react';

const container = {
    hidden: {

    },
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const projectVarient = {
    hidden: {
        opacity: 0, scale: 0.8
    },
    visible: {
        opacity: 1, scale: 1
    }
}



const Project = ({ title, desc, url }) => {
    const projectTitle = title.split(" ").join("-").toLowerCase();
    const overlayStyles = `absolute h-full w-full xs:opacity-1  sm:opacity-0 sm:hover:opacity-90 sm:hover:bg-black transition duration-500
    sm:bg-grey sm:z-30 flex flex-col justify-center items-center text-center p-16 text-white
    `
    return (
        <motion.div
            variants={projectVarient}
            className='relative'
        >
            <div className={overlayStyles} >
                <a href={url} className='text-2xl font-playfair '>

                    {title}
                </a>
                <p className='mt-7'>{desc}</p>
            </div>
            <div className='sm:hover:opacity-25'>
                <img src={`assets/${projectTitle}.png`} alt={projectTitle} />
            </div>

        </motion.div>
    )
}

const Projetcs = ({ setSelectedPage }) => {
    const ref = useRef(null);

    useEffect(() => {
        setSelectedPage(ref.current.id)
    }, [])


    return (
        <section id='projects' ref={ref} className='pt-20 pb-20'>
            <motion.div
                className="md:w-2/5 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 }
                }}
            >
                <div>

                    <motion.p
                        whileHover={{
                            letterSpacing: "2px"
                        }}
                        className="font-Poppins font-semibold text-4xl text-ceter">
                        <span className="">PROJ</span>ECTS
                    </motion.p>
                    <div className='flex justify-center mt-5'>

                        <Line width="w-1/3" />
                    </div>
                    <p className="mt-10 mb-10">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptatum.
                    </p>
                </div>
            </motion.div>

            {/* PROJECTS */}
            <div className='flex justify-center'>

                <motion.div
                    className="sm:grid sm:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {/* row 1 */}
                    <div className='flex justify-center text-center items-center p-10 bg-red sm:max-w-[400px] sm:max-h-[400px] xs:max-w-[350px] xs:max-h-[400px] text-2xl font-Poppins font-semibold '>BEAUTIFUL USER INTERFACES</div>
                    {
                        projects.map((project) => {
                            return (
                                <div key={project.id}>
                                    <Project title={project.title} desc={project.desc} url={project.url} />
                                </div>
                            )
                        })
                    }   
                    <div className='flex justify-center text-center items-center p-10 max-w-[400px] max-h-[400px] text-2xl font-Poppins font-semibold'>SMOOTH USER EXPERIENCE</div>
                </motion.div>

            </div>

        </section>
    )
}

export default Projetcs;