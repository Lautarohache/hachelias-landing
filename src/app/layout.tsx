import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HAV - Home",
  description:
    "Lautaro Hachelias, fundador de HAV, transforma ideas en realidades a través del mundo audiovisual. Más de 7 años creando contenido innovador, impactante y memorable.",
    keywords: [
      "producción audiovisual",
      "HAV",
      "Lautaro Hachelias",
      "contenido innovador",
      "videos profesionales",
      "filmación",
      "postproducción",
    ],
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" content="notranslate">
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden  `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
