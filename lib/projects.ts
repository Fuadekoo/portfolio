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
    id: "PrimeRental",
    title: "PrimeRental",
    description:
      "A comprehensive platform for property listings, user management, and secure transactions.",
    image: "/primerental/comingsoon.png",
    images: [
      "/primerental/comingsoon.png",
      "/primerental/comingsoon.png",
      "/primerental/comingsoon.png",
      "/primerental/comingsoon.png",
    ],
    badge: "Fullstack",
    category: "Web Development",
    liveUrl: "#",
    repoUrl: "#",
    status: "In progress",
    frontend: ["Next.js", "Tailwind CSS", "HeroUI"],
    backend: ["Node.js", "socket.io", "TypeScript"],
    tools: ["apache", "PostgreSQL", "vps server", "CI/CD"],
  },
  {
    id: "mindcare",
    title: "Darelkubra Mindcare",
    description:
      "Wellness platform with booking, content, and secure patient areas tailored for local communities.",
    image: "/mindcare/md1.png",
    images: [
      "/mindcare/md1.png",
      "/mindcare/md2.png",
      "/mindcare/md3.png",
      "/mindcare/md4.png",
      "/mindcare/md5.png",
      "/mindcare/md6.png",
      "/mindcare/md7.png",
      "/mindcare/md8.png",
      "/mindcare/md9.png",
      "/mindcare/md10.png",
      "/mindcare/md11.png",
      "/mindcare/md12.png",
      "/mindcare/md13.png",
      "/mindcare/md14.png",
      "/mindcare/md15.png",
      "/mindcare/md16.png",
      "/mindcare/md17.png",
      "/mindcare/md18.png",
      "/mindcare/md19.png",
      "/mindcare/md20.png",
      "/mindcare/md21.png",
    ],
    badge: "Fullstack",
    category: "Web Development",
    liveUrl: "#",
    status: "In progress",
    frontend: ["Next.js", "HeroUI", "Tailwind"],
    backend: ["Node.js", "Express", "MongoDB"],
    tools: ["JWT Auth", "Cloud Storage"],
  },
  {
    id: "LMS",
    title: "LMS for Darulkubra",
    description:
      "Learning management system with course catalogs, progress tracking, and instructor tools.",
    image: "/lms/comingsoon2.png",
    images: [
      "/lms/comingsoon2.png",
      "/lms/comingsoon2.png",
      "/lms/comingsoon2.png",
    ],
    badge: "Fullstack",
    category: "Web Development",
    repoUrl: "#",
    status: "In progress",
    frontend: ["React", "shadcn/ui"],
    backend: ["Node.js", "NestJS", "mysql"],
    tools: ["telegram api", "afro SMS", "VPS server"],
  },
  {
    id: "primeCard",
    title: "PrimeCard",
    description:
      "Clean marketing site with card management and content sections, optimized for performance and SEO.",
    image: "/primecard/card1.png",
    images: [
      "/primecard/card1.png",
      "/primecard/c0.png",
      "/primecard/c1.png",
      "/primecard/c2.png",
      "/primecard/c3.png",
      "/primecard/c4.png",
      "/primecard/c5.png",
    ],
    badge: "Fullstack",
    category: "Web Development",
    liveUrl: "https://terbia.darelkubra.com/en/student/7914",
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
    image: "/terbiaBot/tb2.jpg",
    images: [
      "/terbiaBot/tb1.jpg",
      "/terbiaBot/tb2.jpg",
      "/terbiaBot/tb3.jpg",
      "/terbiaBot/tb4.jpg",
      "/terbiaBot/tb5.jpg",
      "/terbiaBot/tb6.jpg",
      "/terbiaBot/tb7.jpg",
    ],
    badge: "Fullstack",
    category: "Web Development",
    liveUrl: "https://terbia.darelkubra.com/en/student/7914",
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
    image: "/terbiaBot/tb2.jpg",
    images: [
      "/terbiaBot/tb1.jpg",
      "/terbiaBot/tb2.jpg",
      "/terbiaBot/tb3.jpg",
      "/terbiaBot/tb4.jpg",
      "/terbiaBot/tb5.jpg",
      "/terbiaBot/tb6.jpg",
      "/terbiaBot/tb7.jpg",
    ],
    badge: "Backend",
    category: "Bot Development",
    repoUrl: `https://t.me/@MubareksBot?startapp=`,
    status: "Live",
    frontend: ["Telegram UI"],
    backend: ["Node.js", "Telegraf", "MySQL", "Grammy"],
    tools: ["Webhooks", "Docker"],
  },
];
