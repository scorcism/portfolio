import { useState } from 'react';
import { items } from '../assets/img-data'
import { motion } from 'framer-motion';


const ImgCard = ({ item, setSelectImage }) => {
    return (
        <div className="relative">
            <motion.img whileHover={{
                scale: 1.024,
            }}
                transition={{
                    duration: 0.1
                }}
                whileTap={{
                    scale: 1.035
                }}
                src={`assets/img-gallery/${item.img_url}`} className='mb-3 rounded-md cursor-pointer' alt={`${item.id}`} />
            <p className='absolute bottom-0 right-0 bg-black/30 text-white/80 py-1 px-2 mx-1 my-1 rounded-md font-Satisfy capitalize font-semibold'>
                Geet
            </p>
        </div>
    )
}

const Images = () => {

    const [selectImage, setSelectedImage] = useState(null);

    return (
        <>
            <section className="relative flex-col  w-[100%] h-screen mx-1">
                <div className="columns-2 gap-5 xs:columns-1 ss:columns-2 sm:columns-3 md:columns-4">
                    {
                        items.map((item) => (
                            <ImgCard item={item} key={item.id} setSelectedImage={setSelectedImage} />
                        ))
                    }
                </div>
                <footer className="flex justify-center items-center bg-black/70 mt-4 py-2 text-white/90">
                    <p>Abhishek Pathak</p>
                </footer>
            </section>
        </>
    )
}

export default Images;