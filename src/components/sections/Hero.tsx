import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { ParticlesBackground } from "../ui/ParticlesBackground";

export const Hero = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
    >
      {/* Fondo con partículas (lo añadiremos después) */}
      <div id="particles-container" className="absolute inset-0 z-0" />
        <div className="absolute inset-0 z-0">
          <ParticlesBackground />
        </div>
      <div className="container mx-auto px-6 z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-metal text-6xl md:text-8xl lg:text-9xl tracking-wider"
        >
          <span className="text-primary">J</span>uan{" "}
          <span className="text-secondary">M</span>artínez
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-muted mt-4 max-w-2xl mx-auto font-light"
        >
          <span className="text-primary">Desarrollador Full Stack</span> | 
          <span className="text-secondary"> Creador de universos digitales</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#proyectos"
            className="px-8 py-3 bg-primary text-background font-bold rounded-full shadow-metal hover:shadow-glow transition-all duration-300 transform hover:scale-105"
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="px-8 py-3 border border-primary text-primary font-bold rounded-full hover:bg-primary/10 transition-all duration-300"
          >
            Contáctame
          </a>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary text-3xl"
        >
          <FaChevronDown />
        </motion.div>
      </div>
    </section>
  );
};