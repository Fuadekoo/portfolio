"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ChevronRight } from "lucide-react";
import type { Category, ProjectItem } from "../lib/projects";
import { PROJECTS } from "../lib/projects";

// Filters
const FILTERS: Category[] = [
  "All Projects",
  "Web Development",
  "Bot Development",
  "Automation",
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
          <Badge color={badgeColor}>{p.badge}</Badge>
        </div>

        <p className="mt-2 text-sm text-gray-600 line-clamp-3">
          {p.description}
        </p>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between">
          <Link
            href={`/${p.id}`}
            className="inline-flex items-center text-emerald-700 hover:text-emerald-800"
          >
            View Details <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
          {(p.liveUrl || p.href) && (
            <a
              href={p.liveUrl ?? p.href ?? "#"}
              className="text-gray-400 hover:text-gray-600"
              aria-label="Open project"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
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
    <section className="p-6 sm:p-8" id="projects">
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
