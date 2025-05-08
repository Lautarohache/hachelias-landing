"use client"
import React from "react";
import Wrapper from "./Wrapper/Wrapper";
import Title from "./Title";
import Button from "./Button";
import {motion} from 'framer-motion'
const Form = () => {
  return (
    <section id="contacto" className="min-h-screen w-full bg-white  pt-20 lg:pt-40">
      <Wrapper>
      <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
>
  <Title h3Text="Contanos" spanText="tu proyecto" color="black" />
</motion.div>

<motion.form
  className="w-full"
  action=""
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
>
  <div className="w-full mt-20 flex flex-col md:flex-row gap-10">
    <motion.input
      className="w-full sm:w-1/2 border-b border-black placeholder:text-[#ADADAD] placeholder:font-outfit placeholder:text-[18px] placeholder:font-normal placeholder:tracking-[6.12px] placeholder:uppercase placeholder:leading-normal"
      type="text"
      name="Nombre"
      id=""
      placeholder="TU NOMBRE"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    />
    <motion.input
      className="w-full sm:w-1/2 border-b border-black placeholder:text-[#ADADAD] placeholder:font-outfit placeholder:text-[18px] placeholder:font-normal placeholder:tracking-[6.12px] placeholder:uppercase placeholder:leading-normal"
      type="email"
      name="Nombre"
      id=""
      placeholder="TU EMAIL"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    />
  </div>

  <motion.div
    className="w-full min-h-64"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
  >
    <textarea
      className="border-b min-h-64 mt-10 border-black w-full placeholder:text-[#ADADAD] placeholder:font-outfit placeholder:text-[18px] placeholder:font-normal placeholder:tracking-[6.12px] placeholder:uppercase placeholder:leading-normal"
      name="contanos"
      id=""
      placeholder="Contanos sobre tu proyecto"
    ></textarea>
  </motion.div>

  <motion.div
    className="flex w-full justify-center lg:justify-end mt-20"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
  >
    <Button text="ENVIAR MENSAJE" />
  </motion.div>
</motion.form>
      </Wrapper>
    </section>
  );
};

export default Form;
