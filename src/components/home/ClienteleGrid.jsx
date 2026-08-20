"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldCheck, Star } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function ClienteleGrid() {
  const clients = [
    { name: "IIFD SURAT", label: "DESIGN INSTITUTE", tag: "Exhibition Partner" },
    { name: "UTSAV VATIKA", label: "LUXURY ESTATE", tag: "Wedding Venue Partner" },
    { name: "SURAT TRADE CENTER", label: "EXHIBITION HUB", tag: "Event Venue" },
    { name: "JEWELERS ASSOC.", label: "CORPORATE GUILD", tag: "Annual Gala" },
    { name: "TEXTILE FORUM", label: "INDUSTRY LEADERS", tag: "Brand Launch" },
    { name: "REAL ESTATE GUILD", label: "PROPERTY EXPO", tag: "Property Expo" },
    { name: "GOLDMAN SACHS", label: "FINANCIAL SERVICES", tag: "Corporate Gala" },
    { name: "PRO KABADDI", label: "SPORTS LEAGUE", tag: "League Activations" },
  ];

  return (
    <section id="clientele" className="relative py-28 md:py-36 bg-white text-[#111116] border-t border-gray-200 overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - DNA Networks Exact Stacked Block Typography Layout */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Top Micro Label */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#e52d27]" />
              <span className="title-micro text-[#e52d27]">
                Trusted Partnerships
              </span>
            </div>

            {/* DNA Networks Stacked Block Highlight Headline */}
            <div className="flex flex-col items-start gap-1 font-heading font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#111116] uppercase leading-[0.95]">
              <span className="bg-[#e3e5e9] px-4 py-1.5 rounded-sm inline-block">
                WHO WE
              </span>
              <span className="bg-[#e3e5e9] px-4 py-1.5 rounded-sm inline-block">
                WORK
              </span>
              <span className="bg-[#e3e5e9] px-4 py-1.5 rounded-sm inline-block">
                WITH
              </span>
            </div>

            {/* Description Paragraph */}
            <p className="text-[#55555c] text-base md:text-lg leading-relaxed font-light max-w-md pt-2">
              We have been entrusted by renowned and prosperous companies, as well as emerging disruptors who are making waves in their industries.
            </p>

            {/* Bottom VIEW MORE ──────> Link matching DNA Networks */}
            <div className="pt-6 border-t border-gray-200">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#111116] hover:text-[#e52d27] transition-colors"
              >
                <span>VIEW MORE</span>
                {/* Horizontal Shaft Arrow */}
                <div className="flex items-center">
                  <span className="w-16 h-[1.5px] bg-[#111116] group-hover:bg-[#e52d27] transition-colors" />
                  <span className="w-0 h-0 border-y-4 border-y-transparent border-l-6 border-l-[#111116] group-hover:border-l-[#e52d27] -ml-1 transition-colors" />
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Right Column - DNA Networks Clean Matrix Grid of White Client Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 border border-gray-200 shadow-sm bg-white">
              {clients.map((client, idx) => (
                <div
                  key={idx}
                  className="logo-card-perspective h-44 border-r border-b border-gray-200 bg-white relative group cursor-pointer"
                >
                  <div className="logo-card-inner">
                    {/* Front Card Face - Crisp Minimalist White */}
                    <div className="logo-card-front bg-white p-5 flex flex-col justify-between items-start text-left">
                      <span className="text-[9px] font-mono font-bold text-gray-500 uppercase tracking-widest">
                        {client.name}
                      </span>

                      <div className="my-auto w-full flex flex-col items-center justify-center">
                        <ShieldCheck className="w-8 h-8 text-[#111116] group-hover:text-[#e52d27] transition-colors mb-1" />
                        <span className="text-xs font-heading font-extrabold text-[#111116] text-center tracking-wide">
                          {client.name}
                        </span>
                      </div>

                      <span className="text-[8px] font-mono text-gray-400 uppercase tracking-wider">
                        {client.label}
                      </span>
                    </div>

                    {/* Back Card Face - Signature Red Accent */}
                    <div className="logo-card-back bg-gradient-to-br from-[#e52d27] to-[#b31217] text-white p-5 flex flex-col justify-center items-center text-center shadow-xl">
                      <Star className="w-6 h-6 text-amber-300 mb-2 drop-shadow-[0_0_8px_rgba(252,211,77,0.8)]" />
                      <span className="text-xs font-mono font-bold uppercase tracking-widest">
                        {client.tag}
                      </span>
                      <span className="text-[9px] text-gray-200 font-mono mt-1">
                        Verified Partner
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}