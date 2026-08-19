"use client";

import { motion } from "framer-motion";
import { Lightbulb, Cpu, HardHat, Radio, ArrowRight } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

export default function ProcessPage() {
  const steps = [
    {
      step: "01",
      title: "Discovery & Creative Brief",
      subtitle: "Vision & Concept Alignment",
      description: "We work directly with your leadership team to define aesthetic goals, guest hospitality scope, stage scale, and venue logistics.",
      icon: Lightbulb
    },
    {
      step: "02",
      title: "Technical Architecture & 3D CAD",
      subtitle: "Engineering Precision",
      description: "Custom 3D stage modeling, line array acoustic simulation, LED wall canvas mapping, and pyro safety compliance modeling.",
      icon: Cpu
    },
    {
      step: "03",
      title: "Fabrication & On-Site Setup",
      subtitle: "Turnkey Installation",
      description: "On-site rigging, truss erection, floral mandap installation, VIP lounge creation, and technical rehearsals.",
      icon: HardHat
    },
    {
      step: "04",
      title: "Live Show Direction & Stream",
      subtitle: "Seamless Execution",
      description: "Real-time showrun directing, multi-camera live broadcast feed, satellite uplink, and complete crowd safety management.",
      icon: Radio
    }
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
            Turnkey Production Workflow
          </span>
          <h1 className="text-5xl sm:text-7xl font-black font-heading tracking-tight uppercase mt-2">
            Our Process
          </h1>
          <p className="text-gray-300 text-lg font-light mt-4 leading-relaxed">
            From initial creative concept to high-octane live show execution, discover our 4-stage event production methodology.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
                className="p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-red-500/60 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-4xl font-black font-heading text-red-500/40 group-hover:text-red-500 transition-colors">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                  </div>

                  <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-bold">
                    {item.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-white mt-1 group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm text-gray-300 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 p-10 rounded-3xl bg-gradient-to-r from-red-950/40 via-black to-red-950/40 border border-red-500/30 text-center space-y-6">
          <h3 className="text-3xl font-black font-heading uppercase text-white">
            Ready to Plan Your Spectacle?
          </h3>
          <p className="text-gray-300 text-sm max-w-xl mx-auto">
            Connect with our event directors in Surat to discuss venue logistics, budget, and creative design.
          </p>
          <div>
            <Link href="/contact" className="btn-primary">
              <span>Start Production Brief</span>
              <ArrowRight className="w-4 h-4 btn-arrow" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
