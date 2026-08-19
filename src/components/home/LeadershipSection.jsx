"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function LeadershipSection() {
  const { leadership } = siteConfig;

  return (
    <section className="py-28 bg-[#030305] text-white border-t border-white/5 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Executive Image Column (Cols 1-5) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative h-[480px] md:h-[560px] rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
              <Image
                src={leadership.image}
                alt={leadership.founderName}
                fill
                className="object-cover object-top filter contrast-105 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent" />

              {/* Signature Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10">
                <span className="font-serif italic text-2xl md:text-3xl tracking-wide text-red-400">
                  {leadership.signatureText}
                </span>
                <div className="mt-2 text-xs font-mono uppercase tracking-widest text-gray-300">
                  {leadership.founderName}
                </div>
                <div className="text-[10px] uppercase font-mono tracking-widest text-red-500 font-bold">
                  {leadership.founderRole}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Executive Quote Column (Cols 6-12) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-red-500" />
              <span className="text-xs uppercase tracking-[0.3em] font-mono text-red-500 font-bold">
                Leadership Vision
              </span>
            </div>

            <div className="relative">
              <Quote className="w-16 h-16 text-red-500/20 absolute -top-8 -left-6 pointer-events-none" />
              <h3 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white leading-tight uppercase relative z-10">
                {leadership.quote}
              </h3>
            </div>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
              {leadership.bio}
            </p>

            <div className="pt-4 grid grid-cols-2 gap-6 border-t border-white/10 text-xs font-mono">
              <div>
                <span className="text-gray-400 block uppercase tracking-widest">Industry Service</span>
                <span className="text-xl font-bold font-heading text-white">40+ Years</span>
              </div>
              <div>
                <span className="text-gray-400 block uppercase tracking-widest">Milestone Events</span>
                <span className="text-xl font-bold font-heading text-red-400">10,000+ Delivered</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
