import { motion } from "framer-motion";

export default function SectionHeader({ number, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.6, 0, 0.2, 1] }}
      className="mb-16"
    >
      <div className="flex items-center gap-4 mb-5">
        <span className="font-mono text-[13px] text-gray-600">{number}</span>
        <div className="h-px w-12 bg-gradient-to-r from-gray-700 to-transparent" />
      </div>
      <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold tracking-[-0.03em] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
}
