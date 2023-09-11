import { Link } from "react-router-dom";


const GalleryHome = () =>{
    return  (
        <>
        <div className="flex w-full h-screen items-center justify-center text-white bg-black flex-col gap-10">
            <h1 className="text-4xl ">COMING SOON Gallery</h1>
            <Link to={"/"}>Home</Link>
        </div>
        </>
    )
}

export default GalleryHome;