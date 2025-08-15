"use client";
import React from "react";
import Image from "next/image";

function Home() {
  return (
    <section className="relative isolate overflow-hidden rounded-xl bg-gradient-to-b from-emerald-50 via-white to-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center min-h-[70vh] py-12">
          {/* Left: copy */}
          <div className="order-2 md:order-1">
            <span className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              Hello, I’m Fuad
            </span>

            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              I build <span className="text-emerald-600">clean</span>,{" "}
              <span className="text-emerald-600">reliable</span> web apps.
            </h1>

            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 max-w-xl">
              Full‑stack developer focused on Next.js, Node.js and TypeScript. I
              design crisp UIs, craft robust APIs, and ship fast with automation
              and CI/CD.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-2.5 text-white shadow hover:bg-emerald-700"
              >
                View projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-emerald-300 bg-white px-5 py-2.5 text-emerald-700 hover:bg-emerald-50"
              >
                Contact me
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-500">
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
                React / Next.js
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
                Node.js / APIs
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
                TypeScript
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
                CI/CD
              </span>
            </div>
          </div>

          {/* Right: image + animated background */}
          <div className="order-1 md:order-2">
            <div className="relative mx-auto aspect-square w-[280px] sm:w-[340px] md:w-[420px]">
              {/* Animated gradient blobs */}
              <div
                aria-hidden
                className="blob absolute -inset-10 rounded-full"
              />
              {/* Spinning ring */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-full border-2 border-emerald-200/60 spin-slow"
                style={{ animationDuration: "18s" }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-6 rounded-full border border-emerald-100/50 spin-slow"
                style={{ animationDuration: "24s" }}
              />
              {/* Foreground card */}
              <div className="absolute inset-6 rounded-full bg-white/70 backdrop-blur shadow-lg ring-1 ring-white/60 grid place-items-center">
                <Image
                  src="/logo.png"
                  alt="Fuad logo"
                  width={260}
                  height={260}
                  className="object-contain drop-shadow-sm"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative dots */}
      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(16,185,129,0.08)_1px,transparent_0)] bg-[size:18px_18px]"
      />

      <style jsx>{`
        .blob {
          background: radial-gradient(
              40% 40% at 30% 30%,
              rgba(16, 185, 129, 0.35),
              transparent 60%
            ),
            radial-gradient(
              35% 35% at 75% 70%,
              rgba(59, 130, 246, 0.25),
              transparent 60%
            );
          filter: blur(40px);
          animation: blob 12s ease-in-out infinite;
        }
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(22px, -12px) scale(1.05);
          }
          66% {
            transform: translate(-18px, 14px) scale(0.98);
          }
        }
        .spin-slow {
          animation: spin linear infinite;
        }
      `}</style>
    </section>
  );
}

export default Home;
