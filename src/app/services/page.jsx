"use client";

import { motion } from "framer-motion";
import { Trophy, Music, Briefcase, Video, ShieldCheck, Zap, Radio, Cpu } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

const iconMap = {
  Trophy: Trophy,
  Music: Music,
  Briefcase: Briefcase,
  Video: Video,
};

export default function ServicesPage() {
  const specs = [
    { icon: Zap, title: "100kW+ Spatial Audio", desc: "Line array acoustic tuning for stadium reverberation control." },
    { icon: Radio, title: "4K Broadcast Uplink", desc: "Redundant satellite video transmission and ultra-low latency streaming." },
    { icon: Cpu, title: "Kinetic LED Rigging", desc: "Automated winch mechanics for dynamic stage transformations." },
    { icon: ShieldCheck, title: "Crowd Safety Operations", desc: "Integrated biometric entry management and emergency response plans." }
  ];

  return (
    <div className="pt-32 pb-28 bg-[#050507] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20"
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-red-500 font-bold">
            End-To-End Production
          </span>
          <h1 className="text-5xl sm:text-7xl font-black font-heading tracking-tight uppercase mt-2">
            Our Services
          </h1>
          <p className="text-gray-300 text-lg font-light mt-4 leading-relaxed">
            We provide comprehensive event architecture, technical direction, broadcast engineering, and pitch operations tailored for stadium & arena scale events.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="space-y-16">
          {siteConfig.services.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Trophy;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-4 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-500">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-bold block">
                    Pillar 0{idx + 1} • {service.subtitle}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-white">
                    {service.title}
                  </h2>
                </div>

                <div className="lg:col-span-8 space-y-6">
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                    {service.description}
                  </p>

                  <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4">
                    <span className="text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300">
                      3D CAD Modeling
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300">
                      Custom Structural Trussing
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300">
                      Pyro & Flame Controls
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Technical Engineering Highlights */}
        <div className="mt-28 p-10 md:p-14 rounded-3xl bg-gradient-to-r from-red-950/40 via-black to-red-950/40 border border-red-500/30">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-red-400 font-bold">
              Technical Excellence
            </span>
            <h2 className="text-3xl md:text-4xl font-black font-heading tracking-tight uppercase mt-2">
              Engineering Specs
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {specs.map((spec, i) => {
              const SpecIcon = spec.icon;
              return (
                <div key={i} className="space-y-3 p-6 rounded-2xl bg-black/50 border border-white/10">
                  <SpecIcon className="w-7 h-7 text-red-500" />
                  <h4 className="text-lg font-bold font-heading text-white">{spec.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{spec.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link href="/connect" className="btn-primary">
              <span>Request Technical Rider</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
