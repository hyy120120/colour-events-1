"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Hero Video Background Backdrop */}
      <div className="absolute inset-0 z-0">
        {!videoError ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            poster={siteConfig.heroVideoPoster}
            onError={() => setVideoError(true)}
            className="w-full h-full object-cover object-center filter brightness-95 transition-opacity duration-700"
          >
            <source src={siteConfig.heroVideoUrl} type="video/mp4" />
          </video>
        ) : (
          <img
            src={siteConfig.heroVideoPoster}
            alt={siteConfig.brandName}
            className="w-full h-full object-cover object-center filter brightness-95 scale-105"
          />
        )}

        {/* Subtle Bottom Gradient Fade into Content */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent z-10" />
      </div>

      {/* Hero Bottom Controls & Scroll Indicator */}
      <div className="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-end">
        {/* Audio Mute/Unmute Control */}
        {!videoError && (
          <button
            onClick={toggleMute}
            className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-black/40 hover:bg-red-600/30 border border-white/20 hover:border-red-500 text-xs font-mono uppercase tracking-widest transition-all backdrop-blur-md"
          >
            {isMuted ? (
              <>
                <VolumeX className="w-4 h-4 text-red-400" />
                <span>Unmute Audio</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-green-400" />
                <span>Mute Audio</span>
              </>
            )}
          </button>
        )}

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="hidden md:flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-gray-300 font-mono ml-auto backdrop-blur-md px-4 py-2 rounded-full bg-black/30 border border-white/10"
        >
          <span>Scroll to Experience</span>
          <div className="w-5 h-9 rounded-full border border-white/30 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-red-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
