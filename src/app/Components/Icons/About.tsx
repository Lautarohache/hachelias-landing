"use client";
import Wrapper from "../Wrapper/Wrapper";
import DownArrow2 from "./DownArrow2";
import Title from "../Title";
import { Card } from "./Card";
import { motion, useScroll, useTransform } from "framer-motion";
import { aboutActivities } from "@/app/constants/constants";
import { useRef, useEffect, useState } from "react";
import CircleTwo from "./CirclesBanner/CircleTwo";

interface Activity {
  id: string;
  img: string;
  title: string;
  hrefCta: string;
}

const About = () => {
  const { scrollY } = useScroll(); // Captura el scroll vertical
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  const rotation = useTransform(scrollY, [0, 1000], [0, 360]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true); // Si la sección entra en el viewport, activa las animaciones
        } else {
          setInView(false); // Si sale del viewport, desactiva las animaciones
        }
      },
      { threshold: 0.5 } // El umbral de visibilidad es del 50%
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="que-hacemos"
      className="min-h-screen relative w-full bg-white overflow-hidden"
    >
      <motion.div
        className="absolute z-2 top-[-600px] right-[-400px] lg:top-[-300px] lg:right-[-300px] h-3/4"
        style={{
          rotate: rotation, // Aplica la rotación dinámica
        }}
      >
        <CircleTwo width="100%" height="100%" />
      </motion.div>

      <motion.div
        className="absolute z-2 bottom-[-600px] left-[-400px] lg:bottom-[-300px] lg:left-[-300px] h-3/4"
        style={{
          rotate: rotation, // Aplica la rotación dinámica
        }}
      >
        <CircleTwo width="100%" height="100%" />
      </motion.div>

      <Wrapper>
        <div className="mt-40 mb-10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
            >
              <Title color="black" h3Text="Esto es lo" spanText=" que hacemos" inline={false} />
            </motion.div>

            <div className="flex items-baseline z-index5">
              <motion.h4
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-orangeColor text-[19px] font-semibold leading-normal tracking-[6.46px] uppercase"
              >
                NUESTROS SERVICIOS
              </motion.h4>
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex justify-center items-center bg-grayLight rounded-full w-12 h-12"
              >
                <DownArrow2 />
              </motion.span>
            </div>
          </div>

          <section className="grid gap-4 lg:gap-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 z-4 mt-10">
            {aboutActivities.map((activity: Activity) => (
              <Card
                key={activity.id}
                title={activity.title}
                img={activity.img}
                hrefCta={activity.hrefCta}
              />
            ))}
          </section>
        </div>
      </Wrapper>
    </section>
  );
};

export default About;
