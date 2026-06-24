"use client";

import { motion, useReducedMotion } from "framer-motion";
import LogoIcon from "@/assets/logo/logo-icon";

type Floater = {
  className: string; // position + size via Tailwind
  opacity: number;
  duration: number;
  delay: number;
  yRange: number;
  rotateRange: number;
};

// Scattered around the edges, away from the centered hero text.
const floaters: Floater[] = [
  { className: "top-[10%] left-[6%] w-7 h-7",   opacity: 0.10, duration: 9,    delay: 0,   yRange: 16, rotateRange: 10 },
  { className: "top-[18%] left-[88%] w-5 h-5",  opacity: 0.08, duration: 11,   delay: 1.2, yRange: 20, rotateRange: -14 },
  { className: "top-[70%] left-[9%] w-4 h-4",   opacity: 0.07, duration: 8,    delay: 0.6, yRange: 14, rotateRange: 12 },
  { className: "top-[78%] left-[90%] w-6 h-6",  opacity: 0.09, duration: 10,   delay: 2,   yRange: 18, rotateRange: -8 },
  { className: "top-[44%] left-[3%] w-4 h-4",   opacity: 0.06, duration: 7.5,  delay: 1.8, yRange: 12, rotateRange: 14 },
  { className: "top-[6%] left-[52%] w-5 h-5",   opacity: 0.07, duration: 9.5,  delay: 0.4, yRange: 16, rotateRange: -10 },
  { className: "top-[86%] left-[48%] w-6 h-6",  opacity: 0.08, duration: 10.5, delay: 1,   yRange: 14, rotateRange: 8 },
];

export function FloatingLogos() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {floaters.map((f, i) => (
        <motion.div
          key={i}
          className={`absolute text-[var(--foreground)] ${f.className}`}
          style={{ opacity: f.opacity }}
          animate={
            shouldReduceMotion
              ? undefined
              : { y: [0, -f.yRange, 0], rotate: [0, f.rotateRange, 0] }
          }
          transition={{
            duration: f.duration,
            delay: f.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <LogoIcon className="w-full h-full" />
        </motion.div>
      ))}
    </div>
  );
}
