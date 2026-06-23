"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] px-6 py-12 mx-auto max-w-4xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="space-y-8"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          About Us
        </h1>
        
        <div className="space-y-6">
          <p className="text-xl sm:text-2xl md:text-3xl leading-relaxed text-foreground/90 font-medium tracking-tight">
            The cybersecurity society of <span className="text-foreground font-bold border-b-2 border-foreground/20 pb-1">Amity International School, Sector 46, Gurugram</span>.
          </p>
          
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-foreground/60 max-w-3xl mx-auto font-light">
            Awareness, hands-on training, and incident response — run by students, for students.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
