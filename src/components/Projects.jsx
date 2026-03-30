import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";
import SectionHeader from "./SectionHeader";
import SpotlightCard from "./SpotlightCard";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader
          number="02"
          title="Projects"
          subtitle="A selection of things I've built and shipped."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <SpotlightCard
              key={i}
              className="group rounded-2xl border border-gray-800/80 bg-gradient-to-b from-gray-950/80 to-gray-950/20 flex flex-col transition-all duration-500 hover:border-gray-700/80 hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)] gradient-border-hover"
            >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="relative p-6"
            >
              <div className="relative">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <h3 className="text-base font-semibold mb-1 text-gray-100 group-hover:text-white transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-[14px] text-gray-500 italic">{project.tagline}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 text-gray-600 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                      aria-label={`${project.title} GitHub`}
                    >
                      <GithubIcon size={15} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 text-gray-600 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                      aria-label={`${project.title} Live`}
                    >
                      <ExternalLink size={15} />
                    </motion.a>
                  </div>
                </div>

                <p className="text-[14px] text-gray-400 leading-[1.7] mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[10px] font-mono font-medium text-gray-500 bg-white/[0.03] rounded-md border border-white/[0.05]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.live && project.live !== "#" && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.15)" }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-3.5 py-2 text-[11px] font-medium text-gray-400 bg-white/[0.03] rounded-lg border border-white/[0.06] hover:text-white transition-all duration-300"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    Google Play
                  </motion.a>
                )}
              </div>
            </motion.div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
