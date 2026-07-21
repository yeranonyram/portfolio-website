import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, 
  SiMongodb, SiGit, SiDocker, SiFigma 
} from "react-icons/si";

const skills = [
  { name: "React", icon: <SiReact />, level: 90 },
  { name: "TypeScript", icon: <SiTypescript />, level: 85 },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 80 },
  { name: "Node.js", icon: <SiNodedotjs />, level: 75 },
  { name: "MongoDB", icon: <SiMongodb />, level: 70 },
  { name: "Git", icon: <SiGit />, level: 85 },
  { name: "Docker", icon: <SiDocker />, level: 65 },
  { name: "Figma", icon: <SiFigma />, level: 70 },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="habilidades" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-metal text-4xl md:text-5xl text-primary mb-12 text-center"
        >
          Habilidades
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-surface/50 p-6 rounded-xl border border-primary/20 hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-3">
                <span className="text-3xl text-secondary group-hover:text-primary transition-colors">
                  {skill.icon}
                </span>
                <span className="text-lg font-bold">{skill.name}</span>
              </div>
              <div className="w-full h-2 bg-muted/30 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};