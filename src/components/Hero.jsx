import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./icons";
import { stats, socialLinks } from "../data/portfolio";

function Typewriter({ text, delay = 0 }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [isInView, delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const timer = setInterval(() => {
      i += 1;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, [started, text]);

  return (
    <span ref={ref}>
      {displayed}
      <span className="inline-block w-[2px] h-[1em] bg-white/70 ml-0.5 align-middle animate-[pulse_1s_ease-in-out_infinite]" />
    </span>
  );
}

function AnimatedCounter({ value }) {
  const numericPart = parseInt(value);
  const suffix = value.replace(/[0-9]/g, "");
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = duration / numericPart;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= numericPart) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [isInView, numericPart]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

const iconMap = { Github: GithubIcon, Linkedin: LinkedinIcon, Twitter: TwitterIcon };

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.045),transparent)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-gray-800/80 bg-gray-950/60 backdrop-blur-sm mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-accent animate-[pulse_1.5s_ease-in-out_infinite]" />
            <span className="relative rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="text-[13px] text-gray-400">Available for opportunities worldwide</span>
        </motion.div>

        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.6, 0, 0.2, 1] }}
          className="text-[clamp(2.8rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.04em] mb-6 whitespace-nowrap"
        >
          <span className="text-white">Favour </span>
          <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            Williams
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.6, 0, 0.2, 1] }}
          className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto mb-4 leading-relaxed"
        >
          <Typewriter text="I build mobile experiences that matter" delay={800} />
        </motion.p>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.6, 0, 0.2, 1] }}
          className="text-[14px] font-mono text-gray-500 mb-12 tracking-wide"
        >
          Mobile (Flutter) Developer &bull; Creative Thinker &bull; Problem Solver
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(255,255,255,0.12)" }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3.5 text-sm font-medium bg-white text-black rounded-lg transition-colors duration-300"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3.5 text-sm font-medium border border-gray-700 text-gray-300 rounded-lg transition-all duration-300 hover:text-white"
          >
            Contact Me
          </motion.a>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex items-center justify-center gap-8 md:gap-14 mb-14"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-8 md:gap-14">
              {i > 0 && <div className="hidden md:block w-px h-10 bg-gradient-to-b from-transparent via-gray-800 to-transparent" />}
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold font-mono bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-[11px] text-gray-600 mt-1.5 uppercase tracking-widest font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex items-center justify-center gap-3"
        >
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, borderColor: "rgba(255,255,255,0.25)" }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-500 hover:text-white transition-colors duration-300"
                aria-label={link.name}
              >
                <Icon size={16} />
              </motion.a>
            );
          })}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-gray-700 uppercase tracking-[0.2em] font-medium">Scroll</span>
          <ArrowDown size={14} className="text-gray-700" />
        </motion.div>
      </motion.div>
    </section>
  );
}
