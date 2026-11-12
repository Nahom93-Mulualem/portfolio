import { Project } from "@/types/project";

export const projectsData: Project[] = [
  {
    id: "01",
    title: "TenaWise (ጤና ዋይዝ)",
    subtitle: "Bilingual SRH Education & AI Support App",
    category: "Mobile Application / AI",
    categories: ["Mobile", "AI"],
    platformBadge: "Mobile · AI",
    description:
      "A bilingual sexual and reproductive health education application designed for young people in Ethiopia, featuring conversational AI assistance and offline-first learning modules.",
    purpose:
      "To provide young people in Ethiopia with accessible, confidential, and culturally tailored sexual and reproductive health (SRH) education in local languages.",
    problem:
      "Youth in Ethiopia frequently encounter stigma, privacy obstacles, and language barriers when seeking reliable sexual and reproductive health information, leading to low access to verified guidance.",
    solution:
      "An offline-first bilingual mobile application built with Flutter and Dart, backed by an optional Python and FastAPI backend utilizing ChromaDB and Ollama for confidential, local RAG/AI assistance alongside structured educational content.",
    features: [
      "AI chatbot for confidential, conversational SRH guidance",
      "Bilingual SRH educational library (Amharic & English)",
      "Menstrual-cycle calculator and fertility awareness tools",
      "Comprehensive contraceptive education and clinic guides",
      "Offline-first learning experience for low-connectivity environments",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Python",
      "FastAPI",
      "AI / RAG",
      "ChromaDB",
      "Ollama",
    ],
    status: "In Development (Clinical Review & Safety Checks)",
    statusType: "in-development",
    notes:
      "Public repository, recently updated. The app and optional backend are implemented, but the README calls for clinical-content review, privacy and safety checks, and testing before release.",
    githubUrl: "https://github.com/Nahom93-Mulualem/tenawise",
    gradient: "from-teal-600 via-emerald-600 to-cyan-700",
    previewType: "mobile",
  },
  {
    id: "02",
    title: "Coach Avello",
    subtitle: "Personal Training & Fitness Web Platform",
    category: "Personal Training & Fitness Website",
    categories: ["Web"],
    platformBadge: "Web Application",
    description:
      "A responsive website for Coach Abel Gidey’s personal training practice in Addis Ababa, Ethiopia, highlighting training philosophy, client success stories, and streamlined booking.",
    purpose:
      "To deliver a modern, high-converting digital platform that showcases Coach Abel Gidey's training philosophy, celebrates client transformations, and facilitates direct session bookings.",
    problem:
      "Independent fitness coaches in Addis Ababa need an engaging, credible web presence to articulate customized training programs, share authentic client testimonials, and capture booking inquiries seamlessly from mobile visitors.",
    solution:
      "A modern, responsive web application engineered with Next.js, React, TypeScript, and Tailwind CSS, featuring tailored service tiers, client stories, interactive booking forms, and a sticky mobile booking bar for high conversion.",
    features: [
      "Coaching services and personalized training philosophy showcase",
      "Client transformation stories and authentic testimonials",
      "Interactive consultation and session booking forms",
      "Responsive navigation with a sticky mobile booking bar",
      "Accessible, performance-optimized modern UI with Lucide React",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Lucide React",
    ],
    status: "Completed / Active",
    statusType: "completed",
    notes:
      "Production-ready responsive website with interactive booking flows and mobile optimization.",
    githubUrl: "https://github.com/Nahom93-Mulualem/Avello",
    gradient: "from-blue-600 via-indigo-600 to-sky-700",
    previewType: "web",
  },
  {
    id: "03",
    title: "NJ Player",
    subtitle: "High-Performance Windows Desktop Media Player",
    category: "Windows Desktop Media Player",
    categories: ["Desktop"],
    platformBadge: "Windows Desktop",
    description:
      "An in-development Windows desktop player aiming for fast playback with a dark, customizable interface, engineered around native libmpv integration.",
    purpose:
      "To deliver a lightweight, high-performance native Windows media player characterized by instant launch times, low resource overhead, and extensive keyboard customization.",
    problem:
      "Many modern media players are resource-heavy, slow to launch, or lack native support for advanced playback engine control, subtitle customization, and command-line external media utilities.",
    solution:
      "A native Windows desktop application built with C# and .NET 10 using WPF and XAML, designed with native libmpv integration as its core playback engine alongside optional FFmpeg, ffprobe, and yt-dlp tooling.",
    features: [
      "High-performance video and audio playback via libmpv engine",
      "Playlist management, media queueing, and history",
      "Customizable hotkeys and keyboard shortcut bindings",
      "Subtitle styling and multi-track audio controls",
      "Optional media trimming and video download utilities (FFmpeg & yt-dlp)",
      "Automated unit testing with xUnit, and PowerShell/Inno Setup packaging",
    ],
    technologies: [
      "C#",
      ".NET 10",
      "WPF",
      "XAML",
      "libmpv",
      "xUnit",
      "FFmpeg",
      "yt-dlp",
      "PowerShell",
      "Inno Setup",
    ],
    status: "In Development (Alpha)",
    statusType: "in-development",
    notes:
      "Under active development. Directed toward native libmpv integration, with FFmpeg/ffprobe and yt-dlp listed as optional external tools. Repository scripts utilize PowerShell and Inno Setup.",
    githubUrl: "https://github.com/Nahom93-Mulualem/NJ-player",
    gradient: "from-slate-800 via-zinc-800 to-purple-950",
    previewType: "desktop",
  },
  {
    id: "04",
    title: "Class Album",
    subtitle: "Digital Yearbook & Cohort Community Platform",
    category: "Digital Yearbook & Community Platform",
    categories: ["Web"],
    platformBadge: "Web Application",
    description:
      "A collaborative digital yearbook and social community platform allowing graduating classes and student cohorts to preserve memories, share profiles, celebrate milestones, and stay connected.",
    purpose:
      "To empower graduating cohorts and educational classes with a permanent, interactive digital home for archiving milestones and maintaining long-term community relationships.",
    problem:
      "Traditional printed yearbooks are static, costly to distribute, and quickly outdated, while mainstream social networks fail to offer dedicated cohort-centric memory preservation.",
    solution:
      "A full-stack web application built on Next.js, React, TypeScript, PostgreSQL, and Prisma with cohort directory management, interactive digital signing walls, media galleries, and alumni networking profiles.",
    features: [
      "Cohort profile creation and customized student pages",
      "Interactive digital yearbook signing and memory wall",
      "Photo archives and milestone celebration galleries",
      "Alumni directory and cohort member search",
      "Secure authentication and granular privacy controls",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
    ],
    status: "Completed / Open Source",
    statusType: "completed",
    notes: "Full-stack web application preserving cohort memories with interactive yearbook signing.",
    githubUrl: "https://github.com/Nahom93-Mulualem/class_album",
    gradient: "from-purple-700 via-indigo-700 to-brand-purple",
    previewType: "web",
  },
  {
    id: "05",
    title: "Snabb",
    subtitle: "Food Delivery & Restaurant Discovery Platform",
    category: "Food Delivery Platform",
    categories: ["Web"],
    platformBadge: "Web Application",
    description:
      "An end-to-end food delivery web application featuring localized restaurant discovery, interactive dynamic menus, cart management, ordering workflows, and real-time status updates.",
    purpose:
      "To connect consumers with local culinary spots through a fast, reliable, and user-friendly online ordering and status tracking experience.",
    problem:
      "Independent restaurants struggle with clunky ordering workflows, sluggish cart interactions, and fragmented order tracking that frustrate hungry users.",
    solution:
      "A responsive full-stack platform utilizing Next.js, NestJS, TypeScript, PostgreSQL, and Prisma with instant menu searching, dynamic cart state management, and real-time order lifecycle tracking.",
    features: [
      "Localized restaurant discovery and culinary category filtering",
      "Dynamic interactive menus with custom dish options",
      "Persistent cart synchronization and checkout workflow",
      "Real-time order progress tracking and status notifications",
      "Scalable backend service architecture powered by NestJS",
    ],
    technologies: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
    ],
    status: "Completed / Open Source",
    statusType: "completed",
    notes: "Full-stack food ordering platform with real-time cart state and localized discovery.",
    githubUrl: "https://github.com/Nahom93-Mulualem/snabb-delivery",
    gradient: "from-amber-600 via-orange-600 to-red-600",
    previewType: "web",
  },
];

