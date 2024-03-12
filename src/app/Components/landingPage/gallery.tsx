"use client"
import { motion } from 'framer-motion';
import PhotoAlbum from "react-photo-album";
import photos from "./photos";
import { ContainerScroll } from "../../../components/ui/container-scroll";
 
export default function Gallery() {
  return (
    <div>
       <div className="flex flex-col overflow-hidden">
       <ContainerScroll
  users={users}
  titleComponent={
    <div>
      <motion.h1 
        className="text-4xl font-bold text-center my-4 animate-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-pink-500 to-blue-500 font-roboto"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Gallery
      </motion.h1>
      <motion.h2 
        className="text-3xl font-bold text-center my-4 text-gray-500 font-roboto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        Comfortable, Welcoming Environment
      </motion.h2>
    </div>
  }
/>
    </div>
      <div className="flex justify-center">
  {/* <div className="w-3/4 text-justify">

    <PhotoAlbum photos={photos} layout="masonry" />

  </div> */}
</div>
    </div>
  );
}
const localLink = (id: string, width: number, height: number) =>
  `/Gallery/${id}.jpg`;

const localPhotos = [
    { id: '01', width: 3, height: 4 },
    { id: '02', width: 3, height: 4 },
    { id: '03', width: 3, height: 4 },
    { id: '04', width: 3, height: 4 },
    { id: '05', width: 3, height: 4 },
    { id: '06', width: 3, height: 4 },
    { id: '07', width: 3, height: 4 },
    { id: '08', width: 3, height: 4 },
];

export const users = localPhotos.map((photo, idx) => ({
  image: localLink(photo.id, photo.width, photo.height),
}));
