import { motion } from "framer-motion";

const techs = [
  "Flutter", "Dart", "Firebase", "REST APIs", "WebSocket", "MQTT",
  "GetX", "Riverpod", "Provider", "Node.js", "TypeScript", "JavaScript",
  "Firestore", "RTC", "Figma", "Android Studio", "VS Code", "Git",
];

const doubled = [...techs, ...techs];

export default function TechBanner() {
  return (
    <div className="relative py-14 overflow-hidden border-y border-gray-800/50">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" />

      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {doubled.map((tech, i) => (
          <div
            key={i}
            className="flex items-center gap-3 shrink-0"
          >
            <span className="text-sm font-medium text-gray-500 tracking-wide uppercase">
              {tech}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-700" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
