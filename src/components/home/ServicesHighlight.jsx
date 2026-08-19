"use client";

import { motion } from "framer-motion";
import { Trophy, Music, Briefcase, Video, ArrowRight } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

const iconMap = {
  Trophy: Trophy,
  Music: Music,
  Briefcase: Briefcase,
  Video: Video,
};

export default function ServicesHighlight() {
  return (
    <section className="py-28 bg-[#08080c] text-white border-t border-white/5 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-red-500" />
              <span className="text-xs uppercase tracking-[0.3em] font-mono text-red-500 font-bold">
                Capabilities
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black font-heading tracking-tight uppercase">
              Our Services
            </h2>
          </div>

          <Link href="/services" className="btn-primary">
            <span>Explore All Services</span>
            <ArrowRight className="w-4 h-4 btn-arrow" />
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteConfig.services.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Trophy;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
                className="relative p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-red-500/60 hover:bg-white/[0.04] transition-all duration-500 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-500 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                      Pillar 0{idx + 1}
                    </span>
                  </div>

                  <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-bold">
                    {service.subtitle}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold font-heading text-white mt-1 group-hover:text-red-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm text-gray-400 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-300 group-hover:text-white transition-colors">
                  <span>Learn Production Specs</span>
                  <ArrowRight className="w-4 h-4 text-red-500 group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
