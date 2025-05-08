"use client";
import Wrapper from "./Wrapper/Wrapper";
import Button from "./Button";
import CircleOne from "./Icons/CirclesBanner/CircleOne";
import CircleTwo from "./Icons/CirclesBanner/CircleTwo";
import CircleThree from "./Icons/CirclesBanner/CircleThree";
import CircleFive from "./Icons/CirclesBanner/CircleFive";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Banner = () => {
  const { scrollY } = useScroll(); // Captura el scroll vertical
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  const rotation = useTransform(scrollY, [0, 1000], [0, 360]);
  const rotation2 = useTransform(scrollY, [0, 1000], [0, -360]);

  // Configuración del Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting); // Si la sección entra en el viewport, activa las animaciones
      },
      { threshold: 0.5 } // 50% del elemento visible
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section); // Limpiar el observador al desmontar el componente
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="w-full z-index5 h-screen flex pt-20 lg:pt-40 sm:pt-20 relative overflow-hidden bg-black "
    >
      {/* Círculos arriba a la derecha */}
      <div className="absolute top-0 right-[-150px] flex gap-4 p-4">
        <motion.div
          style={{ rotate: rotation }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <CircleOne />
        </motion.div>
        <motion.div
          style={{ rotate: rotation }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <CircleTwo />
        </motion.div>
        <motion.div
          style={{ rotate: rotation }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <CircleThree />
        </motion.div>
        <motion.div
          style={{ rotate: rotation }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <CircleThree />
        </motion.div>
      </div>

      {/* Contenido principal */}
      <Wrapper>
        <div className="z-2 h-3/4 lg:h-auto flex flex-col justify-around">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white text-8xl sm:text-9xl font-bold"
            >
              H A V
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-white text-3xl font-thin sm:whitespace-nowrap"
            >
              Impulsando <span className="font-bold">tus historias</span>
            </motion.h2>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <Button text="¿Qué hacemos?" href="#que-hacemos" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <Button
                text="CONTACTANOS"
                bgColor="transparent"
                circleColor="grayColor"
                href="#contacto"
              />
            </motion.div>
          </div>
        </div>
      </Wrapper>

      {/* Círculos abajo a la izquierda */}
      <div className="absolute bottom-40 left-0 flex gap-4 mt-40 p-4">
        <CircleFive />
        <motion.div style={{ rotate: rotation2 }}>
          <CircleThree />
        </motion.div>
        <motion.div style={{ rotate: rotation }}>
          <CircleTwo />
        </motion.div>
        <motion.div style={{ rotate: rotation }}>
          <CircleOne />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
