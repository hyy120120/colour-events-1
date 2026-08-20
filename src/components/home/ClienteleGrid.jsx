"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function ClienteleGrid() {
  return (
    <section
      id="clientele"
      className="clientele-light-section py-24 md:py-32 border-t border-black/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-start">
          {/* Left Column — Editorial Heading */}
          <div className="lg:col-span-4 space-y-8">
            <span className="block text-sm font-medium text-[#d4af37] italic">
              That&apos;s Entertainment
            </span>

            <h2 className="marker-heading font-heading uppercase font-extrabold leading-[1.05] text-[clamp(2.5rem,4.2vw,3.6rem)] tracking-tight">
              <span>WHO WE</span>
              <br />
              <span>WORK</span>
              <br />
              <span>WITH</span>
            </h2>

            <p className="text-[#555560] text-base leading-relaxed max-w-sm">
              We have been entrusted by renowned and prosperous companies, as well as
              emerging disruptors who are making waves in their industries.
            </p>

            <Link
              href="/contact"
              className="inline-flex flex-col gap-2 group w-fit"
            >
              <span className="w-full h-px bg-black/70" />
              <span className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#111114]">
                View More
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </div>

          {/* Right Column — Hairline Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 border-t border-l border-black/10">
            {siteConfig.clientele.map((client, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.04 * idx, ease: [0.16, 1, 0.3, 1] }}
                className="client-cell border-r border-b border-black/10"
              >
                <span className="client-cell-label">{client.name}</span>
                <span className="client-cell-rule" />
                <div className="client-cell-body">
                  <span className="client-cell-wordmark">{client.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}