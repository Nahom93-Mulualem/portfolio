"use client";

import React, { useState, useMemo } from "react";
import { Project, ProjectCategory } from "@/types/project";
import { projectsData } from "@/data/projectsData";
import ProjectThumbnail from "./ProjectThumbnail";
import ProjectModal from "./ProjectModal";

const CATEGORIES: ProjectCategory[] = ["All", "Web", "Mobile", "Desktop", "AI"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects by active category
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projectsData;
    return projectsData.filter((p) => p.categories.includes(activeCategory));
  }, [activeCategory]);

  // Compute count for each category badge
  const categoryCounts = useMemo(() => {
    const counts: Record<ProjectCategory, number> = {
      All: projectsData.length,
      Web: 0,
      Mobile: 0,
      Desktop: 0,
      AI: 0,
    };
    projectsData.forEach((project) => {
      project.categories.forEach((cat) => {
        counts[cat] = (counts[cat] || 0) + 1;
      });
    });
    return counts;
  }, []);

  return (
    <section
      id="projects"
      className="py-20 md:py-28 bg-[#F4F4F8]/60 dark:bg-[#0E131F]/50 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
              Projects
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Software engineering across web, mobile, and desktop platforms, with
              a focus on clean architecture, native performance, and intelligent,
              AI-driven applications.
            </p>
          </div>
          <div>
            <a
              href="https://github.com/Nahom93-Mulualem"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-purple dark:text-purple-400 hover:text-brand-purple-dark dark:hover:text-purple-300 transition-colors group"
            >
              <span>View all on GitHub</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            const count = categoryCounts[category];
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-slate-900 text-white dark:bg-brand-purple shadow-md shadow-slate-900/10 dark:shadow-purple-900/30"
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200/70 dark:border-slate-800 hover:border-brand-purple/40 dark:hover:border-purple-500/40 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <span>{category}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.5 rounded-md font-mono ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/70 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Thumbnail & Gradient Banner Preview */}
                <div
                  className={`w-full bg-gradient-to-br ${project.gradient} relative overflow-hidden flex flex-col justify-between border-b border-slate-100 dark:border-slate-800/60`}
                >
                  <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-white/10 rounded-full blur-xl pointer-events-none" />

                  {/* Top Banner Tag Row */}
                  <div className="flex items-center justify-end p-4 sm:p-5 pb-0 relative z-10">
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-white/20 backdrop-blur-md text-white border border-white/20">
                      {project.platformBadge}
                    </span>
                  </div>

                  {/* Visual UI Preview Mockup */}
                  <div className="pt-2">
                    <ProjectThumbnail project={project} isExpanded={false} />
                  </div>
                </div>

                {/* Card Body Content */}
                <div className="p-6 sm:p-7">
                  {/* Project Title & Category */}
                  <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white group-hover:text-brand-purple dark:group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-brand-purple dark:text-purple-400 mt-1 mb-3">
                    {project.category}
                  </p>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-1 text-xs font-semibold rounded-lg bg-purple-50 dark:bg-purple-950/40 text-brand-purple dark:text-purple-300 border border-purple-200/50 dark:border-purple-800/50">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Links Bar */}
              <div className="p-6 sm:p-7 pt-0 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2 mt-auto">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="btn-hover text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 hover:text-brand-purple dark:hover:text-purple-400 flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-purple-50 dark:hover:bg-purple-950/40 border border-slate-200/60 dark:border-slate-700/60 transition-colors cursor-pointer"
                >
                  <span>View Details</span>
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                <div className="flex items-center gap-2">
                  {/* GitHub Action (hidden if no url) */}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                      title="View GitHub Code"
                      className="btn-hover text-xs font-semibold text-slate-700 hover:text-brand-purple dark:text-slate-300 dark:hover:text-purple-400 flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 hover:bg-purple-50 dark:hover:bg-purple-950/40 border border-slate-200/60 dark:border-slate-700/60 transition-colors"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      <span className="hidden sm:inline">Code</span>
                    </a>
                  )}

                  {/* Live Demo Action (hidden if no url) */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} Live Demo`}
                      title="View Live Demo"
                      className="btn-hover text-xs font-semibold text-brand-purple dark:text-purple-400 hover:text-brand-purple-dark flex items-center gap-1 px-3 py-2 rounded-xl bg-purple-50 dark:bg-purple-950/40 hover:bg-purple-100 dark:hover:bg-purple-900/50 border border-purple-200/60 dark:border-purple-800/60 transition-colors"
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      <span className="hidden sm:inline">Live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reusable Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
