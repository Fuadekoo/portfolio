"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Globe,
  Github,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { PROJECTS, type ProjectItem } from "@/lib/projects";
import { useParams } from "next/navigation";

export default function Page() {
  // Hooks must be unconditional
  const { projectId } = useParams<{ projectId: string }>();
  const [idx, setIdx] = useState(0);

  const project = PROJECTS.find((p) => p.id === projectId) as
    | ProjectItem
    | undefined;
  const images = project?.images?.length
    ? project.images
    : project?.image
    ? [project.image]
    : [];

  useEffect(() => setIdx(0), [project?.id]);

  if (!project) {
    return (
      <section className="p-6 sm:p-8">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/#projects"
            className="text-sm text-secondary-600 hover:text-primary-700 dark:text-secondary-300 dark:hover:text-primary-400"
          >
            ← Back to projects
          </Link>
          <h1 className="mt-6 text-2xl font-bold text-secondary-900 dark:text-secondary-50">
            Project not found
          </h1>
          <p className="mt-2 text-secondary-600 dark:text-secondary-300">
            Please return to the projects list.
          </p>
        </div>
      </section>
    );
  }

  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  return (
    <section className="p-6 sm:p-8">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/#projects"
          className="inline-flex items-center text-sm text-secondary-600 hover:text-primary-700 dark:text-secondary-300 dark:hover:text-primary-400"
        >
          ← Back to projects
        </Link>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-6">
          <div className="rounded-2xl bg-white dark:bg-secondary-900 p-3 shadow-xl border border-secondary-200 dark:border-secondary-700">
            <div className="relative h-[300px] sm:h-[420px] overflow-hidden rounded-xl border border-secondary-200 dark:border-secondary-700 bg-secondary-50 dark:bg-secondary-800">
              {images.length > 0 && (
                <Image
                  key={images[idx]}
                  src={images[idx]}
                  alt={`${project.title} image ${idx + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  priority
                />
              )}
              {images.length > 1 && (
                <>
                  <button
                    aria-label="Previous image"
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 dark:bg-secondary-800/80 text-secondary-700 dark:text-secondary-200 shadow hover:bg-white dark:hover:bg-secondary-700"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    aria-label="Next image"
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 dark:bg-secondary-800/80 text-secondary-700 dark:text-secondary-200 shadow hover:bg-white dark:hover:bg-secondary-700"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            {images.length > 1 && (
              <div className="mt-3 overflow-x-auto">
                <div
                  className="flex gap-2"
                  style={{
                    minWidth: 0,
                  }}
                >
                  {images.map((src, i) => (
                    <button
                      key={src}
                      onClick={() => setIdx(i)}
                      aria-label={`Go to image ${i + 1}`}
                      className={[
                        "relative h-16 w-16 flex-shrink-0 rounded-lg overflow-hidden border",
                        i === idx
                          ? "border-primary-500 ring-2 ring-primary-200 dark:border-primary-400 dark:ring-primary-700"
                          : "border-secondary-200 dark:border-secondary-700",
                      ].join(" ")}
                      style={{ minWidth: 64, minHeight: 64 }}
                    >
                      <Image
                        src={src}
                        alt={`thumb ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </button>
                  ))}
                </div>
                <style jsx>{`
                  .flex {
                    /* Show max 4 (mobile), 6 (sm), 8 (md) at once, rest scroll */
                    max-width: 272px; /* 4*64px + 3*8px gap */
                  }
                  @media (min-width: 640px) {
                    .flex {
                      max-width: 416px; /* 6*64px + 5*8px gap */
                    }
                  }
                  @media (min-width: 768px) {
                    .flex {
                      max-width: 560px; /* 8*64px + 7*8px gap */
                    }
                  }
                `}</style>
              </div>
            )}
          </div>

          <div className="relative rounded-2xl bg-white dark:bg-secondary-900 p-5 shadow-xl border border-secondary-200 dark:border-secondary-700">
            <h1 className="text-2xl font-bold text-secondary-900 dark:text-secondary-50">
              {project.title}
            </h1>
            <p className="mt-2 text-sm text-secondary-600 dark:text-secondary-300">
              {project.description}
            </p>

            <div className="mt-4 flex items-center gap-3">
              {project.status === "Live" ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-success-50 dark:bg-success-900 px-2.5 py-1 text-xs font-semibold text-success-700 dark:text-success-300">
                  <CheckCircle2 className="h-4 w-4" /> Live
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 dark:bg-amber-900 px-2.5 py-1 text-xs font-semibold text-amber-700 dark:text-amber-200">
                  <Clock className="h-4 w-4" /> In progress
                </span>
              )}
            </div>

            <div className="mt-5 space-y-4">
              {project.frontend?.length ? (
                <div>
                  <h4 className="text-sm font-semibold text-secondary-900 dark:text-secondary-50">
                    Frontend
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.frontend.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-success-200 dark:border-success-700 bg-success-50 dark:bg-success-900 px-2.5 py-1 text-xs text-success-700 dark:text-success-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              {project.backend?.length ? (
                <div>
                  <h4 className="text-sm font-semibold text-secondary-900 dark:text-secondary-50">
                    Backend
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.backend.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-primary-200 dark:border-primary-700 bg-primary-50 dark:bg-primary-900 px-2.5 py-1 text-xs text-primary-700 dark:text-primary-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              {project.tools?.length ? (
                <div>
                  <h4 className="text-sm font-semibold text-secondary-900 dark:text-secondary-50">
                    Other
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.tools.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-secondary-200 dark:border-secondary-700 bg-secondary-50 dark:bg-secondary-800 px-2.5 py-1 text-xs text-secondary-700 dark:text-secondary-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  // target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary-600 dark:bg-primary-700 px-4 py-2 text-white hover:bg-primary-700 dark:hover:bg-primary-600"
                >
                  <Globe className="h-4 w-4" />
                  Visit site inline
                </a>
              ) : null}
              {project.repoUrl ? (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-secondary-300 dark:border-secondary-700 bg-white dark:bg-secondary-800 px-4 py-2 text-secondary-700 dark:text-secondary-200 hover:bg-secondary-50 dark:hover:bg-secondary-700"
                >
                  <Github className="h-4 w-4" />
                  Source code
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
