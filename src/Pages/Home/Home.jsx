import { useEffect, useState } from "react";
import useMediaQuery from '../../hooks/useMediaQuery'
import Navbar from "./Components/Navbar";
import DotGroup from "./Components/DotGroup";
import Line from "./Components/Line";
import Landing from "./Scenes/Landing";
import About from "./Scenes/About";
import Projetcs from "./Scenes/Projects";
import Socials from "./Scenes/Socials";
import HomeState from "./Context/HomeState";
import ImageGallery from "./Scenes/ImageGallery";

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

    // console.log(selectedPage)

    return (
        <>
            <HomeState>


                <div className="app bg-gray">
                    <Navbar
                        isTopOfPage={isTopOfPage}
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <div className="w-full mx-auto md:h-full">
                        {
                            // isAboveMediumScreens && (
                            //     <DotGroup
                            //         selectedPage={selectedPage}
                            //         setSelectedPage={setSelectedPage}
                            //     />
                            // )
                        }
                        <Landing setSelectedPage={setSelectedPage} />
                    </div>
                    <Line />
                    <div className="w-5/6 mx-auto md:h-full">
                        <About setSelectedPage={setSelectedPage} />
                    </div>
                    <Line />
                    <div className="mx-auto w-5/6">
                        <Projetcs setSelectedPage={setSelectedPage} />
                    </div>
                    <Line />                    
                    <div className="mx-auto w-5/6">
                        <ImageGallery />
                    </div>
                    <Line/>
                    <div className="mx-auto w-5/6">
                        <Socials />
                    </div>
                </div>

            </HomeState>
        </>
    )
}
export default Home;