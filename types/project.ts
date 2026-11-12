export type ProjectCategory = "All" | "Web" | "Mobile" | "Desktop" | "AI";

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  categories: ("Web" | "Mobile" | "Desktop" | "AI")[];
  platformBadge: string;
  description: string;
  purpose: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  status: string;
  statusType: "completed" | "in-development";
  notes?: string;
  githubUrl?: string;
  liveUrl?: string;
  gradient: string;
  previewType: "mobile" | "desktop" | "web";
}

