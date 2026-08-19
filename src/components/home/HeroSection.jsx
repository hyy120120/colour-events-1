"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, ChevronDown, Play } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Video Reel Backdrop */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster={siteConfig.heroVideoPoster}
          className="w-full h-full object-cover scale-105 filter brightness-90"
        >
          <source src={siteConfig.heroVideoUrl} type="video/mp4" />
        </video>

        {/* Ambient Gradient Overlays inspired by DNA Networks */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/40 to-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050507]/80 via-transparent to-[#050507]/80 z-10" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full flex flex-col justify-end h-full pb-20 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-mono font-semibold uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span>Global Live Experience Agency</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-heading leading-[1.05] tracking-tight text-white drop-shadow-2xl uppercase">
            {siteConfig.heroTitle}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-300 font-light max-w-2xl leading-relaxed">
            {siteConfig.heroTagline}
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a href="#featured-work" className="btn-primary">
              <span>Explore Our Work</span>
              <ChevronDown className="w-4 h-4 btn-arrow" />
            </a>

            <button
              onClick={toggleMute}
              className="flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-mono uppercase tracking-widest transition-all backdrop-blur-md"
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
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 right-8 z-20 hidden md:flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-gray-400 font-mono"
      >
        <span>Scroll to Experience</span>
        <div className="w-6 h-10 rounded-full border border-white/30 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-red-500"
          />
        </div>
      </motion.div>
    </section>
  );
}
