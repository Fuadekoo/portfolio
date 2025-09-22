"use client";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Testimony = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company?: string;
};

const TESTIMONIALS: Testimony[] = [
  {
    id: "ahmed-yasin",
    quote:
      "Fuad is a highly skilled developer who consistently delivers quality work. His expertise in building immersive digital experiences has been invaluable to Melaverse.",
    name: "Ahmed Yasin",
    role: "CEO",
    company: "Melaverse",
  },
  {
    id: "abdulkarim-ahmed",
    quote:
      "Working with Fuad has been a great experience. He is proactive, detail-oriented, and always ready to tackle new challenges in our projects.",
    name: "Abdulkarim Ahmed",
    role: "Developer",
    company: "Melaverse",
  },
  {
    id: "mubareh-ahmed",
    quote:
      "Fuad brings creativity and technical excellence to every project. His collaborative spirit and problem-solving skills make him a valuable team member.",
    name: "Mubareh Ahmed",
    role: "Developer",
    company: "Melaverse",
  },
];

const AUTO_MS = 5000;

const initials = (fullName: string) =>
  fullName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

function Testimonial() {
  const [index, setIndex] = useState(0);
  const total = TESTIMONIALS.length;

  // Auto-play with reset after manual navigation
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, AUTO_MS);
    return () => clearInterval(id);
  }, [index, total]);

  const goto = (i: number) => setIndex((i + total) % total);
  const next = () => goto(index + 1);
  const prev = () => goto(index - 1);

  return (
    <section className="py-16 px-4">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="mb-3">
          <span className="inline-block rounded-full border border-primary-200 bg-primary-50 dark:border-primary-700 dark:bg-primary-900 px-3 py-1 text-xs font-semibold text-primary-700 dark:text-primary-200">
            CLIENT FEEDBACK
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary-900 dark:text-white">
          Testimonials
        </h2>
        <p className="mt-2 text-sm sm:text-base text-secondary-700 dark:text-secondary-300">
          What clients say about my work and collaboration.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative mt-10 max-w-4xl mx-auto">
        {/* Track */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="min-w-full px-4">
                <div className="rounded-2xl border border-secondary-200 dark:border-secondary-700 bg-white/90 dark:bg-secondary-900/90 shadow-sm p-6 sm:p-8">
                  <div className="text-5xl leading-none text-primary-500 dark:text-primary-400">
                    “
                  </div>
                  <p className="mt-3 text-base sm:text-lg text-secondary-800 dark:text-secondary-200 leading-relaxed">
                    {t.quote}
                  </p>

                  {/* Author */}
                  <div className="mt-6 flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-200 text-xs font-semibold">
                      {initials(t.name)}
                    </div>
                    <div className="text-sm">
                      <div className="font-semibold text-primary-900 dark:text-white">
                        {t.name}
                      </div>
                      <div className="text-secondary-700 dark:text-secondary-300">
                        {t.role}
                        {t.company ? ` • ${t.company}` : ""}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            aria-label="Previous"
            onClick={prev}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-secondary-300 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 hover:bg-secondary-50 dark:hover:bg-secondary-700 hover:ring-1 hover:ring-primary-200 dark:hover:ring-primary-700 transition"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => goto(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={[
                  "h-2.5 rounded-full transition-all",
                  index === i
                    ? "w-5 bg-primary-600 dark:bg-primary-400"
                    : "w-2.5 bg-secondary-300 dark:bg-secondary-700",
                ].join(" ")}
              />
            ))}
          </div>

          <button
            aria-label="Next"
            onClick={next}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-secondary-300 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 hover:bg-secondary-50 dark:hover:bg-secondary-700 hover:ring-1 hover:ring-primary-200 dark:hover:ring-primary-700 transition"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
