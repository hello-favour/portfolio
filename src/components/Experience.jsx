import { motion } from "framer-motion";
import { MapPin, Briefcase } from "lucide-react";
import SectionHeader from "./SectionHeader";
import SpotlightCard from "./SpotlightCard";
import { experiences } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader
          number="03"
          title="Experience"
          subtitle="Where I've worked and what I've contributed."
        />

        <div className="relative w-full">
          <div className="absolute left-[19px] top-8 bottom-8 w-px bg-gradient-to-b from-gray-800 via-gray-800 to-transparent hidden md:block" />

          <div className="flex flex-col gap-5">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative md:pl-14"
              >
                <div className="hidden md:flex absolute left-0 top-8 w-10 h-10 rounded-xl bg-gray-950 border border-gray-800 items-center justify-center group-hover:border-gray-700 transition-colors duration-300">
                  <Briefcase size={16} className="text-gray-600 group-hover:text-gray-400 transition-colors duration-300" />
                </div>

                <SpotlightCard className="rounded-2xl border border-gray-800/80 bg-gradient-to-b from-gray-950/80 to-transparent transition-all duration-500 hover:shadow-[0_4px_30px_rgba(0,0,0,0.3)] gradient-border-hover">
                <motion.div
                  whileHover={{ borderColor: "rgba(255,255,255,0.1)" }}
                  className="p-6 md:p-8"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-base font-semibold text-gray-100">{exp.company}</h3>
                      <p className="text-[14px] text-gray-400 mt-0.5">{exp.role}</p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1.5">
                      <span className="font-mono text-[11px] text-gray-500 px-3 py-1.5 bg-white/[0.03] rounded-lg border border-white/[0.05] inline-block tracking-wide">
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 text-[11px] text-gray-600">
                        <MapPin size={11} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-[14px] text-gray-400 leading-[1.7] mb-5">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[10px] font-mono font-medium text-gray-500 bg-white/[0.03] rounded-md border border-white/[0.05]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
