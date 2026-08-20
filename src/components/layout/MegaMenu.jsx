"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function MegaMenu({ isOpen, onClose }) {
  const [activeHoverImage, setActiveHoverImage] = useState(siteConfig.heroVideoPoster);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="megamenu"
          data-lenis-prevent
          initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", opacity: 0 }}
          animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 1 }}
          exit={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", opacity: 0 }}
          transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[980] bg-[#08090d] flex flex-col justify-between pt-28 md:pt-32 pb-12 px-4 sm:px-8 md:px-12 text-white overflow-y-auto overscroll-contain"
        >
          {/* Main Content Split Grid */}
          <div className="w-full max-w-[1536px] mx-auto my-auto py-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column (Solid Dark Black Background for Text Navigation Links) */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#e52d27] font-bold"
              >
                Navigation Directory
              </motion.span>

              {siteConfig.menuItems.map((item, idx) => (
                <div key={idx} className="group relative">
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.15 + 0.08 * idx,
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      onMouseEnter={() => {
                        if (item.hoverImage) setActiveHoverImage(item.hoverImage);
                      }}
                      className="inline-flex items-center gap-4 text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-gray-300 hover:text-[#e52d27] transition-colors duration-300 py-1.5 group-hover:translate-x-2 transition-transform"
                    >
                      <span className="uppercase tracking-wide">{item.label}</span>
                      <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10 opacity-0 group-hover:opacity-100 text-[#e52d27] transition-all duration-300 -translate-x-3 group-hover:translate-x-0 shrink-0" />
                    </Link>
                  </motion.div>

                  {/* Subcategories preview if available */}
                  {item.subCategories && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 + 0.08 * idx, duration: 0.5 }}
                      className="pl-4 py-2 border-l-2 border-[#e52d27]/40 my-2 flex flex-wrap gap-4"
                    >
                      {item.subCategories.map((sub, sIdx) => (
                        <Link
                          key={sIdx}
                          href={sub.href}
                          onClick={onClose}
                          className="text-xs uppercase tracking-widest text-gray-400 hover:text-[#e52d27] transition-colors flex items-center gap-1 font-semibold"
                        >
                          <ChevronRight className="w-3 h-3 text-[#e52d27]" />
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Column (Dynamic Event Showcase Image Panel) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:col-span-6 lg:flex flex-col items-center justify-center relative h-[460px] rounded-3xl overflow-hidden border border-[#e52d27]/30 shadow-2xl bg-[#0e1017]"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeHoverImage}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeHoverImage}
                    alt="Event Showcase Preview"
                    fill
                    className="object-cover filter contrast-105 brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-[#08090d]/30 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Showcase Banner overlay */}
              <div className="relative z-10 p-8 text-center bg-[#08090d]/85 backdrop-blur-md rounded-2xl border border-[#e52d27]/30 m-8 max-w-md shadow-2xl">
                <p className="text-xs font-mono tracking-[0.25em] text-[#e52d27] uppercase font-bold">
                  Colours Showcase
                </p>
                <h4 className="text-xl font-bold font-heading mt-2 text-white uppercase tracking-wide">
                  Crafting Landmark Live Experiences
                </h4>
              </div>
            </motion.div>

          </div>

          {/* Footer Socials & Contact Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="w-full max-w-[1536px] mx-auto pt-5 border-t border-[#e52d27]/25 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-mono"
          >
            <div>
              <span>Email: </span>
              <a href={`mailto:${siteConfig.contact.email}`} className="text-white hover:text-[#e52d27] font-semibold transition-colors">
                {siteConfig.contact.email}
              </a>
            </div>

            <div className="flex items-center gap-6 font-semibold">
              {siteConfig.contact.socials.map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.url}
                  target="_blank"
                  rel="noreferrer"
                  className="uppercase tracking-widest text-white hover:text-[#e52d27] transition-colors"
                >
                  {soc.name}
                </a>
              ))}
            </div>

            <p className="text-gray-400 text-[10px] tracking-widest uppercase">
              © {new Date().getFullYear()} {siteConfig.brandName}. All Rights Reserved.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
