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
            className="text-sm text-slate-600 hover:text-emerald-700"
          >
            ← Back to projects
          </Link>
          <h1 className="mt-6 text-2xl font-bold text-slate-900">
            Project not found
          </h1>
          <p className="mt-2 text-slate-600">
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
          className="inline-flex items-center text-sm text-slate-600 hover:text-emerald-700"
        >
          ← Back to projects
        </Link>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-6">
          <div className="rounded-2xl bg-white p-3 shadow-xl border border-gray-200">
            <div className="relative h-[300px] sm:h-[420px] overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
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
                    className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow hover:bg-white"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    aria-label="Next image"
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow hover:bg-white"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            {images.length > 1 && (
              <div className="mt-3 grid grid-cols-4 sm:grid-cols-6 gap-2">
                {images.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => setIdx(i)}
                    aria-label={`Go to image ${i + 1}`}
                    className={[
                      "relative h-16 rounded-lg overflow-hidden border",
                      i === idx
                        ? "border-emerald-500 ring-2 ring-emerald-200"
                        : "border-gray-200",
                    ].join(" ")}
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
            )}
          </div>

          <div className="relative rounded-2xl bg-white p-5 shadow-xl border border-gray-200">
            <h1 className="text-2xl font-bold text-slate-900">
              {project.title}
            </h1>
            <p className="mt-2 text-sm text-slate-600">{project.description}</p>

            <div className="mt-4 flex items-center gap-3">
              {project.status === "Live" ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 className="h-4 w-4" /> Live
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">
                  <Clock className="h-4 w-4" /> In progress
                </span>
              )}
            </div>

            <div className="mt-5 space-y-4">
              {project.frontend?.length ? (
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">
                    Frontend
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.frontend.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs text-emerald-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              {project.backend?.length ? (
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">
                    Backend
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.backend.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-sky-200 bg-sky-50 px-2.5 py-1 text-xs text-sky-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              {project.tools?.length ? (
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">
                    Other
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.tools.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs text-slate-700"
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
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"
                >
                  <Globe className="h-4 w-4" />
                  Visit site
                </a>
              ) : null}
              {project.repoUrl ? (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-slate-700 hover:bg-gray-50"
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
