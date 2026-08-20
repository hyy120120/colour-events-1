"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronRight, Instagram, Linkedin, Youtube, Facebook, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const socialIconMap = {
  Instagram: Instagram,
  LinkedIn: Linkedin,
  YouTube: Youtube,
  Facebook: Facebook,
  WhatsApp: MessageCircle,
};

export default function MegaMenu({ isOpen, onClose }) {
  const [activeHoverImage, setActiveHoverImage] = useState(siteConfig.heroVideoPoster);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="megamenu"
          data-lenis-prevent
          data-lenis-prevent-wheel
          data-lenis-prevent-touch
          initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", opacity: 0 }}
          animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 1 }}
          exit={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", opacity: 0 }}
          transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[980] bg-[#08090d] text-white overflow-y-auto overflow-x-hidden overscroll-contain"
        >
          {/* Full-Height Right-Side Showcase Image */}
          <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full pointer-events-none z-0 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeHoverImage}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-full"
              >
                <Image
                  src={activeHoverImage}
                  alt="Event Showcase Preview"
                  fill
                  priority
                  className="object-cover object-center filter contrast-105 brightness-[0.80]"
                />
                {/* Horizontal Gradient Fade from Solid Black Left side to Image Right side */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#08090d] via-[#08090d]/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-transparent to-[#08090d]/70" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Inner Scrollable Container with min-h-full */}
          <div className="relative z-10 min-h-full w-full max-w-[1536px] mx-auto flex flex-col justify-between pt-24 md:pt-28 pb-10 px-4 sm:px-8 md:px-12">
            
            {/* Main Content Split Grid */}
            <div className="w-full my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Navigation Directory Column */}
              <div className="lg:col-span-7 flex flex-col gap-6">
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

              {/* Right Side Showcase Headline Badge */}
              <div className="hidden lg:col-span-5 lg:flex flex-col items-end justify-center pointer-events-none">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35, duration: 0.6 }}
                  className="p-8 text-right bg-[#08090d]/75 backdrop-blur-md rounded-2xl border border-[#e52d27]/30 max-w-sm shadow-2xl"
                >
                  <p className="text-xs font-mono tracking-[0.25em] text-[#e52d27] uppercase font-bold">
                    Colours Showcase
                  </p>
                  <h4 className="text-xl font-bold font-heading mt-2 text-white uppercase tracking-wide">
                    Crafting Landmark Live Experiences
                  </h4>
                </motion.div>
              </div>

            </div>

            {/* Footer Socials & Contact Bar (Prominent Social Badges) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="w-full pt-6 border-t border-[#e52d27]/25 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-400 font-mono mt-auto"
            >
              <div>
                <span className="text-gray-400">Direct Briefing: </span>
                <a href={`mailto:${siteConfig.contact.email}`} className="text-white hover:text-[#e52d27] font-semibold transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>

              {/* Social Icons Bar (LinkedIn, Instagram, YouTube, Facebook, WhatsApp) */}
              <div className="flex items-center gap-3">
                {siteConfig.contact.socials.map((soc, idx) => {
                  const IconComp = socialIconMap[soc.name] || Instagram;
                  return (
                    <a
                      key={idx}
                      href={soc.url}
                      target="_blank"
                      rel="noreferrer"
                      title={soc.name}
                      className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/5 hover:bg-[#e52d27] border border-white/15 hover:border-[#e52d27] text-gray-200 hover:text-white transition-all duration-300 shadow-md group"
                    >
                      <IconComp className="w-4 h-4 text-[#e52d27] group-hover:text-white transition-colors shrink-0" />
                      <span className="text-[11px] font-bold uppercase tracking-wider hidden sm:inline">
                        {soc.name}
                      </span>
                    </a>
                  );
                })}
              </div>

              <p className="text-gray-400 text-[10px] tracking-widest uppercase">
                © {new Date().getFullYear()} {siteConfig.brandName}. All Rights Reserved.
              </p>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
