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
    <section id="featured-work" className="py-28 md:py-36 bg-white text-[#111116] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#e52d27]" />
              <span className="title-micro text-[#e52d27]">
                Portfolio Showcase
              </span>
            </div>
            <h2 className="heading-primary text-[#111116]">
              Featured Events
            </h2>
          </div>

          {/* Filter Pills tuned for White Background */}
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest transition-all ${
                  selectedCategory === cat
                    ? "bg-[#e52d27] text-white border border-[#e52d27] shadow-lg shadow-[#e52d27]/30 scale-105"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300"
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