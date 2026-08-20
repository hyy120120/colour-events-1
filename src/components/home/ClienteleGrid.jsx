"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Building2, Crown, Award, Calendar, Gem, Shirt, Music2 } from "lucide-react";

export default function ClienteleGrid() {
  // Real clients, partners & flagship IPs from coloursevents.com
  const clientBrands = [
    {
      id: "eventology",
      name: "EVENTOLOGY",
      subtitle: "EVENT LOGISTICS & PRODUCTION",
      icon: Building2,
      category: "Flagship Brand",
      highlight: "SURAT HEADQUARTERS",
    },
    {
      id: "mudfest",
      name: "MUDFEST SURAT",
      subtitle: "ANNUAL CULTURAL FESTIVAL",
      icon: Sparkles,
      category: "Cultural IP",
      highlight: "HERBAL HOLI FESTIVAL",
    },
    {
      id: "colours-wedding",
      name: "COLOURS WEDDINGS",
      subtitle: "DESTINATION & NRI WEDDINGS",
      icon: Crown,
      category: "Luxury Studio",
      highlight: "BESPOKE CELEBRATIONS",
    },
    {
      id: "iifd",
      name: "IIFD SURAT",
      subtitle: "FASHION DESIGN INSTITUTE",
      icon: Award,
      category: "Academic Partner",
      highlight: "FASHION SHOW PARTNER",
    },
    {
      id: "ramotsav",
      name: "RAMOTSAV GALA",
      subtitle: "GRAND CULTURAL CELEBRATION",
      icon: Music2,
      category: "Celebration IP",
      highlight: "SURAT CULTURAL NIGHT",
    },
    {
      id: "utsav-vatika",
      name: "UTSAV VATIKA",
      subtitle: "ROYAL ESTATE VENUE",
      icon: Crown,
      category: "Venue Partner",
      highlight: "DESTINATION VENUE",
    },
    {
      id: "jewellery-guild",
      name: "JEWELLERS GUILD",
      subtitle: "SURAT JEWELRY ASSOCIATION",
      icon: Gem,
      category: "Industry Guild",
      highlight: "ANNUAL GALA EXPO",
    },
    {
      id: "textile-guild",
      name: "GUJARAT TEXTILE",
      subtitle: "TEXTILE INDUSTRY FORUM",
      icon: Shirt,
      category: "Industry Partner",
      highlight: "RUNWAY & EXPO",
    },
  ];

  return (
    <section id="clientele" className="relative py-24 md:py-32 bg-white text-[#111116] border-t border-gray-200 overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Stacked Highlight Block Title */}
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
                Trusted Brands & Clients
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
              We have been entrusted by Gujarat’s premier institutions, corporate guilds, landmark venues, and our own flagship cultural properties across Surat & beyond.
            </p>

            {/* Bottom VIEW MORE Link */}
            <div className="pt-6 border-t border-gray-200">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#111116] hover:text-[#e52d27] transition-colors"
              >
                <span>CONNECT WITH US</span>
                <div className="flex items-center">
                  <span className="w-16 h-[1.5px] bg-[#111116] group-hover:bg-[#e52d27] transition-colors" />
                  <span className="w-0 h-0 border-y-4 border-y-transparent border-l-6 border-l-[#111116] group-hover:border-l-[#e52d27] -ml-1 transition-colors" />
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Right Column - DNA Networks Clean Light Animated Matrix Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 border border-gray-200 rounded-2xl overflow-hidden shadow-sm bg-white divide-x divide-y divide-gray-200">
              {clientBrands.map((client) => {
                const IconComp = client.icon;
                return (
                  <div
                    key={client.id}
                    className="group relative h-48 p-5 bg-[#fafafa] hover:bg-white transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden border-t-2 border-t-transparent hover:border-t-[#e52d27] hover:shadow-lg hover:-translate-y-0.5"
                  >
                    {/* Top Micro Category & Arrow */}
                    <div className="flex items-center justify-between w-full">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-gray-400 group-hover:text-[#e52d27] transition-colors">
                        {client.category}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#e52d27] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>

                    {/* Center Brand Icon & Title */}
                    <div className="my-auto text-center flex flex-col items-center justify-center space-y-1">
                      <div className="w-10 h-10 rounded-full bg-white group-hover:bg-[#e52d27]/10 flex items-center justify-center transition-colors duration-300">
                        <IconComp className="w-5 h-5 text-gray-700 group-hover:text-[#e52d27] transition-all duration-300 group-hover:scale-110" />
                      </div>
                      <h4 className="text-xs font-heading font-extrabold text-[#111116] uppercase tracking-wider">
                        {client.name}
                      </h4>
                      <p className="text-[8px] font-mono text-gray-400 uppercase tracking-tight">
                        {client.subtitle}
                      </p>
                    </div>

                    {/* Bottom Animated Highlight Tag */}
                    <div className="w-full text-center border-t border-gray-200/60 pt-2 transition-colors">
                      <span className="text-[8px] font-mono font-bold text-gray-500 group-hover:text-[#e52d27] uppercase tracking-widest transition-colors">
                        {client.highlight}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}