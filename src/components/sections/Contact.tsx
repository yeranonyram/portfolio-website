import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaEnvelope, FaPhone, FaMapMarker } from "react-icons/fa";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="contacto" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-metal text-4xl md:text-5xl text-primary mb-12 text-center"
        >
          Contacto
        </motion.h2>

        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm uppercase tracking-wider text-muted mb-1">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-surface border border-primary/20 rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary transition-colors"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm uppercase tracking-wider text-muted mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-surface border border-primary/20 rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary transition-colors"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm uppercase tracking-wider text-muted mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full bg-surface border border-primary/20 rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Cuéntame sobre tu proyecto..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-primary text-background font-bold rounded-full shadow-metal hover:shadow-glow transition-all duration-300 transform hover:scale-105"
            >
              Enviar 🚀
            </button>
          </motion.form>

          <div className="mt-12 grid sm:grid-cols-3 gap-6 text-center text-muted">
            <div className="flex flex-col items-center gap-2">
              <FaEnvelope className="text-secondary text-2xl" />
              <span>juan@metaldev.com</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <FaPhone className="text-secondary text-2xl" />
              <span>+34 600 000 000</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <FaMapMarker className="text-secondary text-2xl" />
              <span>Madrid, ES</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};