"use client"
import React from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

interface TitleProps {
  color?: "white" | "black"; // Color opcional: blanco o negro
  h3Text: string; // Texto para el h3
  spanText: string; // Texto para el span
  inline?: boolean; // Determina si el span es inline o block
}

const Title: React.FC<TitleProps> = ({ color = "black", h3Text, spanText, inline = false }) => {
  return (
    <motion.h3
      className={classNames(
        "text-6xl lg:text-7xl font-normal",
        {
          "text-black": color === "black",
          "text-white": color === "white",
        }
      )}
      initial={{ opacity: 0, y: 20 }}  // Empieza invisible y un poco desplazado
      animate={{ opacity: 1, y: 0 }}   // Aparece suavemente desde abajo
      transition={{ duration: 1 }}      // Duración de la animación
    >
      {h3Text}
      <motion.span
        className={classNames("font-bold", {
          block: !inline, // Si `inline` es falso, aplicamos `block`
          inline: inline, // Si `inline` es verdadero, aplicamos `inline`
        })}
        initial={{ opacity: 0, x: -20 }}  // Empieza invisible y desplazado a la izquierda
        animate={{ opacity: 1, x: 0 }}   // Aparece suavemente desde la izquierda
        transition={{ delay: 0.3, duration: 1 }} // Retraso y duración de la animación
      >
        {spanText}
      </motion.span>
    </motion.h3>
  );
};

export default Title;
