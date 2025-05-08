"use client";
import React from "react";
import Wrapper from "../Components/Wrapper/Wrapper";
import Title from "../Components/Title";
import { motion } from "framer-motion";
import DownArrow2 from "../Components/Icons/DownArrow2";
import GridCards from "../Components/GridCards";
import Link from "next/link";
import { eventos } from "../constants/constants";

const Eventos = () => {
  
  return (
    <section className="min-h-screen w-full py-20 ">
      <Wrapper>
        <div>
          <motion.h3
            className="text-[#3A3A3A] font-outfit text-[19px] font-semibold tracking-[6.46px] uppercase py-4"
            initial={{ opacity: 0, x: -50 }} // Empieza invisible y un poco desplazado hacia la izquierda
            animate={{ opacity: 1, x: 0 }} // Aparece suavemente desde la izquierda
            transition={{ duration: 1 }} // Duración de la animación
          >
           <Link href={"/"}>HOME</Link>  / <Link href="/#que-hacemos">SERVICIOS</Link> /{" "}
            <motion.span
              className="text-[#F49920]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              EVENTOS
            </motion.span>
          </motion.h3>
          <Title h3Text="Esto es lo" spanText="que hacemos" />
        </div>

        <div className="flex items-baseline z-index5 py-6">
          <motion.h4
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-orangeColor text-[19px] font-semibold leading-normal tracking-[6.46px] uppercase"
          >
            EVENTOS
          </motion.h4>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center items-center bg-grayLight rounded-full w-12 h-12"
          >
            <DownArrow2 />
          </motion.span>
        </div>
      </Wrapper>

      <GridCards eventos={eventos} />
    </section>
  );
};

export default Eventos;
