import { motion } from "framer-motion";
import { FaSkull, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const navItems = ["Inicio", "Sobre mí", "Habilidades", "Proyectos", "Contacto"];

export const Header = () => {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-primary/20"
    >
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <FaSkull className="text-primary text-2xl" />
          <span className="font-metal text-2xl text-primary tracking-wider">
            &lt;/&gt; J.M.
          </span>
        </div>

        {/* Navegación desktop */}
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="relative text-muted hover:text-primary transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Iconos sociales */}
        <div className="flex gap-4 text-xl">
          <a href="#" className="text-muted hover:text-primary transition-colors">
            <FaGithub />
          </a>
          <a href="#" className="text-muted hover:text-primary transition-colors">
            <FaLinkedin />
          </a>
          <a href="#" className="text-muted hover:text-primary transition-colors">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </motion.header>
  );
};