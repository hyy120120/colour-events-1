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
          setTimeout(() => setIsLoading(false), 400);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050507] text-white"
        >
          {/* Background Ambient Glow */}
          <div className="absolute w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none animate-pulseGlow" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Logo */}
            <div className="relative w-36 h-36 md:w-44 md:h-44">
              <Image
                src={siteConfig.logoUrl}
                alt={siteConfig.brandName}
                fill
                priority
                className="object-contain drop-shadow-[0_0_25px_rgba(229,45,39,0.4)]"
              />
            </div>

            {/* Typography */}
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-widest font-heading text-white">
                {siteConfig.brandName}
              </h2>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mt-1">
                {siteConfig.brandSubtitle}
              </p>
            </div>

            {/* Progress Bar & Counter */}
            <div className="w-56 mt-4 flex flex-col items-center gap-2">
              <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-red-600 to-amber-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-xs tracking-widest text-gray-400 font-mono">
                {progress}%
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
