"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 4;
      });
    }, 35);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader-curtain"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050507] text-white overflow-hidden"
        >
          {/* Ambient Glow Pulse */}
          <div className="absolute w-[500px] h-[500px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none animate-pulseGlow" />

          {/* SVG Mask Container Inspired by DNA Networks */}
          <div className="relative flex flex-col items-center gap-6 z-10 px-6 text-center">
            {/* Logo Reveal */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="relative w-36 h-36 md:w-44 md:h-44"
            >
              <Image
                src={siteConfig.logoUrl}
                alt={siteConfig.brandName}
                fill
                priority
                className="object-contain drop-shadow-[0_0_35px_rgba(229,45,39,0.5)]"
              />
            </motion.div>

            {/* Title */}
            <div>
              <h1 className="text-3xl md:text-4xl font-black font-heading tracking-widest text-white uppercase">
                {siteConfig.brandName}
              </h1>
              <p className="text-xs uppercase tracking-[0.35em] text-red-500 font-mono mt-1">
                {siteConfig.brandSubtitle}
              </p>
            </div>

            {/* Progress Counter & Animated Bar */}
            <div className="w-64 mt-6 flex flex-col items-center gap-2">
              <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-red-600 via-amber-500 to-white"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between w-full text-[10px] font-mono tracking-widest text-gray-400 mt-1">
                <span>LOADING EXPERIENCE</span>
                <span className="text-red-400 font-bold">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
