"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import ProjectModal from "@/components/ui/ProjectModal";

export default function FeaturedWorkGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ["All", "Wedding", "Corporate", "Exhibition", "Special"];

  const filteredProjects =
    selectedCategory === "All"
      ? siteConfig.projects
      : siteConfig.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="featured-work" className="py-24 md:py-32 bg-white text-[#111116] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Line - PORTFOLIO SHOWCASE on Left & Filter Pills Aligned on the exact same Right Side Line */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
          {/* Left: PORTFOLIO SHOWCASE */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#e52d27]" />
            <span className="title-micro text-[#e52d27]">
              Portfolio Showcase
            </span>
          </div>

          {/* Right Side Filter Pills aligned on the exact same line */}
          <div className="flex flex-wrap items-center gap-2.5 sm:ml-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-widest transition-all ${
                  selectedCategory === cat
                    ? "bg-[#e52d27] text-white border border-[#e52d27] shadow-md"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Work Grid with In-Place Fade Transition (No distance flying or jumping across rows) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setActiveModalProject(project)}
                className="group cursor-pointer"
              >
                <figure className="effect-ruby h-[380px] rounded-2xl border border-gray-200 shadow-lg group-hover:shadow-2xl transition-all">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <figcaption>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase font-mono font-bold tracking-widest px-3 py-1 rounded-full bg-[#e52d27] text-white border border-[#e52d27]">
                          {project.category}
                        </span>
                        <div className="w-10 h-10 rounded-full bg-black/50 group-hover:bg-[#e52d27] group-hover:rotate-45 transition-all duration-300 flex items-center justify-center border border-white/20">
                          <ArrowUpRight className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold font-heading text-white uppercase tracking-wide">
                        {project.title}
                      </h3>

                      <div className="flex items-center gap-2 text-xs text-gray-200 font-mono">
                        <MapPin className="w-3.5 h-3.5 text-[#e52d27]" />
                        <span>{project.location}</span>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>

      {/* Modal Lightbox */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}