import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";
import Logo from "./Logo";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-black/70 border-b border-white/[0.06] shadow-[0_1px_40px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 h-[72px] flex items-center justify-between">
        <Logo />

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 text-[13px] font-medium rounded-lg transition-colors duration-300 ${
                active === link.href.slice(1)
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {link.label}
              {active === link.href.slice(1) && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-0 rounded-lg bg-white/[0.06] border border-white/[0.08]"
                  transition={{ type: "spring", damping: 30, stiffness: 300 }}
                  style={{ zIndex: -1 }}
                />
              )}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="group relative px-5 py-2 text-[13px] font-medium bg-white text-black rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
          >
            <span className="relative z-10">Get in Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden border-t border-white/5 bg-black/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`px-4 py-3 text-base rounded-lg transition-colors ${
                    active === link.href.slice(1)
                      ? "text-white bg-white/[0.06]"
                      : "text-gray-400 hover:text-white hover:bg-white/[0.03]"
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 px-5 py-3 text-center text-sm font-medium bg-white text-black rounded-lg"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
