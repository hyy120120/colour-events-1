"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUp, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#030305] text-white pt-20 pb-10 overflow-hidden border-t border-white/10">
      {/* Background Decorative Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-red-600/10 blur-[140px] pointer-events-none" />

      {/* Infinite Marquee Banner */}
      <div className="w-full overflow-hidden whitespace-nowrap pb-16 border-b border-white/10 select-none">
        <div className="inline-block animate-marquee">
          <span className="text-6xl md:text-8xl font-black font-heading tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-red-600 opacity-20 uppercase mx-8">
            {siteConfig.brandName} • {siteConfig.heroTitle} • STADIUM SPORTS • CONCERTS • 
          </span>
          <span className="text-6xl md:text-8xl font-black font-heading tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-red-600 opacity-20 uppercase mx-8">
            {siteConfig.brandName} • {siteConfig.heroTitle} • STADIUM SPORTS • CONCERTS • 
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-16 grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Brand Column (Cols 1-5) */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <Image
              src={siteConfig.logoUrl}
              alt={siteConfig.brandName}
              width={56}
              height={56}
              className="object-contain drop-shadow-[0_0_15px_rgba(229,45,39,0.5)]"
            />
            <div className="flex flex-col">
              <span className="font-heading font-black text-3xl tracking-wider text-white">
                {siteConfig.brandName}
              </span>
              <span className="text-xs uppercase tracking-[0.3em] text-red-500 font-bold">
                {siteConfig.brandSubtitle}
              </span>
            </div>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed max-w-md">
            {siteConfig.aboutStatement}
          </p>

          <div className="flex items-center gap-4 pt-2">
            <Link href="/connect" className="btn-primary">
              <span>Start A Project</span>
              <ExternalLink className="w-4 h-4 btn-arrow" />
            </Link>
          </div>
        </div>

        {/* Quick Navigation (Cols 6-8) */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <h4 className="text-xs uppercase tracking-[0.25em] text-red-500 font-bold font-mono">
            Navigation
          </h4>
          <ul className="flex flex-col gap-3">
            {siteConfig.menuItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-gray-300 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info (Cols 9-12) */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <h4 className="text-xs uppercase tracking-[0.25em] text-red-500 font-bold font-mono">
            Connect With Us
          </h4>

          <div className="flex flex-col gap-3 text-sm text-gray-300">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-1" />
              <span>{siteConfig.contact.address}</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-red-500 shrink-0" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white font-mono">
                {siteConfig.contact.email}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-red-500 shrink-0" />
              <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white font-mono">
                {siteConfig.contact.phone}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4">
            {siteConfig.contact.socials.map((soc, idx) => (
              <a
                key={idx}
                href={soc.url}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-red-500 hover:bg-red-600/20 flex items-center justify-center text-xs font-bold text-gray-300 hover:text-white transition-all"
              >
                {soc.name.substring(0, 2)}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar & Scroll to top */}
      <div className="max-w-7xl mx-auto px-6 pt-12 mt-12 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} {siteConfig.brandName} Entertainment. All rights reserved.</p>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-red-600 hover:text-white border border-white/10 transition-all text-xs font-medium text-gray-300"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
