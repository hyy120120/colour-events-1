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
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[980] bg-[#08090d]/98 backdrop-blur-3xl flex flex-col justify-between pt-28 md:pt-32 pb-10 px-4 sm:px-8 md:px-12 text-white overflow-y-auto"
        >
          {/* Main Content Grid */}
          <div className="w-full max-w-[1536px] mx-auto my-auto py-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Primary Menu Links */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              {siteConfig.menuItems.map((item, idx) => (
                <div key={idx} className="group relative">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      onMouseEnter={() => {
                        if (item.hoverImage) setActiveHoverImage(item.hoverImage);
                      }}
                      className="text-3xl md:text-5xl font-extrabold font-heading text-gray-300 hover:text-[#e52d27] transition-colors duration-300 flex items-center justify-between py-2 group-hover:translate-x-3 transition-transform"
                    >
                      <span className="uppercase tracking-wider">{item.label}</span>
                      <ArrowUpRight className="w-7 h-7 opacity-0 group-hover:opacity-100 text-[#e52d27] transition-all -translate-x-4 group-hover:translate-x-0" />
                    </Link>
                  </motion.div>

                  {/* Subcategories preview if available */}
                  {item.subCategories && (
                    <div className="pl-4 py-2 border-l border-[#e52d27]/30 my-2 flex flex-wrap gap-4">
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
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Dynamic Background Image Reveal Panel */}
            <div className="hidden lg:col-span-6 lg:flex flex-col items-center justify-center relative h-[380px] rounded-2xl overflow-hidden border border-[#e52d27]/25 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeHoverImage}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeHoverImage}
                    alt="Preview"
                    fill
                    className="object-cover brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              <div className="relative z-10 p-8 text-center bg-[#08090d]/80 backdrop-blur-md rounded-xl border border-[#e52d27]/30 m-6">
                <p className="text-xs font-mono tracking-widest text-[#e52d27] uppercase font-bold">
                  Featured Spectacle
                </p>
                <h4 className="text-xl font-bold font-heading mt-1 text-white uppercase tracking-wide">
                  Crafting Landmark Live Experiences
                </h4>
              </div>
            </div>
          </div>

          {/* Footer Socials & Contact Bar */}
          <div className="w-full max-w-[1536px] mx-auto pt-4 border-t border-[#e52d27]/25 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
            <div>
              <span>Email: </span>
              <a href={`mailto:${siteConfig.contact.email}`} className="text-white hover:text-[#e52d27] font-mono font-semibold">
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

            <p className="text-gray-400 text-[10px] tracking-widest uppercase font-mono">
              © {new Date().getFullYear()} {siteConfig.brandName}. All Rights Reserved.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
