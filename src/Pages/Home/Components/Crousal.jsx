import { motion } from "framer-motion";
import { useState } from "react";

const Crousal = () => {

    const slides = [
        "/assets/gallery/1.jpeg",
        "/assets/gallery/2.jpeg",
        "/assets/gallery/3.jpeg",
        "/assets/gallery/4.jpeg",
        "/assets/gallery/5.jpeg",
        "/assets/gallery/7.jpeg",
    ]
    const [index, setIndex] = useState(0);

    const next = () => {
        setIndex((index) => (index === slides.length - 1 ? 0 : index + 1))
    }

    const prev = () => {
        setIndex((index) => (index === 0 ? slides.length - 1 : index - 1))
    }


    return (
        <div className="overflow-hidden relative">
            <div className="flex flex-col md:flex-row">
                <motion.img
                    src={slides[index]} alt={slides[index]} className="sm:h-[600px] h-[400px]  rounded-md transition-transform ease-out duration-500" />
                <div className="absolute inset-0 flex justify-between items-center text-2xl ">
                    <button onClick={next} className="outline-none bg-white/80 rounded-full shadow text-gray hover:bg-white p-1 transition duration-150 w-9 h-9">
                        &lt;
                    </button>
                    <button onClick={prev} className="outline-none bg-white/80 rounded-full shadow text-gray hover:bg-white p-1 transition duration-150 w-9 h-9">
                        &gt;
                    </button>
                </div>
                <div className="absolute bottom-4 right-0 left-0">
                    <div className="flex items-center justify-end">
                            <motion.a
                            href="#" className="bg-white/70 text-gray/90 px-2 py-1 font-semibold hover:bg-gray/90 hover:text-white transition duration-500 " style={{
                                borderTopLeftRadius:"5px",
                                borderBottomLeftRadius:"5px"
                            }}>
                                GEET
                            </motion.a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Crousal;