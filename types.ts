
export interface Experience {
  company: string;
  client?: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  image?: string;
  tech?: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number }[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  score?: string;
}
