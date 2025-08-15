"use client";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";

type Testimony = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company?: string;
};

const TESTIMONIALS: Testimony[] = [
  {
    id: "mohamed",
    quote:
      "I have worked with Fuad for the past two years. During this time, he proved to be a hard worker with solid problem solving and technical skills. I was always impressed by his ability to complete the work assigned to him on time.",
    name: "Mohamed Toraif",
    role: "Head - AWS Cloud",
    company: "Beyon Solutions",
  },
  {
    id: "sara",
    quote:
      "Fuad delivered beyond expectations. Clear communication, clean code, and reliable timelines. I would definitely work with him again.",
    name: "Sara Johnson",
    role: "Product Manager",
    company: "Infonas",
  },
  {
    id: "li",
    quote:
      "Great attention to detail and UI polish. The handoff and documentation made maintenance simple for our team.",
    name: "Li Wei",
    role: "Engineering Lead",
    company: "EthioDevs",
  },
];

const AUTO_MS = 4500; // change the seconds you want between slides

function Testimonial() {
  const [index, setIndex] = useState(0);
  const total = TESTIMONIALS.length;
  const current = useMemo(() => TESTIMONIALS[index], [index]);

  // Auto-play
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, AUTO_MS);
    return () => clearInterval(id);
  }, [total]);

  const goto = (i: number) => setIndex((i + total) % total);
  const next = () => goto(index + 1);
  const prev = () => goto(index - 1);

  return (
    <section className="py-14 px-4">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="mb-3">
          <span className="inline-block rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
            CLIENT FEEDBACK
          </span>
        </div>
        <h2 className="text-3xl font-bold">Testimonials</h2>
        <p className="mt-2 text-sm text-gray-600">
          Here’s what people are saying about my work. Find more reviews on my{" "}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="text-sky-600 hover:underline"
          >
            LinkedIn profile
          </a>
          .
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
                <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 sm:p-8">
                  <div className="text-4xl text-slate-800">”</div>
                  <p className="mt-2 text-slate-700 leading-relaxed">
                    “{t.quote}”
                  </p>

                  {/* Author */}
                  <div className="mt-6 flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full bg-slate-200"></div>
                    <div className="text-sm">
                      <div className="font-semibold text-slate-900">
                        {t.name}
                      </div>
                      <div className="text-slate-600">
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
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-slate-700 hover:bg-gray-50"
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
                  index === i ? "w-5 bg-sky-600" : "w-2.5 bg-gray-300",
                ].join(" ")}
              />
            ))}
          </div>

          <button
            aria-label="Next"
            onClick={next}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-slate-700 hover:bg-gray-50"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
