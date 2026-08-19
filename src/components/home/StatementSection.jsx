"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";

export default function StatementSection() {
  return (
    <section className="relative py-28 md:py-36 bg-[#050507] text-white border-t border-white/5 overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-red-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Label Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-8 h-[1px] bg-red-500" />
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-red-500 font-bold">
            Who We Are
          </span>
        </motion.div>

        {/* Large Statement Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-heading leading-[1.2] text-gray-100 tracking-tight">
            {siteConfig.aboutStatement}
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-red-500/50 hover:bg-white/[0.04] transition-all duration-300 group"
            >
              <div className="text-5xl md:text-6xl font-black font-heading text-white group-hover:text-red-400 transition-colors">
                {stat.number}
              </div>
              <h3 className="mt-3 text-base font-bold text-gray-200 tracking-wide">
                {stat.label}
              </h3>
              <p className="mt-1 text-xs text-gray-400 font-light leading-relaxed">
                {stat.description}
              </p>

              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-red-600/20 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
