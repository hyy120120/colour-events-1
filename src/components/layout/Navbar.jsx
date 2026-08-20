"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import MegaMenu from "./MegaMenu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mega menu is active without layout shift
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* Permanent Fixed Top Header at z-[999] - Expanded Full-Width Spacing */}
      <header
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ${
          isScrolled || isMenuOpen
            ? "glass-nav py-3.5 shadow-2xl"
            : "bg-gradient-to-b from-[#08090d]/90 via-[#08090d]/30 to-transparent py-5"
        }`}
      >
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Logo / Brand Name - Pushed Left */}
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-3.5 group"
          >
            <div className="relative w-12 h-12 md:w-14 md:h-14 transition-transform duration-300 group-hover:scale-105">
              <Image
                src={siteConfig.logoUrl}
                alt={siteConfig.brandName}
                fill
                priority
                className="object-contain drop-shadow-[0_0_20px_rgba(229,45,39,0.7)]"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-xl md:text-2xl tracking-wider text-white group-hover:text-[#e52d27] transition-colors">
                {siteConfig.brandName}
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#e52d27] font-bold -mt-1">
                {siteConfig.brandSubtitle}
              </span>
            </div>
          </Link>

          {/* 3-Lines Hamburger Toggle Button - Pushed Right */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative flex flex-col items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#0e1017] hover:bg-[#e52d27] border border-[#e52d27]/40 hover:border-[#e52d27] transition-all duration-300 shadow-xl group cursor-pointer"
            aria-label="Toggle Menu"
          >
            <div className="flex flex-col gap-1.5 items-center justify-center w-5">
              <span
                className={`h-[2px] w-5 bg-white transition-all duration-300 transform ${
                  isMenuOpen ? "rotate-45 translate-y-[8px] bg-white" : "group-hover:bg-white"
                }`}
              />
              <span
                className={`h-[2px] w-5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "opacity-0 scale-x-0" : "group-hover:bg-white"
                }`}
              />
              <span
                className={`h-[2px] w-5 bg-white transition-all duration-300 transform ${
                  isMenuOpen ? "-rotate-45 -translate-y-[8px] bg-white" : "group-hover:bg-white"
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* MegaMenu Drawer Overlay */}
      <MegaMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
