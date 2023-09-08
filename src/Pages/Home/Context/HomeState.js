
import { useEffect, useState } from 'react';
import HomeContext from './HomeContext';

const HomeState = ({ children }) => {

    const [whoami, setName] = useState("AbhisHek")
    const [cursorSize, setCursorSize] = useState({
        h: "16",
        w: "16"
    })

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });

    const [cursorVarient, setCursorVarient] = useState("default")


    useEffect(() => {
        const mouseMoveFunction = e => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener("mousemove", mouseMoveFunction)

        return () => {
            window.removeEventListener("mousemove", mouseMoveFunction)
        }
    }, [])

    const variants = {
        default: {
            x: mousePosition.x - cursorSize.h / 2,
            y: mousePosition.y - cursorSize.h / 2
        },
        text: {
            x: mousePosition.x - 35,
            y: mousePosition.y - 35,
            height: 70,
            width: 70,
            backgroundColor: "#2c3333",
            mixBlendMode: "difference"
        }
    }



    const textEnter = () => {
        setCursorVarient("text")
    }
    const textLeave = () => {
        setCursorVarient("default")
    }


    return (
        <HomeContext.Provider value={{ whoami, cursorSize, setCursorSize, variants,cursorVarient, setCursorVarient, textEnter, textLeave }}>
            {children}
        </HomeContext.Provider>
    )
}

export default HomeState; 