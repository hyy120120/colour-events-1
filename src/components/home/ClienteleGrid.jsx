"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function ClienteleGrid() {
  return (
    <section id="clientele" className="py-28 bg-[#050507] text-white border-t border-white/5 relative">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-red-600/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-red-500" />
              <span className="text-xs uppercase tracking-[0.3em] font-mono text-red-500 font-bold">
                Who We Work With
              </span>
            </div>

            <h2 className="heading-primary">
              Iconic Partners
            </h2>

            <p className="text-gray-300 text-base leading-relaxed font-light">
              We have been entrusted by renowned institutions, trade guilds, wedding venues, and disruptors across India to deliver landmark activations.
            </p>

            <div className="pt-4">
              <Link href="/contact" className="btn-primary">
                <span>View Full Clientele</span>
                <ArrowRight className="w-4 h-4 btn-arrow" />
              </Link>
            </div>
          </div>

          {/* Right 3D Flip Card Grid Inspired by DNA Networks */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-5">
            {siteConfig.clientele.map((client, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 * idx }}
                className="logo-card-perspective h-40 cursor-pointer"
              >
                <div className="logo-card-inner">
                  {/* Front Card Face */}
                  <div className="logo-card-front shadow-xl">
                    <ShieldCheck className="w-7 h-7 text-red-500 mb-2" />
                    <h4 className="text-base font-bold font-heading text-white text-center">
                      {client.name}
                    </h4>
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mt-1">
                      {client.category}
                    </span>
                  </div>

                  {/* Back Card Face (Revealed on 3D Flip) */}
                  <div className="logo-card-back shadow-2xl">
                    <Star className="w-5 h-5 text-amber-400 mb-1" />
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-widest text-center">
                      {client.tag}
                    </span>
                    <span className="text-[10px] text-gray-300 font-mono mt-1">
                      Verified Client
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
