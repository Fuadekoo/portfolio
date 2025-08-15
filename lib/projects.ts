export type Category =
  | "All Projects"
  | "Web Development"
  | "Bot Development"
  | "Automation";

export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  images?: string[];
  badge: "Frontend" | "Backend" | "Fullstack";
  category: Exclude<Category, "All Projects">;
  href?: string;
  liveUrl?: string;
  repoUrl?: string;
  status?: "Live" | "In progress";
  frontend?: string[];
  backend?: string[];
  tools?: string[];
};

export const PROJECTS: ProjectItem[] = [
  {
    id: "conversant",
    title: "Conversant Product Research",
    description:
      "AI‑assisted product research with automated scraping, summarization, and report generation for e‑commerce teams.",
    image: "/logo.png",
    images: [
      "/projects/conversant-1.jpg",
      "/projects/conversant-2.jpg",
      "/projects/conversant-3.jpg",
    ],
    badge: "Backend",
    category: "Automation",
    liveUrl: "#",
    repoUrl: "#",
    status: "Live",
    frontend: ["Next.js", "Tailwind CSS"],
    backend: ["Node.js", "Express", "TypeScript"],
    tools: ["Puppeteer", "PostgreSQL", "Docker", "CI/CD"],
  },
  {
    id: "mindcare",
    title: "Darelkubra Mindcare",
    description:
      "Wellness platform with booking, content, and secure patient areas tailored for local communities.",
    image: "/logo.png",
    images: ["/projects/mindcare-1.jpg", "/projects/mindcare-2.jpg"],
    badge: "Backend",
    category: "Web Development",
    liveUrl: "#",
    status: "In progress",
    frontend: ["Next.js", "HeroUI", "Tailwind"],
    backend: ["Node.js", "Express", "MongoDB"],
    tools: ["JWT Auth", "Cloud Storage"],
  },
  {
    id: "infonas",
    title: "Infonas Ops Suite",
    description:
      "Internal automations for VoIP billing and customer operations with dashboards and scheduled jobs.",
    image: "/logo.png",
    images: [
      "/projects/infonas-1.jpg",
      "/projects/infonas-2.jpg",
      "/projects/infonas-3.jpg",
    ],
    badge: "Backend",
    category: "Automation",
    repoUrl: "#",
    status: "Live",
    frontend: ["React", "shadcn/ui"],
    backend: ["Node.js", "NestJS", "PostgreSQL"],
    tools: ["BullMQ", "Redis", "Grafana"],
  },
  {
    id: "primeCard",
    title: "PrimeCard",
    description:
      "Clean marketing site with card management and content sections, optimized for performance and SEO.",
    image: "/logo.png",
    images: ["/projects/prime-1.jpg", "/projects/prime-2.jpg"],
    badge: "Frontend",
    category: "Web Development",
    liveUrl: "#",
    status: "Live",
    frontend: ["Next.js", "Tailwind CSS"],
    backend: ["Edge Functions"],
    tools: ["Vercel Analytics", "SEO"],
  },
  {
    id: "terbia",
    title: "Terbia e‑Learning",
    description:
      "Learning portal with course catalogs, progress tracking, and instructor tools.",
    image: "/logo.png",
    images: [
      "/projects/terbia-1.jpg",
      "/projects/terbia-2.jpg",
      "/projects/terbia-3.jpg",
    ],
    badge: "Backend",
    category: "Web Development",
    liveUrl: "#",
    status: "In progress",
    frontend: ["Next.js", "Tailwind CSS"],
    backend: ["Node.js", "Express", "MySQL"],
    tools: ["Stripe", "JWT Auth"],
  },
  {
    id: "terbia-bot",
    title: "Terbia Telegram Bot",
    description:
      "Telegram bot powering course access, notifications, and support with secure role‑based commands.",
    image: "/logo.png",
    images: ["/projects/terbia-bot-1.jpg", "/projects/terbia-bot-2.jpg"],
    badge: "Backend",
    category: "Bot Development",
    repoUrl: "#",
    status: "Live",
    frontend: ["Telegram UI"],
    backend: ["Node.js", "Telegraf", "MongoDB"],
    tools: ["Webhooks", "Docker"],
  },
];
