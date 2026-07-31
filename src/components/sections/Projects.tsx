import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaServer,
} from "react-icons/fa";
const projects = [
  {
    title: "Gestión de Proyectos y Tareas",
    description:
      "Aplicación Full Stack para gestión empresarial de proyectos y tareas con autenticación, roles, permisos, comunicación en tiempo real y arquitectura escalable.",
    tech: [
      "React",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "JWT",
      "Docker",
      "WebSockets",
      "Jest",
    ],
    github: "https://github.com/yeranonyram/Gesti-n_de_Proyectos_Tareas",
    demo: "https://gestion-proyectos-frontend-sage.vercel.app",
    backend: "https://gestion-proyectos-backend-s7dh.onrender.com/api",
    credentials: {
      email: "usuario@test.com",
      password: "123456",
    },
  },
  {
    title: "Sistema Instituto de Música Eduardo Caba",
    description:
      "Sistema web académico para administrar estudiantes, docentes, cursos, inscripciones, pagos, horarios e información administrativa del instituto.",
    tech: [
      "React",
      "Vite",
      "TypeScript",
      "Node.js",
      "Express",
      "MySQL",
      "JWT",
    ],
    github: "#",
    demo: "#",
    credentials: null,
  },
  {
    title: "TSE Monitor Electoral",
    description:
      "Plataforma de monitoreo y visualización de información electoral utilizando mapas, análisis de datos y almacenamiento geoespacial.",
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "PostGIS",
      "Sequelize",
      "Recharts",
    ],
    github: "#",
    demo: "#",
    credentials: null,
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="proyectos"
      ref={ref}
      className="py-20 bg-surface/30"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-metal text-4xl md:text-5xl text-secondary mb-12 text-center"
        >
          Proyectos
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.15,
              }}
              className="
                bg-surface
                rounded-xl
                overflow-hidden
                border border-primary/10
                hover:border-primary/40
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-glow
              "
            >
              <div
                className="
                  h-48
                  bg-gradient-to-br
                  from-primary/20
                  to-secondary/20
                  flex
                  items-center
                  justify-center
                  text-6xl
                "
              >
                💻
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">
                  {project.title}
                </h3>

                <p className="text-muted text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-3 py-1
                        bg-primary/10
                        text-primary
                        text-xs
                        rounded-full
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-5 mb-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-muted
                      hover:text-primary
                      transition-colors
                    "
                  >
                    <FaGithub size={21} />
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-muted
                      hover:text-primary
                      transition-colors
                    "
                  >
                    <FaExternalLinkAlt size={18} />
                    </a>

                    {project.backend && (
                      <a
                        href={project.backend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-primary transition-colors"
                        title="Backend API"
                      >
                        <FaServer size={20} />
                      </a>
                    )}
                </div>

                {project.credentials && (
                  <div
                    className="
                      rounded-lg
                      border
                      border-primary/20
                      bg-primary/10
                      p-4
                    "
                  >
                    <h4 className="text-primary font-semibold mb-2">
                      Credenciales de prueba
                    </h4>

                    <p className="text-sm text-muted">
                      <strong>Usuario:</strong>{" "}
                      {project.credentials.email}
                    </p>

                    <p className="text-sm text-muted mt-1">
                      <strong>Contraseña:</strong>{" "}
                      {project.credentials.password}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};