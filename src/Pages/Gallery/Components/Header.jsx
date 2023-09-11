import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <nav className="z-40 w-fullh-16 mb-4 py-3   bg-black/50">
            <div className="flex justify-around items-center px-5">
                <p></p>
                <motion.h1 whileHover={{
                    letterSpacing: "2px",
                    color:"red"
                }} 
                transition={{
                    duration:0.2
                }}
                className="text-4xl font-Satisfy font-semibold ">Gallery</motion.h1>
                <Link to={"/"} className="text-xl">Home</Link>
            </div>
        </nav>
    )
}

export default Header;