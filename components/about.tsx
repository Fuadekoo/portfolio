"use client";
import React from "react";

function About() {
  return (
    <section
      id="about"
      className="relative isolate bg-white py-16 sm:py-24 rounded-xl dark:bg-slate-950"
    >
      {/* Dark mode overlay */}
      <div className="hidden dark:block absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)] pointer-events-none z-0"></div>
      <div className="mx-auto max-w-5xl px-4 relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-blue-200 bg-blue-50 dark:border-primary-700 dark:bg-primary-900 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-primary-200">
            About me
          </span>

          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-black dark:text-white">
            I craft{" "}
            <span className="text-blue-600 dark:text-primary-300">
              reliable
            </span>
            <br className="hidden sm:block" />{" "}
            <span className="text-black dark:text-white">
              user‑friendly software.
            </span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-secondary-300">
            I turn product ideas into clean, performant web applications—end to
            end.
          </p>
        </div>

        {/* Content */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Bio */}
          <div className="space-y-4 text-slate-700 dark:text-secondary-200 leading-relaxed">
            <p>
              Hi, I’m Fuad. I enjoy shipping thoughtful interfaces and solid
              backends. My approach is simple: understand the problem deeply,
              design a clear solution, and implement it with maintainable code.
            </p>
            <p>
              I work mainly with React/Next.js on the front‑end and Node.js on
              the back‑end, with TypeScript across the stack. Performance,
              accessibility, and DX are first‑class concerns in everything I
              build.
            </p>
            <p>
              Outside of coding, I like learning new tools, exploring ideas with
              other builders, and contributing to useful open‑source snippets.
            </p>
          </div>

          {/* Quick facts / chips */}
          <div className="rounded-2xl border border-gray-200 dark:border-secondary-700 bg-blue-50/40 dark:bg-secondary-900/60 p-6">
            <h3 className="text-sm font-semibold text-black dark:text-white">
              Quick facts
            </h3>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="rounded-lg border border-blue-200 dark:border-primary-700 bg-white dark:bg-secondary-800 px-3 py-2 text-sm text-slate-800 dark:text-secondary-200">
                • Full‑stack focus (React, Next.js, Node.js)
              </li>
              <li className="rounded-lg border border-blue-200 dark:border-primary-700 bg-white dark:bg-secondary-800 px-3 py-2 text-sm text-slate-800 dark:text-secondary-200">
                • TypeScript everywhere
              </li>
              <li className="rounded-lg border border-blue-200 dark:border-primary-700 bg-white dark:bg-secondary-800 px-3 py-2 text-sm text-slate-800 dark:text-secondary-200">
                • Real‑time apps (Socket.IO / WebRTC)
              </li>
              <li className="rounded-lg border border-blue-200 dark:border-primary-700 bg-white dark:bg-secondary-800 px-3 py-2 text-sm text-slate-800 dark:text-secondary-200">
                • CI/CD & cloud deployments
              </li>
            </ul>

            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-lg bg-white dark:bg-secondary-800 border border-gray-200 dark:border-secondary-700 p-4">
                <div className="text-2xl font-bold text-slate-900 dark:text-white">
                  5+
                </div>
                <div className="text-xs text-slate-500 dark:text-secondary-300">
                  Major projects
                </div>
              </div>
              <div className="rounded-lg bg-white dark:bg-secondary-800 border border-gray-200 dark:border-secondary-700 p-4">
                <div className="text-2xl font-bold text-slate-900 dark:text-white">
                  100%
                </div>
                <div className="text-xs text-slate-500 dark:text-secondary-300">
                  TypeScript
                </div>
              </div>
              <div className="rounded-lg bg-white dark:bg-secondary-800 border border-gray-200 dark:border-secondary-700 p-4">
                <div className="text-2xl font-bold text-slate-900 dark:text-white">
                  Remote
                </div>
                <div className="text-xs text-slate-500 dark:text-secondary-300">
                  Friendly
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
