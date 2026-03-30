import { motion } from "framer-motion";

export default function Logo() {
  return (
    <a href="#" className="flex items-center group" aria-label="Home">
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center"
      >
        <span className="text-xl font-extrabold tracking-tight uppercase text-white">
          FAVOUR
        </span>
        <span className="text-xl font-extrabold tracking-tight uppercase text-gray-500">
          WILLIAMS
        </span>
      </motion.div>
    </a>
  );
}
