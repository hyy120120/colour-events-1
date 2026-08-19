"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, MapPin, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) return null;

  const nextSlide = () => {
    setActiveImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevSlide = () => {
    setActiveImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[995] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 md:p-8"
      >
        <div className="relative w-full max-w-5xl bg-[#0d0d12] border border-white/15 rounded-3xl overflow-hidden max-h-[90vh] flex flex-col shadow-2xl">
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#050507]">
            <div>
              <span className="text-xs uppercase tracking-widest text-red-500 font-mono font-bold">
                {project.category} Showcase
              </span>
              <h3 className="text-xl md:text-2xl font-bold font-heading text-white">
                {project.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-600 hover:text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scroll Body */}
          <div className="p-6 md:p-8 overflow-y-auto space-y-8">
            {/* Gallery Slider */}
            <div className="relative w-full h-[280px] sm:h-[400px] md:h-[480px] rounded-2xl overflow-hidden bg-black border border-white/10">
              <Image
                src={project.gallery[activeImageIndex] || project.coverImage}
                alt={project.title}
                fill
                className="object-cover"
              />

              {project.gallery.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-red-600 text-white backdrop-blur-md flex items-center justify-center transition-all"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-red-600 text-white backdrop-blur-md flex items-center justify-center transition-all"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-xs font-mono text-white">
                    {activeImageIndex + 1} / {project.gallery.length}
                  </div>
                </>
              )}
            </div>

            {/* Meta & Description */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-8 space-y-4">
                <div className="flex items-center gap-2 text-sm text-red-400 font-mono">
                  <MapPin className="w-4 h-4" />
                  <span>{project.location}</span>
                </div>
                <p className="text-gray-300 text-base leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="md:col-span-4 p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <h4 className="text-xs uppercase tracking-widest font-mono text-gray-400 font-bold">
                  Key Technical Specs
                </h4>
                <ul className="space-y-2 text-xs text-gray-200">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
