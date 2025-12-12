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
    liveUrl: "https://mindcare.darelkubra.com/",
    status: "Live",
    frontend: ["Next.js", "HeroUI", "Tailwind"],
    backend: ["Node.js", "Next.js", "mysql"],
    tools: ["JWT Auth", "AWS EC2 Instance", "VPS server"],
  },
  {
    id: "LMS",
    title: "LMS for Darulkubra",
    description:
      "Learning management system with course catalogs, progress tracking, instructor tools, and integrated payment processing via Stripe and Chapa.",
    image: "/lms/lm1.jpg",
    images: [
      "/lms/lm1.jpg",
      "/lms/lm2.jpg",
      "/lms/lm3.jpg",
      "/lms/lm4.jpg",
      "/lms/lm5.jpg",
      "/lms/lm6.jpg",
      "/lms/lm7.jpg",
      "/lms/lm8.jpg",
      "/lms/lm9.jpg",
      "/lms/lm10.jpg",
      "/lms/lm11.jpg",
      "/lms/12.jpg",
      "/lms/13.jpg",
      "/lms/14.jpg",
      "/lms/15.jpg",
      "/lms/16.jpg",
    ],
    badge: "Fullstack",
    category: "Web Development",
    liveUrl: "https://e-learning.darelkubra.com/",
    status: "Live",
    frontend: ["Next.js", "HeroUI", "Tailwind CSS"],
    backend: ["Node.js", "NestJS", "MySQL"],
    tools: ["Stripe", "Chapa", "Telegram API", "Afro SMS", "VPS server"],
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
    liveUrl: "https://card.primeaddis.com/",
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
    liveUrl: `https://t.me/MubareksBot?startapp=`,
    status: "Live",
    frontend: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    backend: ["Node.js", "Express", "MySQL"],
    tools: ["next-auth"],
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
    liveUrl: `https://t.me/@MubareksBot?startapp=`,
    status: "Live",
    frontend: ["Telegram UI"],
    backend: ["Node.js", "Telegraf", "MySQL", "Grammy"],
    tools: ["Webhooks", "Docker"],
  },
];
