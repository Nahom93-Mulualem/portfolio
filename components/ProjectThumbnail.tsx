import React from "react";
import { Project } from "@/types/project";

interface ProjectThumbnailProps {
  project: Project;
  isExpanded?: boolean;
}

export default function ProjectThumbnail({
  project,
  isExpanded = false,
}: ProjectThumbnailProps) {
  // Mobile UI Preview - TenaWise (ጤና ዋይዝ)
  if (project.previewType === "mobile") {
    return (
      <div
        className={`w-full ${
          isExpanded ? "h-80 sm:h-96" : "h-48"
        } relative flex items-center justify-center p-3 select-none overflow-hidden`}
      >
        {/* Subtle ambient light */}
        <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/40 via-emerald-950/20 to-cyan-900/40 pointer-events-none" />

        {/* Mobile Device Frame */}
        <div
          className={`relative bg-slate-950 border-2 border-slate-700/80 rounded-[28px] shadow-2xl overflow-hidden flex flex-col ${
            isExpanded ? "w-72 sm:w-80 h-full" : "w-64 h-full"
          }`}
        >
          {/* Top Notch / Dynamic Island */}
          <div className="h-6 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between px-4">
            <span className="text-[9px] font-mono font-medium text-slate-400">9:41</span>
            <div className="w-14 h-3 bg-black rounded-full" />
            <div className="flex items-center gap-1">
              <span className="inline-block w-2.5 h-1.5 bg-emerald-400 rounded-sm" />
              <span className="text-[8px] font-semibold text-emerald-400">OFFLINE</span>
            </div>
          </div>

          {/* App Header */}
          <div className="p-3 bg-gradient-to-b from-teal-950/90 to-slate-950 border-b border-teal-900/40 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <h4 className="text-xs font-bold text-white tracking-wide">ጤና ዋይዝ · TenaWise</h4>
              </div>
              <p className="text-[9px] text-teal-300/80 font-medium">Bilingual SRH &amp; AI Health</p>
            </div>
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-teal-500/20 text-teal-300 font-semibold border border-teal-500/30">
              አማ / EN
            </span>
          </div>

          {/* App Body Preview */}
          <div className="p-3 space-y-2 flex-1 overflow-hidden flex flex-col justify-between">
            {/* AI Assistant Chat Bubble */}
            <div className="bg-teal-950/60 border border-teal-800/50 rounded-xl p-2.5 text-left">
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-teal-400 to-emerald-400 flex items-center justify-center text-[8px] font-bold text-slate-950">
                  AI
                </div>
                <span className="text-[10px] font-semibold text-teal-200">Local RAG Assistant</span>
              </div>
              <p className="text-[9px] text-slate-300 leading-snug line-clamp-2">
                &quot;How can I help you today? Ask questions privately in Amharic or English.&quot;
              </p>
            </div>

            {/* Quick Modules Grid */}
            <div className="grid grid-cols-2 gap-1.5 text-left">
              <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-2">
                <div className="text-xs mb-0.5">📅</div>
                <div className="text-[9px] font-bold text-white">Cycle Calculator</div>
                <div className="text-[8px] text-slate-400">Tracking &amp; Insights</div>
              </div>
              <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-2">
                <div className="text-xs mb-0.5">📚</div>
                <div className="text-[9px] font-bold text-white">SRH Library</div>
                <div className="text-[8px] text-slate-400">Educational Guides</div>
              </div>
              {isExpanded && (
                <>
                  <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-2">
                    <div className="text-xs mb-0.5">💊</div>
                    <div className="text-[9px] font-bold text-white">Contraception</div>
                    <div className="text-[8px] text-slate-400">Method Guides</div>
                  </div>
                  <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-2">
                    <div className="text-xs mb-0.5">🔒</div>
                    <div className="text-[9px] font-bold text-white">Privacy First</div>
                    <div className="text-[8px] text-slate-400">No account required</div>
                  </div>
                </>
              )}
            </div>

            {/* Bottom Status bar */}
            <div className="bg-slate-900/60 rounded-md px-2 py-1 flex items-center justify-between text-[8px] text-slate-400">
              <span>ChromaDB · Ollama</span>
              <span className="text-emerald-400 font-medium">100% On-Device Ready</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Windows Desktop UI Preview - NJ Player
  if (project.previewType === "desktop") {
    return (
      <div
        className={`w-full ${
          isExpanded ? "h-80 sm:h-96" : "h-48"
        } relative flex items-center justify-center p-3 select-none overflow-hidden`}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-950/40 via-zinc-950/40 to-slate-950/60 pointer-events-none" />

        {/* Desktop Window Mockup */}
        <div
          className={`relative bg-zinc-950 border border-zinc-700/80 rounded-xl shadow-2xl overflow-hidden flex flex-col ${
            isExpanded ? "w-full max-w-2xl h-full" : "w-full max-w-md h-full"
          }`}
        >
          {/* Windows Title Bar */}
          <div className="h-7 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between px-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500/80 flex items-center justify-center text-[7px] text-white font-bold">
                NJ
              </div>
              <span className="text-[10px] font-mono text-zinc-300 font-semibold tracking-wide truncate">
                NJ Player — [libmpv Native Engine]
              </span>
            </div>
            {/* Windows Window Buttons */}
            <div className="flex items-center gap-2 text-zinc-400 text-[10px]">
              <span className="hover:text-white px-1">─</span>
              <span className="hover:text-white px-1">▢</span>
              <span className="hover:text-red-400 px-1">✕</span>
            </div>
          </div>

          {/* Media Player Workspace */}
          <div className="flex-1 flex overflow-hidden bg-black/90 relative">
            {/* Video Playback Stage */}
            <div className="flex-1 flex flex-col justify-between p-3 relative">
              {/* Top video badges */}
              <div className="flex items-center justify-between text-[9px] text-zinc-400">
                <span className="px-1.5 py-0.5 rounded bg-zinc-800/80 text-zinc-300 font-mono">
                  4K UHD · 60 FPS
                </span>
                <span className="px-1.5 py-0.5 rounded bg-purple-900/60 text-purple-300 font-mono border border-purple-700/50">
                  libmpv active
                </span>
              </div>

              {/* Video Content Canvas graphic */}
              <div className="my-auto flex flex-col items-center justify-center text-center">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white text-base pl-0.5 mb-1">
                  ▶
                </div>
                <span className="text-[10px] text-zinc-400 font-medium">Fast, low-latency playback</span>
              </div>

              {/* Player Timeline and Controls Bar */}
              <div className="space-y-1.5 bg-zinc-900/90 p-2 rounded-lg border border-zinc-800">
                {/* Scrubber */}
                <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden flex">
                  <div className="bg-purple-500 w-2/5 h-full" />
                </div>

                <div className="flex items-center justify-between text-[9px] text-zinc-300">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400 font-bold">▶</span>
                    <span>⏮</span>
                    <span>⏭</span>
                    <span className="font-mono text-zinc-400">00:42:15 / 01:58:00</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[8px] bg-zinc-800 px-1 rounded text-zinc-300">CC: Eng</span>
                    <span className="text-[8px] bg-zinc-800 px-1 rounded text-zinc-300">Vol: 85%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Playlist Drawer (on expanded or wide screens) */}
            {isExpanded && (
              <div className="w-48 bg-zinc-900/95 border-l border-zinc-800 p-2.5 flex flex-col justify-between text-left">
                <div>
                  <div className="text-[10px] font-bold text-zinc-200 uppercase tracking-wider mb-2">
                    Playlist Queue
                  </div>
                  <div className="space-y-1 text-[9px]">
                    <div className="p-1 rounded bg-purple-900/40 text-purple-200 truncate">
                      ▸ 01. video_master_sample.mp4
                    </div>
                    <div className="p-1 rounded bg-zinc-800/40 text-zinc-400 truncate">
                      02. presentation_recording.mkv
                    </div>
                    <div className="p-1 rounded bg-zinc-800/40 text-zinc-400 truncate">
                      03. podcast_episode_12.webm
                    </div>
                  </div>
                </div>
                <div className="pt-2 border-t border-zinc-800 text-[8px] text-zinc-400 flex items-center justify-between">
                  <span>Tools: FFmpeg &amp; yt-dlp</span>
                  <span className="text-purple-400 font-medium">.NET 10</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Web Browser UI Preview - Coach Avello, Class Album, Snabb
  return (
    <div
      className={`w-full ${
        isExpanded ? "h-80 sm:h-96" : "h-48"
      } relative flex items-center justify-center p-3 select-none overflow-hidden`}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/30 via-transparent to-black/40 pointer-events-none" />

      {/* Web Browser Frame */}
      <div
        className={`relative bg-slate-900 border border-slate-700/80 rounded-xl shadow-2xl overflow-hidden flex flex-col ${
          isExpanded ? "w-full max-w-2xl h-full" : "w-full max-w-md h-full"
        }`}
      >
        {/* Browser Top Navigation Bar */}
        <div className="h-7 bg-slate-800/90 border-b border-slate-700 flex items-center justify-between px-3">
          {/* Traffic lights */}
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>

          {/* URL Address Bar */}
          <div className="bg-slate-950/80 px-3 py-0.5 rounded-md border border-slate-700 text-[9px] font-mono text-slate-300 truncate max-w-[200px] sm:max-w-xs flex items-center gap-1">
            <span className="text-emerald-400">🔒</span>
            <span>
              {project.id === "02"
                ? "https://coachavello.com"
                : project.id === "04"
                ? "https://classalbum.org"
                : "https://snabb.et"}
            </span>
          </div>

          <div className="text-slate-400 text-[10px]">⚙</div>
        </div>

        {/* Browser Content Stage */}
        <div className="flex-1 bg-slate-950/90 p-3 sm:p-4 text-left flex flex-col justify-between overflow-hidden">
          {/* Project-specific visual mockups */}
          {project.id === "02" && (
            // Coach Avello
            <>
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-md bg-blue-600 flex items-center justify-center font-bold text-white text-[10px]">
                      CA
                    </div>
                    <span className="text-xs font-bold text-white">Coach Avello</span>
                  </div>
                  <div className="hidden sm:flex gap-3 text-[9px] text-slate-400">
                    <span>Philosophy</span>
                    <span>Client Stories</span>
                    <span>Programs</span>
                  </div>
                  <span className="text-[9px] px-2 py-0.5 bg-blue-600 text-white rounded font-medium">
                    Book Call
                  </span>
                </div>

                <div className="my-2">
                  <span className="text-[8px] uppercase tracking-wider text-blue-400 font-semibold">
                    Personal Training · Addis Ababa
                  </span>
                  <h5 className="text-sm sm:text-base font-extrabold text-white mt-0.5">
                    Build Strength, Mobility &amp; Sustainable Habits
                  </h5>
                  <p className="text-[9px] text-slate-400 line-clamp-2 mt-1">
                    Customized training programs tailored to your fitness goals with dedicated 1-on-1 coaching.
                  </p>
                </div>
              </div>

              {/* Bottom booking bar preview */}
              <div className="p-2 rounded-lg bg-blue-950/60 border border-blue-800/40 flex items-center justify-between text-[9px]">
                <div className="flex items-center gap-1.5 text-blue-300">
                  <span>📍 Addis Ababa</span>
                  <span className="text-slate-500">·</span>
                  <span className="text-emerald-400 font-medium">Slots Open</span>
                </div>
                <div className="px-2 py-1 bg-blue-600 text-white font-semibold rounded text-[8px]">
                  Mobile Booking Bar
                </div>
              </div>
            </>
          )}

          {project.id === "04" && (
            // Class Album
            <>
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm">🎓</span>
                    <span className="text-xs font-bold text-white">Class Album</span>
                  </div>
                  <span className="text-[9px] px-2 py-0.5 rounded bg-purple-600/30 text-purple-300 border border-purple-500/40">
                    Cohort 2026
                  </span>
                </div>

                <div className="my-2">
                  <h5 className="text-sm font-bold text-white">
                    Digital Yearbook &amp; Memory Preservation
                  </h5>
                  <p className="text-[9px] text-slate-400 line-clamp-2 mt-1">
                    Connect with classmates, sign digital yearbooks, and preserve cohort milestones forever.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-1.5">
                <div className="p-1.5 bg-slate-900 border border-slate-800 rounded text-center">
                  <div className="text-[8px] text-slate-400">Class Profiles</div>
                  <div className="text-[10px] font-bold text-white">120+ Alumni</div>
                </div>
                <div className="p-1.5 bg-slate-900 border border-slate-800 rounded text-center">
                  <div className="text-[8px] text-slate-400">Yearbook Signings</div>
                  <div className="text-[10px] font-bold text-purple-300">450+ Notes</div>
                </div>
                <div className="p-1.5 bg-slate-900 border border-slate-800 rounded text-center">
                  <div className="text-[8px] text-slate-400">Photo Vault</div>
                  <div className="text-[10px] font-bold text-white">Milestones</div>
                </div>
              </div>
            </>
          )}

          {project.id === "05" && (
            // Snabb
            <>
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm">🍔</span>
                    <span className="text-xs font-bold text-white">Snabb Delivery</span>
                  </div>
                  <span className="text-[9px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Fast Local Orders
                  </span>
                </div>

                <div className="my-2">
                  <h5 className="text-sm font-bold text-white">
                    Localized Restaurant Discovery &amp; Delivery
                  </h5>
                  <p className="text-[9px] text-slate-400 line-clamp-2 mt-1">
                    Browse dynamic menus, customize dishes, and track real-time delivery status updates.
                  </p>
                </div>
              </div>

              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between text-[9px]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-slate-300">Order #3492: En Route</span>
                </div>
                <span className="text-amber-400 font-mono font-medium">ETA: 18 mins</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

