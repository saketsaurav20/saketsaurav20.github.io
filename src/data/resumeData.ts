export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  tagline: string;
  highlights: string[];
  techStack: string[];
  color: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
  color: string;
}

export interface AchievementItem {
  title: string;
  subtitle: string;
  organization: string;
  description: string;
  date?: string;
  badge?: string;
}

export const PERSONAL_INFO = {
  name: "Saket Saurav",
  title: "Software Engineer 2",
  company: "UiPath",
  location: "Bangalore, India",
  phone: "+91 9986971805",
  email: "saket.saurav20@gmail.com",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  summary: "Frontend & Automation Software Engineer specializing in Micro-Frontends, WebAssembly, high-reliability E2E test architectures, and scalable UI platforms.",
  education: {
    institution: "Sir M Visvesvaraya Institute of Technology (VTU)",
    degree: "Bachelor of Engineering in Computer Science & Engineering",
    period: "Aug 2020",
    location: "Bangalore, India"
  }
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "UiPath",
    role: "Software Engineer 2",
    location: "Bangalore, India",
    period: "MAY 2024 – Present",
    tagline: "Enterprise Automation, Micro-Frontends & Cloud Performance",
    color: "#00f2fe",
    highlights: [
      "Spearheaded critical fixes and enhancements for E2E tests in Action Centre, elevating reliability & performance in WDIO v8.",
      "Implemented Micro-Frontend (MFE) architecture for Action Centre integration across multiple automation environments.",
      "Engineered Auto Variable Creation feature powering multi-facet Document Understanding capabilities.",
      "Optimized Azure performance telemetry for Core Web Vitals (LCP, render times, job execution latency).",
      "Resolved high-impact cross-platform compatibility blockers in Blazor Worker and WebAssembly integration."
    ],
    techStack: ["Micro-Frontends", "WebAssembly", "Blazor", "WDIO v8", "Azure", "TypeScript", "Document Understanding"]
  },
  {
    company: "Aquera",
    role: "Member Technical Staff - II",
    location: "Bangalore, India",
    period: "FEB 2023 – APR 2024",
    tagline: "No-Code / Low-Code UI Platform & Workflow Orchestration",
    color: "#00ffc8",
    highlights: [
      "Built and deployed a zero-to-one No-Code/Low-Code workflow UI platform automating JML (Joiner, Mover & Leaver) identity lifecycles.",
      "Engineered multi-modal workflow triggers (Schedule Trigger, Event Trigger, and Cross-Workflow Trigger pipes).",
      "Architected performance optimizations including code-splitting, selective rendering barriers, and multi-tier memory caching.",
      "Conducted rigorous technical code reviews and led UI architectural syncs for cross-functional teams."
    ],
    techStack: ["ReactJS", "Workflow Engines", "Event Triggers", "Code-Splitting", "State Caching", "Identity UI"]
  },
  {
    company: "IBS Software",
    role: "Senior Software Engineer (ReactJS)",
    location: "Bangalore, India",
    period: "AUG 2022 – DEC 2022",
    tagline: "Global Airline Booking Platform for Nippon Airlines (Japan)",
    color: "#7928ca",
    highlights: [
      "Implemented high-concurrency reusable flight reservation booking components for Nippon Airlines (ANA, Japan).",
      "Engineered modular styling architectures utilizing @Emotion Styled Components and SCSS design tokens.",
      "Delivered pixel-perfect wireframe translations satisfying stringent enterprise accessibility and airline SLAs."
    ],
    techStack: ["ReactJS", "@Emotion", "Styled Components", "SCSS", "Aviation Booking SLAs"]
  },
  {
    company: "Accenture",
    role: "Frontend Development Associate",
    location: "Bangalore, India",
    period: "2020 – 2022",
    tagline: "Cardinal Health Med-Pharma E-Commerce Engine",
    color: "#ff007a",
    highlights: [
      "Engineered mission-critical frontend components for Cardinal Health INC Med-Pharma commercial portal.",
      "Spearheaded Redux application state flows, achieving high test coverage with Jest unit suites.",
      "Built robust UI systems using SCSS and Material UI for sensitive healthcare workflows."
    ],
    techStack: ["ReactJS", "Redux", "Jest Unit Testing", "Material UI", "SCSS", "Healthcare Commerce"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Languages",
    color: "#00f2fe",
    skills: ["JavaScript (ESNext)", "TypeScript", "C++", "Python", "Java", "C", "HTML5", "CSS3 / SCSS"]
  },
  {
    name: "Frontend & Architecture",
    color: "#00ffc8",
    skills: ["ReactJS", "Redux / Toolkit", "Micro-Frontends (MFE)", "Three.js / WebGL", "WebAssembly / Blazor", "Material UI", "@Emotion", "Tailwind CSS"]
  },
  {
    name: "Backend, Data & Cloud",
    color: "#4facfe",
    skills: ["NodeJS", "Django", "MongoDB", "Azure Cloud Logging", "RESTful APIs", "Document Understanding"]
  },
  {
    name: "Testing, Tools & AI",
    color: "#ffd700",
    skills: ["Jest", "WDIO v8", "Git & GitHub", "Webpack / Babel", "TensorFlow", "JIRA / KANBAN", "NPM / Yarn"]
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: "Smart India Hackathon (SIH) 2019 Winner",
    subtitle: "Software Edition under Goldman Sachs Organization",
    organization: "Goldman Sachs / Ministry of Education, Govt of India",
    description: "Champion of India's largest nationwide hackathon solving enterprise financial software challenges sponsored by Goldman Sachs.",
    badge: "🏆 1st Place National Winner"
  },
  {
    title: "AI & Deep Learning Specialization",
    subtitle: "Instructor: Andrew Ng",
    organization: "Coursera / DeepLearning.AI",
    description: "Rigorous specialization in Neural Networks, Deep Learning, Tensor structuring, and TensorFlow deployments.",
    badge: "AI Specialization"
  },
  {
    title: "Advanced Data Structures & Algorithms",
    subtitle: "Programming in Python & Algorithms",
    organization: "NPTEL (Ministry of Education)",
    description: "Certified with honors in algorithm design, asymptotic complexity, and high-performance data architectures.",
    badge: "NPTEL Elite"
  },
  {
    title: "Cloud Computing & Blockchain Technologies",
    subtitle: "Distributed Systems & Cloud Architectures",
    organization: "NPTEL / Academic Certification",
    description: "Comprehensive certifications covering decentralized ledgers, distributed computing nodes, and cloud optimization.",
    badge: "Cloud Certified"
  }
];
