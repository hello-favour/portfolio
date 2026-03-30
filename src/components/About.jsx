import { motion } from "framer-motion";
import { Code, Palette, Zap, Globe } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { aboutHighlights, timeline } from "../data/portfolio";

const iconMap = { Code, Palette, Zap, Globe };

export default function About() {
  return (
    <section id="about" className="py-32 px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader
          number="01"
          title="About Me"
          subtitle="A passionate mobile developer who loves building apps that people use every day."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gray-300 text-[clamp(0.95rem,2vw,1.15rem)] leading-[1.75] mb-8"
            >
              I&apos;m <strong className="text-white font-semibold">Favour Williams</strong>, a{" "}
              <strong className="text-white font-semibold">Flutter Mobile Developer</strong> with
              an obsession for building apps that work beautifully and make a real impact.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-300 text-[clamp(0.95rem,2vw,1.15rem)] leading-[1.75] mb-8"
            >
              My journey started with curiosity and a laptop. Today, I&apos;ve built and
              shipped <strong className="text-white font-semibold">15+ apps</strong> on the
              Play Store used by people across Nigeria and beyond, from fintech platforms
              like <strong className="text-white font-semibold">PAYBLEND</strong> to
              ride-hailing solutions like <strong className="text-white font-semibold">Appiadrive</strong>.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-[clamp(0.95rem,2vw,1.15rem)] leading-[1.75] mb-8"
            >
              I don&apos;t just code — I{" "}
              <strong className="text-white font-semibold">architect experiences</strong>.
              From transportation apps like Muvam to decentralized social platforms like Beepo,
              from real-time communication systems to social media platforms like People App Loud,
              I bring ideas to life with precision and passion.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-300 text-[clamp(0.95rem,2vw,1.15rem)] leading-[1.75] mb-14"
            >
              They call me the{" "}
              <strong className="text-accent font-semibold">&ldquo;App Builder&rdquo;</strong> —
              Flutter, Dart, Firebase, WebSockets, RTC. If it needs to be built, I build it.
              When I&apos;m not shipping code, I&apos;m exploring new mobile technologies
              and sharing insights with the developer community.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aboutHighlights.map((item, i) => {
                const Icon = iconMap[item.icon];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ y: -2, borderColor: "rgba(255,255,255,0.12)" }}
                    className="group p-5 rounded-xl border border-gray-800/80 bg-gradient-to-b from-gray-950/80 to-transparent transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-4">
                      <Icon size={16} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-[13px] font-semibold mb-1.5 text-gray-200">{item.title}</h3>
                    <p className="text-[12px] text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.6, 0, 0.2, 1] }}
          >
            <h3 className="text-sm font-semibold mb-10 text-gray-300 uppercase tracking-widest">
              My Journey
            </h3>
            <div className="relative pl-8">
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-gray-700 via-gray-800 to-transparent" />
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative mb-12 last:mb-0"
                >
                  <div
                    className={`absolute -left-8 top-1 w-[14px] h-[14px] rounded-full border-2 ${
                      item.current
                        ? "border-accent bg-accent/20 animate-[pulse-ring_2s_ease-in-out_infinite]"
                        : "border-gray-700 bg-gray-900"
                    }`}
                  />
                  <span className="font-mono text-[11px] text-gray-600 block mb-1 tracking-wider">
                    {item.period}
                  </span>
                  <h4 className="text-[15px] font-medium text-gray-300">
                    {item.title}
                  </h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
