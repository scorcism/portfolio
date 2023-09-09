import { Link } from "react-router-dom";

const Blog = ()=>{
    return (
        <div className="flex w-full h-screen items-center justify-center text-white bg-black flex-col gap-10">
            <h1 className="text-4xl ">COMING SOON</h1>
            <Link to={"/"}>Home</Link>
        </div>
    )
}

export default Blog;