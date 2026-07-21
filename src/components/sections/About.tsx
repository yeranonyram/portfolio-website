import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre-mi" ref={ref} className="py-20 bg-surface/50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-metal text-4xl md:text-5xl text-secondary mb-12 text-center"
        >
          Sobre mí
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 text-muted leading-relaxed"
          >
            <p>
              Soy un apasionado del código y la creatividad. Me especializo en 
              construir <span className="text-primary">experiencias web inmersivas</span> 
              que combinan diseño vanguardista con tecnología sólida.
            </p>
            <p>
              Mi enfoque <span className="text-secondary">"metalero"</span> se refleja en 
              la intensidad y la potencia de mis soluciones, pero siempre con una 
              <span className="text-primary"> estructura limpia y profesional</span>.
            </p>
            <p>
              <span className="text-secondary">🌌 Universo:</span> Cada proyecto es un 
              nuevo sistema solar que exploro con curiosidad y precisión.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center text-8xl shadow-glow">
              🎸
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};