import { motion } from "framer-motion";
import { Monitor, Server, Database, Wrench } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { skills, skillCategories } from "../data/portfolio";

const iconMap = { Monitor, Server, Database, Wrench };

function SkillBar({ name, level, delay }) {
  return (
    <div className="group mb-6 last:mb-0">
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-[14px] text-gray-300 font-medium">{name}</span>
        <span className="font-mono text-[11px] text-gray-600 tabular-nums">{level}%</span>
      </div>
      <div className="h-[5px] bg-white/[0.04] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay, ease: [0.6, 0, 0.2, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-white via-gray-300 to-gray-500 relative"
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
        </motion.div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader
          number="04"
          title="Skills"
          subtitle="Technologies and tools I work with."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.6, 0, 0.2, 1] }}
            className="p-8 rounded-2xl border border-gray-800/60 bg-gradient-to-b from-gray-950/60 to-transparent"
          >
            {skills.map((skill, i) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={i * 0.06}
              />
            ))}
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillCategories.map((cat, i) => {
              const Icon = iconMap[cat.icon];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -2, borderColor: "rgba(255,255,255,0.12)" }}
                  className="group p-6 rounded-2xl border border-gray-800/80 bg-gradient-to-b from-gray-950/80 to-transparent transition-all duration-500"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-4">
                    <Icon size={18} className="text-gray-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-[13px] font-semibold mb-2 text-gray-200">{cat.title}</h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed">
                    {cat.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
