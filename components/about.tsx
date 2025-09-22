"use client";
import React from "react";

function About() {
  return (
    <section
      id="about"
      className="relative isolate bg-white py-16 sm:py-24 rounded-xl"
    >
      <div className="mx-auto max-w-5xl px-4">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            About me
          </span>

          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-black">
            I craft <span className="text-blue-600">reliable</span> and
            <br className="hidden sm:block" /> user‑friendly software.
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600">
            I turn product ideas into clean, performant web applications—end to
            end.
          </p>
        </div>

        {/* Content */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Bio */}
          <div className="space-y-4 text-slate-700 leading-relaxed">
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
          <div className="rounded-2xl border border-gray-200 bg-blue-50/40 p-6">
            <h3 className="text-sm font-semibold text-black">Quick facts</h3>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="rounded-lg border border-blue-200 bg-white px-3 py-2 text-sm text-slate-800">
                • Full‑stack focus (React, Next.js, Node.js)
              </li>
              <li className="rounded-lg border border-blue-200 bg-white px-3 py-2 text-sm text-slate-800">
                • TypeScript everywhere
              </li>
              <li className="rounded-lg border border-blue-200 bg-white px-3 py-2 text-sm text-slate-800">
                • Real‑time apps (Socket.IO / WebRTC)
              </li>
              <li className="rounded-lg border border-blue-200 bg-white px-3 py-2 text-sm text-slate-800">
                • CI/CD & cloud deployments
              </li>
            </ul>

            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-lg bg-white border border-gray-200 p-4">
                <div className="text-2xl font-bold text-slate-900">5+</div>
                <div className="text-xs text-slate-500">Major projects</div>
              </div>
              <div className="rounded-lg bg-white border border-gray-200 p-4">
                <div className="text-2xl font-bold text-slate-900">100%</div>
                <div className="text-xs text-slate-500">TypeScript</div>
              </div>
              <div className="rounded-lg bg-white border border-gray-200 p-4">
                <div className="text-2xl font-bold text-slate-900">Remote</div>
                <div className="text-xs text-slate-500">Friendly</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
