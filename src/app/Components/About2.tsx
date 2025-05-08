"use client";
import React from "react";
import Wrapper from "./Wrapper/Wrapper";
import Title from "./Title";
import Button from "./Button";
import Image from "next/image";
import CircleTwo from "./Icons/CirclesBanner/CircleTwo";
import { motion } from "framer-motion";

const About2 = () => {
  return (
    <section
      id="quienes-somos"
      className="pt-20 lg:pt-40 pb-20  z-index5 min-h-screen w-full  bg-black relative overflow-hidden"
    >
      <div className="absolute top-[-300px] md:top-[100px] right-[-500px] xl:top-[50px] xl:right-[-300px] h-3/4  ">
        <CircleTwo width="100%" height="100%" />
      </div>
      <Wrapper>
        <div className="flex flex-col lg:flex-row ">
          <div className="flex flex-col w-full z-index5 lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Title
                color="white"
                h3Text="¿Quiénes"
                spanText=" somos?"
                inline={true}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-3/5 mt-4"
            >
              <p className="text-white text-xl">
                Soy Lautaro Hachelias y llevo más de siete años dedicándome al
                mundo audiovisual. Mi pasión por contar historias a través de la
                imagen me llevó a crear HAV, una productora que convierte ideas
                en realidades.
              </p>
              <p className="text-white text-xl mt-4">
                En HAV, trabajamos con el compromiso de cumplir y superar los
                objetivos de cada cliente. A medida que los desafíos crecieron,
                formé un equipo de profesionales que comparte la misma visión:
                crear contenido de calidad, innovador y con impacto. Juntos,
                seguimos evolucionando para hacer que cada proyecto sea único y
                memorable.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="w-full lg:w-3/5"
            >
              <h4 className="text-white text-5xl mt-20">
                ¿Te interesa nuestra{" "}
                <span className="text-white font-bold block">propuesta?</span>
              </h4>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="mt-8 mb-8 lg:mb-0 flex justify-center lg:justify-start"
              >
                <Button text="CONTACTANOS" href="#contacto" />
              </motion.div>
            </motion.div>
          </div>

          <div className="flex flex-col xl:flex-row w-full lg:w-2/5 gap-4 items-center justify-center z-index5">
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <Image src="/about1.png" width={330} height={505} alt="el pepe" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="xl:mt-40"
            >
              <Image src="/about2.png" width={330} height={505} alt="el pepe" />
            </motion.div> */}

            <Image width={500} height={200} alt="Quienes somos" src={"/quienes_somos.png"}/>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default About2;
