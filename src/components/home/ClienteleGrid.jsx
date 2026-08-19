"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function ClienteleGrid() {
  return (
    <section id="clientele" className="py-28 bg-[#050507] text-white border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-red-500" />
              <span className="text-xs uppercase tracking-[0.3em] font-mono text-red-500 font-bold">
                Iconic Partners
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight uppercase leading-tight">
              Who We Work With
            </h2>

            <p className="text-gray-300 text-base leading-relaxed font-light">
              We have been entrusted by global market leaders, world sports governing bodies, music titans, and revolutionary disruptors across industries.
            </p>

            <div className="pt-4">
              <Link href="/connect" className="btn-primary">
                <span>Become A Partner</span>
                <ArrowRight className="w-4 h-4 btn-arrow" />
              </Link>
            </div>
          </div>

          {/* Right Logo Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {siteConfig.clientele.map((client, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * idx }}
                className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-red-500/60 hover:bg-white/[0.06] transition-all duration-300 flex flex-col items-center justify-center text-center h-36"
              >
                <ShieldCheck className="w-6 h-6 text-red-500/70 mb-2 group-hover:scale-125 group-hover:text-red-500 transition-all duration-300" />

                <h4 className="text-base font-bold font-heading text-white group-hover:text-red-400 transition-colors">
                  {client.name}
                </h4>

                <span className="text-[10px] uppercase font-mono text-gray-400 mt-1 tracking-widest">
                  {client.category}
                </span>

                <span className="absolute top-2 right-2 text-[9px] font-mono text-red-500/80 opacity-0 group-hover:opacity-100 transition-opacity">
                  {client.tag}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
