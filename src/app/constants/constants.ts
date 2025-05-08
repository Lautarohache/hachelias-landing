export const aboutActivities = [
  { id: "1", title: "EVENTOS", img: "/activity_1.png", hrefCta: "/eventos" },
  {
    id: "2",
    title: "PUBLICIDAD",
    img: "/activity_2.png",
    hrefCta: "/publicidad",
  },
  // { id: "3", title: "CCTV", img: "/activity_3.png", hrefCta: "#" },
  {
    id: "4",
    title: "STREAMING Y TV",
    img: "/activity_4.png",
    hrefCta: "/streaming",
  },
  { id: "5", title: "MOTION GRAPHICS Y VFX", img: "/activity_5.png", hrefCta: "/motionGraphics" },
];


export interface Evento {
  id: string;
  imageSrc: string;
  text: string;
  videoSrc: string;
}

export const eventos:Evento[] = [
  { id: "1", imageSrc: "/eventos/delpo.png", text: "DESPEDIDA DEL POTRO - DJOKOVIC", videoSrc: "https://www.youtube.com/embed/ibIIoOO8sXU" },
  { id: "2", imageSrc: "/eventos/quick.png", text: "KICK & FEST", videoSrc: "https://www.youtube.com/embed/kuCe3ISkCqQ" },
  { id: "3", imageSrc: "/eventos/clarin.jpg", text: "GRUPO CLARÍN", videoSrc: "https://www.youtube.com/embed/vxqSYPL7Tsw" },
  { id: "4", imageSrc: "/eventos/elena.jpg", text: "ELENA FOUR SEASON", videoSrc: "https://www.youtube.com/embed/IxO_9DwaNfs" },
  { id: "5", imageSrc: "/eventos/markova.jpg", text: "MARKOVA", videoSrc: "https://www.youtube.com/embed/B5qfHBO_4Ic" },
  { id: "6", imageSrc: "/eventos/patagonia.jpg", text: "PATAGONIA FLOORING", videoSrc: "https://www.youtube.com/embed/7S_4k20ATN8" },
  { id: "7", imageSrc: "/eventos/rugby.jpg", text: "SUMMER RUGBY", videoSrc: "https://www.youtube.com/embed/sT9E_F7NVX0" },
  { id: "8", imageSrc: "/eventos/polo.jpg", text: "SUMMER POLO", videoSrc: "https://www.youtube.com/embed/uE1f-7A_ft8" },
  { id: "9", imageSrc: "/eventos/corona.jpg", text: "NEO PISTEA PUEBLO LIMITE", videoSrc: "https://www.youtube.com/embed/vx7Mq4DRnis" }
];


export const publicidad: Evento[] = [
  { id: "1", imageSrc: "/publicidad/CHANGO.png", text: "CHANGO", videoSrc: "https://www.youtube.com/embed/k2xcps3Olhc" },
  { id: "2", imageSrc: "/publicidad/patagonia.jpg", text: "PATAGONIA FLOORING", videoSrc: "https://www.youtube.com/embed/zKxolO8HbLU" },
  { id: "3", imageSrc: "/publicidad/POLARIS.jpg", text: "POLARIS", videoSrc: "https://www.youtube.com/embed/JJh6XQu_lIo" },
  { id: "4", imageSrc: "/publicidad/TREGAR.jpg", text: "TREGAR", videoSrc: "https://www.youtube.com/embed/JDi-pIeBNrM" }
];


export const streaming:Evento[] = [
  


]

export const motionGraphics:Evento[] = [
  { id: "1", imageSrc: "/motion/dexalegrin.jpg", text: "DEXALEGRIN", videoSrc: "https://www.youtube.com/embed/Tiir5XbsGYI" }
]

