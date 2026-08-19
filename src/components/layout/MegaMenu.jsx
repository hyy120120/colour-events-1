"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { X, ArrowUpRight, ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function MegaMenu({ isOpen, onClose }) {
  const [activeHoverImage, setActiveHoverImage] = useState(siteConfig.heroVideoPoster);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="megamenu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[990] bg-[#050507]/95 backdrop-blur-2xl flex flex-col justify-between p-6 md:p-12 text-white overflow-y-auto"
        >
          {/* Header Close Bar */}
          <div className="flex justify-between items-center w-full max-w-7xl mx-auto pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Image
                src={siteConfig.logoUrl}
                alt={siteConfig.brandName}
                width={48}
                height={48}
                className="object-contain"
              />
              <span className="font-heading font-extrabold tracking-widest text-lg text-white">
                {siteConfig.brandName}
              </span>
            </div>

            <button
              onClick={onClose}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:border-red-500 hover:bg-red-600/10 transition-all text-xs uppercase tracking-widest"
            >
              <span>Close Menu</span>
              <X className="w-4 h-4 text-red-500" />
            </button>
          </div>

          {/* Main Content Grid */}
          <div className="w-full max-w-7xl mx-auto my-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Primary Menu Links (Cols 1-6) */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              {siteConfig.menuItems.map((item, idx) => (
                <div key={idx} className="group relative">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      onMouseEnter={() => {
                        if (item.hoverImage) setActiveHoverImage(item.hoverImage);
                        if (item.subCategories) setActiveSubmenu(item.subCategories);
                      }}
                      className="text-3xl md:text-5xl font-extrabold font-heading text-gray-300 hover:text-white transition-colors duration-300 flex items-center justify-between py-2 group-hover:translate-x-3 transition-transform"
                    >
                      <span className="uppercase tracking-wider">{item.label}</span>
                      <ArrowUpRight className="w-7 h-7 opacity-0 group-hover:opacity-100 text-red-500 transition-all -translate-x-4 group-hover:translate-x-0" />
                    </Link>
                  </motion.div>

                  {/* Subcategories preview if available */}
                  {item.subCategories && (
                    <div className="pl-4 py-2 border-l border-white/10 my-2 flex flex-wrap gap-4">
                      {item.subCategories.map((sub, sIdx) => (
                        <Link
                          key={sIdx}
                          href={sub.href}
                          onClick={onClose}
                          className="text-xs uppercase tracking-widest text-gray-400 hover:text-red-400 transition-colors flex items-center gap-1"
                        >
                          <ChevronRight className="w-3 h-3 text-red-500" />
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Dynamic Background Image Reveal Panel (Cols 7-12) */}
            <div className="hidden lg:col-span-6 lg:flex flex-col items-center justify-center relative h-[420px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              <div className="relative z-10 p-8 text-center bg-black/40 backdrop-blur-md rounded-xl border border-white/10 m-6">
                <p className="text-xs font-mono tracking-widest text-red-400 uppercase">
                  Featured Spectacle
                </p>
                <h4 className="text-xl font-bold font-heading mt-1 text-white">
                  Crafting Landmark Live Experiences
                </h4>
              </div>
            </div>
          </div>

          {/* Footer Socials & Contact Bar */}
          <div className="w-full max-w-7xl mx-auto pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
            <div>
              <span>Email: </span>
              <a href={`mailto:${siteConfig.contact.email}`} className="text-white hover:text-red-400 font-mono">
                {siteConfig.contact.email}
              </a>
            </div>

            <div className="flex items-center gap-6">
              {siteConfig.contact.socials.map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.url}
                  target="_blank"
                  rel="noreferrer"
                  className="uppercase tracking-widest hover:text-red-500 transition-colors"
                >
                  {soc.name}
                </a>
              ))}
            </div>

            <p className="text-gray-500 text-[10px] tracking-widest uppercase">
              © {new Date().getFullYear()} {siteConfig.brandName}. All Rights Reserved.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
