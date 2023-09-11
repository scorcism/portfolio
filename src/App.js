import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Home";
import GalleryHome from "./Pages/Gallery/Scenes/GalleryHome";
import './App.css'
import { useEffect } from "react";




export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/gallery" element={<GalleryHome />} />
      </Routes>
    </BrowserRouter>
  )
}