import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./icons";
import { socialLinks } from "../data/portfolio";

const iconMap = { Github: GithubIcon, Linkedin: LinkedinIcon, Twitter: TwitterIcon };

export default function Contact() {
  return (
    <section id="contact" className="relative py-40 px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(255,255,255,0.02),transparent)]" />

      <div className="relative max-w-[700px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-700" />
          <span className="font-mono text-[13px] text-gray-600">05</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-gray-700" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.6, 0, 0.2, 1] }}
          className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.03em] mb-6"
        >
          Let&apos;s Work{" "}
          <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Together
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 text-[17px] mb-12 leading-relaxed max-w-lg mx-auto"
        >
          Have a project in mind or just want to say hello? I&apos;m always open
          to discussing new opportunities and creative ideas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <motion.a
            href="mailto:hello.williamsfav@gmail.com"
            whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(255,255,255,0.12)" }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 text-sm font-medium bg-white text-black rounded-lg transition-all duration-300"
          >
            <Mail size={15} />
            Say Hello
          </motion.a>
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 text-sm font-medium border border-gray-700 text-gray-300 rounded-lg hover:text-white transition-all duration-300"
          >
            Resume
            <ArrowUpRight size={15} />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-8"
        >
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="flex items-center gap-2.5 text-[13px] text-gray-600 hover:text-white transition-colors duration-300"
              >
                <Icon size={14} />
                {link.name}
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
