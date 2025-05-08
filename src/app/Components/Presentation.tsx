"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Presentation = () => {
  const [showAnimation, setShowAnimation] = useState(true);
  const [colorChanged, setColorChanged] = useState(false);

  useEffect(() => {
    // Cambiar el color de H, A, V antes de ocultar la animación
    const timer2 = setTimeout(() => {
      setColorChanged(true);
    }, 1500); // Cambiar color a los 1.5 segundos

    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 3000); // Este tiempo puede ajustarse según sea necesario

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <>
     
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
          {/* Animación de letras iniciales H, A, V */}
          <motion.div
            className="text-white text-6xl font-bold flex  items-center"
            initial="start"
            animate="end"
            variants={{
              start: { opacity: 1 },
              end: { opacity: 1, transition: { staggerChildren: 0.3 } },
            }}
          >
            {/* H con "Hachelias" */}
            <motion.span
              className="ml-16 mr-2"
              initial={{ opacity: 0, y: 400, x: 0 }} // Mover hacia la izquierda
              animate={{
                opacity: 1,
                y: 0,
                x: 0, // Regresar a su posición original
                color: colorChanged ? "orange" : "white", // Cambiar el color a naranja
                transition: { duration: 0.5 },
              }}
            >
              H
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 1, delay: 1.5 }, // Fade in con más tiempo
              }}
              className="text-white text-4xl"
            >
              achelias
            </motion.span>

            {/* A con "Audio" */}
            <motion.span
              className="ml-16 mr-2"
              initial={{ opacity: 0, y: 100, x: 0 }} // Mover hacia la izquierda
              animate={{
                opacity: 1,
                y: 0,
                x: 0, // Regresar a su posición original
                color: colorChanged ? "orange" : "white", // Cambiar el color a naranja
                transition: { duration: 0.5, delay: 0.5 },
              }}
            >
              A
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 1, delay: 2 }, // Fade in con más tiempo
              }}
              className="text-white text-4xl"
            >
              udio
            </motion.span>

            {/* V con "Vision" */}
            <motion.span
              className="ml-16 mr-2"
              initial={{ opacity: 0, y: 150, x: 0 }} // Mover hacia la izquierda
              animate={{
                opacity: 1,
                y: 0,
                x: 0, // Regresar a su posición original
                color: colorChanged ? "orange" : "white", // Cambiar el color a naranja
                transition: { duration: 0.5, delay: 1 },
              }}
            >
              V
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 1, delay: 2.5 }, // Fade in con más tiempo
              }}
              className="text-white text-4xl"
            >
              ision
            </motion.span>
          </motion.div>
        </div>
      
    </>
  );
};

export default Presentation;
