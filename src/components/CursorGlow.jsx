import { useState, useEffect } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handler = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-30 w-[400px] h-[400px] rounded-full hidden md:block"
      style={{
        left: position.x - 200,
        top: position.y - 200,
        background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
        willChange: "transform",
      }}
    />
  );
}
