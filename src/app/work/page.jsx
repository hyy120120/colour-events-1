"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import ProjectModal from "@/components/ui/ProjectModal";

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ["All", "Sports", "Music", "Corporate", "Special"];

  const filteredProjects =
    selectedCategory === "All"
      ? siteConfig.projects
      : siteConfig.projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="pt-32 pb-28 bg-[#050507] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-red-500 font-bold">
            Selected Case Studies
          </span>
          <h1 className="text-5xl sm:text-7xl font-black font-heading tracking-tight uppercase mt-2">
            Our Work
          </h1>
          <p className="text-gray-300 text-lg font-light mt-4 leading-relaxed">
            From stadium sports finals to global music festivals and high-impact corporate reveals, explore our portfolio of landmark live experiences.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-3 mb-16 pb-6 border-b border-white/10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest transition-all ${
                selectedCategory === cat
                  ? "bg-red-600 text-white shadow-lg shadow-red-600/30 scale-105"
                  : "bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setActiveModalProject(project)}
              className="group cursor-pointer"
            >
              <figure className="effect-ruby h-[400px] rounded-2xl border border-white/10">
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
        </div>
      </div>

      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </div>
  );
}
