import { useEffect, useState } from "react";
import useMediaQuery from '../../hooks/useMediaQuery'
import Navbar from "./Components/Navbar";

const Home = () => {

    const [selectedPage, setSelectedPage] = useState("home");
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const [isTopOfPage, setIsTopOfPage] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.screenY === 0) {
                setIsTopOfPage(true);
            }
            if (window.screenY !== 0) {
                setIsTopOfPage(false);
            }
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <>
            <div className="app bg-gray">
                <Navbar
                    isTopOfPage={isTopOfPage}
                    selectedPage={selectedPage} 
                    setSelectedPage={setSelectedPage}
                />

            </div>
        </>
    )
}
export default Home;