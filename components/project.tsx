import React, { useMemo, useState } from "react";
import Image from "next/image";
import { ExternalLink, ChevronRight } from "lucide-react";

type Category =
  | "All Projects"
  | "Web Development"
  | "Bot Development"
  | "Automation";

type ProjectItem = {
  id: string;
  title: string;
  description: string;
  image: string; // path under /public
  badge: "Frontend" | "Backend" | "Fullstack";
  category: Exclude<Category, "All Projects">;
  href?: string;
};

const FILTERS: Category[] = [
  "All Projects",
  "Web Development",
  "Bot Development",
  "Automation",
];

const PROJECTS: ProjectItem[] = [
  {
    id: "conversant",
    title: "Conversant Product Research",
    description:
      "An AI-powered shopping assistant that sources and summarizes product research with automation workflows.",
    image: "/logo.png",
    badge: "Backend",
    category: "Automation",
    href: "#",
  },
  {
    id: "mindcare",
    title: "Darelkubra mindcare",
    description:
      "Platform to discover Ethiopian software engineers, connect with opportunities, and join the growing tech community.",
    image: "/logo.png",
    badge: "Backend",
    category: "Web Development",
    href: "#",
  },
  {
    id: "infonas",
    title: "Infonas",
    description:
      "Internal automation tools and website for handling VoIP services, billing and customer operations.",
    image: "/logo.png",
    badge: "Backend",
    category: "Automation",
    href: "#",
  },
  {
    id: "primeCard",
    title: "PrimeCard",
    description:
      "Official website for the Bahrain Film Festival, showcasing films, schedules, and event updates.",
    image: "/logo.png",
    badge: "Frontend",
    category: "Web Development",
    href: "#",
  },
  {
    id: "terbia",
    title: "Terbia e-Learning",
    description:
      "Comprehensive backend system for managing operations, customers, and workflows.",
    image: "/logo.png",
    badge: "Backend",
    category: "Web Development",
    href: "#",
  },
  {
    id: "terbia-bot",
    title: "Terbia TELEGRAM BOT",
    description:
      "Official Python SDK for the Chapa Payment Gateway API, maintained and adopted by Chapa.",
    image: "/logo.png",
    badge: "Backend",
    category: "Bot Development",
    href: "#",
  },
];

function Badge({
  children,
  color = "violet",
}: {
  children: React.ReactNode;
  color?: "violet" | "blue" | "emerald";
}) {
  const map: Record<string, string> = {
    violet: "bg-violet-100 text-violet-700",
    blue: "bg-blue-100 text-blue-700",
    emerald: "bg-emerald-100 text-emerald-700",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${map[color]}`}
    >
      {children}
    </span>
  );
}

function ProjectCard({ p }: { p: ProjectItem }) {
  const badgeColor =
    p.badge === "Frontend"
      ? "emerald"
      : p.badge === "Backend"
      ? "violet"
      : "blue";

  return (
    <article className="group rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all overflow-hidden">
      {/* Top preview image */}
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={p.image}
          alt={p.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          priority={false}
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold text-gray-900">{p.title}</h3>
          <Badge color={badgeColor as any}>{p.badge}</Badge>
        </div>

        <p className="mt-2 text-sm text-gray-600">{p.description}</p>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between">
          <a
            href={p.href ?? "#"}
            className="inline-flex items-center text-sky-700 hover:text-sky-800"
          >
            View Details <ChevronRight className="ml-1 h-4 w-4" />
          </a>
          <a
            href={p.href ?? "#"}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Open project"
            target="_blank"
            rel="noreferrer"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
}

function Project() {
  const [active, setActive] = useState<Category>("All Projects");

  const filtered = useMemo(() => {
    if (active === "All Projects") return PROJECTS;
    return PROJECTS.filter((p) => p.category === active);
  }, [active]);

  return (
    <section className="p-6 sm:p-8">
      {/* Header */}
      <div className="text-center">
        <div className="mb-2">
          <span className="inline-block rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">
            MY WORK
          </span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900">
          Latest <span className="bg-sky-100 px-2 rounded">Projects</span>
        </h2>
      </div>

      {/* Filters */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        {FILTERS.map((f) => {
          const isActive = f === active;
          return (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={[
                "rounded-full border px-3 py-1.5 text-sm transition",
                isActive
                  ? "bg-sky-600 text-white border-sky-600 shadow-sm"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50",
              ].join(" ")}
            >
              {f}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}

export default Project;
