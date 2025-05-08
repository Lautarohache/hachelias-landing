import { motion, AnimatePresence } from "framer-motion";

interface ModalVideoProps {
  isOpen: boolean;
  videoSrc: string | null;
  onClose: () => void;
}

export default function ModalVideo({ isOpen, videoSrc, onClose }: ModalVideoProps) {
  if (!isOpen || !videoSrc || videoSrc.trim() === "") return null; // No renderizar si videoSrc está vacío

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative bg-black p-2 rounded-lg shadow-lg w-full max-w-4xl"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          onClick={(e) => e.stopPropagation()} // Evita cerrar si se hace clic dentro
        >
          <button
            className="absolute top-2 right-2 text-white text-2xl font-bold"
            onClick={onClose}
          >
            ✕
          </button>
          <iframe
            src={videoSrc}
            className="w-full h-96"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
