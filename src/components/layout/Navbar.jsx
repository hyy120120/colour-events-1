"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown } from "lucide-react";
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

  // Lock body scroll when mega menu is active
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[800] transition-all duration-500 ${
          isScrolled
            ? "glass-nav py-3.5 border-b border-white/10 shadow-2xl"
            : "bg-gradient-to-b from-black/60 via-black/20 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 md:w-14 md:h-14 transition-transform duration-300 group-hover:scale-105">
              <Image
                src={siteConfig.logoUrl}
                alt={siteConfig.brandName}
                fill
                priority
                className="object-contain drop-shadow-[0_0_15px_rgba(229,45,39,0.5)]"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-xl md:text-2xl tracking-wider text-white group-hover:text-red-400 transition-colors">
                {siteConfig.brandName}
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-gray-400 font-semibold -mt-1">
                {siteConfig.brandSubtitle}
              </span>
            </div>
          </Link>

          {/* Desktop Links + Hamburger */}
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/work"
                className="text-xs uppercase tracking-widest font-bold text-gray-300 hover:text-white nav-link-animated py-2 flex items-center gap-1 transition-colors"
              >
                Work
                <ChevronDown className="w-3.5 h-3.5 text-red-500" />
              </Link>

              <Link
                href="/services"
                className="text-xs uppercase tracking-widest font-bold text-gray-300 hover:text-white nav-link-animated py-2 transition-colors"
              >
                Services
              </Link>

              <Link
                href="/process"
                className="text-xs uppercase tracking-widest font-bold text-gray-300 hover:text-white nav-link-animated py-2 transition-colors"
              >
                Process
              </Link>

              <Link
                href="/#clientele"
                className="text-xs uppercase tracking-widest font-bold text-gray-300 hover:text-white nav-link-animated py-2 transition-colors"
              >
                Clientele
              </Link>

              <Link
                href="/contact"
                className="text-xs uppercase tracking-widest font-bold text-gray-300 hover:text-white nav-link-animated py-2 transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Menu Trigger Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/5 hover:bg-red-600/20 border border-white/15 hover:border-red-500 transition-all duration-300 group"
              aria-label="Open Menu"
            >
              <span className="hidden sm:inline text-xs uppercase tracking-widest font-extrabold text-white group-hover:text-red-400">
                Menu
              </span>
              <Menu className="w-5 h-5 text-red-500 group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </header>

      {/* MegaMenu Overlay */}
      <MegaMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
