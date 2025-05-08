"use client";
import { useState } from "react";
import Logo from "./Icons/Logo";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [show, setshow] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -20, transition: { duration: 1, ease: "easeInOut" } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } },
  };

  return (
    <div className="bg-black w-full sticky z-50 top-0">
      <nav
        className={`bg-black lg:px-20 lg:py-6 sm:py-6 sm:px-7 py-5 px-4 ${show ? "h-screen" : "h-auto"}`}
      >
        {/* For large and Medium-sized Screen */}
        <div className="flex justify-between items-center z-50">
          <div className="flex space-x-3 items-center">
            <Link href="/#home">
              <Logo />
            </Link>
          </div>
          <div className="hidden sm:flex flex-row space-x-4">
            <Link className="px-8 text-white" href="#que-hacemos">
              ¿Qué hacemos?
            </Link>
            <Link className="px-8 text-white" href="#quienes-somos">
              ¿Quiénes somos?
            </Link>
            <Link className="px-8 text-white" href="#contacto">
              Contactanos
            </Link>
          </div>
          {/* Burger Icon */}
          <div
            id="bgIcon"
            onClick={() => setshow(!show)}
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 justify-center items-center sm:hidden cursor-pointer"
          >
            <svg
              className={`${show ? "hidden" : ""}`}
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="transform duration-150"
                d="M4 6H20"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12H20"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className="transform duration-150"
                d="M4 18H20"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className={`${show ? "block" : "hidden"}`}
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Mobile and small-screen devices (toggle Menu) */}
        <motion.div
          id="MobileNavigation"
          className={`${
            show ? "flex" : "hidden"
          } sm:hidden flex justify-center items-center w-full h-[80%]`}
          initial="hidden"
          animate={show ? "visible" : "hidden"}
          exit="hidden"
          variants={menuVariants}
          layout
        >
          <div className="flex flex-col gap-[56px] text-center">
            <Link
              scroll={false}
              className="text-white font-outfit text-[33px] font-medium leading-[41.58px]"
              href="#que-hacemos"
            >
              ¿Qué hacemos?
            </Link>
            <Link
              className="text-white font-outfit text-[33px] font-medium leading-[41.58px]"
              href="#quienes-somos"
            >
              ¿Quiénes somos?
            </Link>
            <Link
              className="text-white font-outfit text-[33px] font-medium leading-[41.58px]"
              href="#contacto"
            >
              Contactanos
            </Link>
          </div>
        </motion.div>
      </nav>
    </div>
  );
}
