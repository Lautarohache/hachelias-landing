"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ModalVideo from "./ModalVideo";

interface HoverArticleProps {
  imageSrc: string;
  text: string;
  videoSrc: string; // Video que se pasará como prop
}

export default function HoverArticle({
  imageSrc,
  text,
  videoSrc,
}: HoverArticleProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <article className="relative flex-grow cursor-pointer  ">
      <motion.div
        initial={{ opacity: 0 }} // Comienza con el texto invisible
        animate={{ opacity: 1 }} // Aparece con una transición suave
        transition={{ duration: 1 }} // Duración de la animación de aparición
        className="relative w-full h-full"
        onClick={handleOpenModal}
      >
        <div className="relative w-[100%] h-[210px]">
          <Image
            src={imageSrc}
            alt="Imagen"
            fill // Hace que la imagen ocupe todo el contenedor
            className="object-cover rounded-md"
          />
        </div>
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center"
          initial={{ opacity: 0 }} // Empieza sin opacidad
          whileHover={{ opacity: 1 }} // Al hacer hover, aumenta la opacidad
          transition={{ opacity: { duration: 0.3 } }} // Transición suave para la opacidad
          onClick={handleOpenModal}
        >
          <span className="text-white uppercase text-2xl font-extrabold leading-normal">
            {text}
          </span>
        </motion.div>
      </motion.div>
      {/* Modal de video */}
      <ModalVideo
        isOpen={isModalOpen}
        videoSrc={videoSrc}
        onClose={handleCloseModal}
      />
    </article>
  );
}
