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

  const categories = ["All", "Sports", "Music", "Corporate", "Special"];

  const filteredProjects =
    selectedCategory === "All"
      ? siteConfig.projects
      : siteConfig.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="featured-work" className="py-28 bg-[#050507] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-red-500" />
              <span className="text-xs uppercase tracking-[0.3em] font-mono text-red-500 font-bold">
                Portfolio Showcase
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black font-heading tracking-tight uppercase">
              Featured Events
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all ${
                  selectedCategory === cat
                    ? "bg-red-600 text-white shadow-lg shadow-red-600/30 scale-105"
                    : "bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Work Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setActiveModalProject(project)}
                className="group cursor-pointer"
              >
                <figure className="effect-ruby h-[380px] rounded-2xl border border-white/10">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <figcaption>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase font-mono font-bold tracking-widest px-3 py-1 rounded-full bg-red-600/80 text-white backdrop-blur-md">
                          {project.category}
                        </span>
                        <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-red-600 group-hover:rotate-45 transition-all duration-300 flex items-center justify-center">
                          <ArrowUpRight className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold font-heading text-white uppercase tracking-wide group-hover:text-red-400 transition-colors">
                        {project.title}
                      </h3>

                      <div className="flex items-center gap-2 text-xs text-gray-300 font-mono">
                        <MapPin className="w-3.5 h-3.5 text-red-500" />
                        <span>{project.location}</span>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal Lightbox */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
