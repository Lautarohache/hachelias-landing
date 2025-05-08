"use client"
import { useEffect, useState } from "react";
import About2 from "./Components/About2";
import Banner from "./Components/Banner";
import About from "./Components/Icons/About";
import Contact from "./Components/Contact";
import Clients from "./Components/Clients";
import VideoSection from "./Components/VideoSection";
import Presentation from "./Components/Presentation"; // Importa Presentation

export default function Home() {
  // Estado para saber si la presentación debe mostrarse
  const [showPresentation, setShowPresentation] = useState(true);

  useEffect(() => {
    // Verificar si ya se mostró la presentación en esta sesión
    const hasShownPresentation = sessionStorage.getItem("hasShownPresentation");

    if (hasShownPresentation) {
      // Si ya se mostró, no mostrarla
      setShowPresentation(false);
    } else {
      // Si es la primera vez que se muestra, marcarlo en sessionStorage
      sessionStorage.setItem("hasShownPresentation", "true");

      setTimeout(()=>{
        setShowPresentation(false)
      },3000)
    }
  }, []);

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] overflow-hidden">
      <main className="flex flex-col">
        {/* Si showPresentation es true, mostrar la presentación */}
        {showPresentation && <Presentation />}
        
        {/* El resto del contenido siempre se muestra */}
        <Banner />
        <VideoSection />
        <About />
        <About2 />
        <Clients />
        <Contact />
      </main>
    </div>
  );
}
