"use client";
import React from "react";
import Image from "next/image";
import { Code, Paintbrush2, Hammer } from "lucide-react";

const skills = {
  development: ["React", "TypeScript", "Next.js", "Node.js", "GraphQL"],
  Database: ["Figma", "Adobe XD", "Sketch", "UI/UX", "Wireframing"],
  tools: ["Git", "Jira", "Agile", "CI/CD", "Testing"],
};

// Images should be under /public/images
const STACK_GROUPS = [
  {
    title: "Frontend",
    pillClass: "bg-blue-50 text-blue-700 border-blue-200",
    items: [
      { name: "JavaScript", src: "/images/javascript.png" },
      { name: "TypeScript", src: "/images/typescript.png" },
      { name: "React", src: "/images/react.png" },
      { name: "Next.js", src: "/images/nextjs.png" },
      { name: "HeroUI", src: "/images/heroui.png" },
      { name: "shadcn/ui", src: "/images/shadcnui.png" },
      { name: "Socket.IO", src: "/images/socketio.png" },
      { name: "WebRTC", src: "/images/webrtc.png" },
    ],
  },
  {
    title: "Backend",
    pillClass: "bg-blue-50 text-blue-700 border-blue-200",
    items: [
      { name: "Node.js", src: "/images/nodejs.png" },
      { name: "Express", src: "/images/express.png" },
      { name: "MySQL", src: "/images/mysql.png" },
      { name: "PostgreSQL", src: "/images/postgresql.png" },
      { name: "MongoDB", src: "/images/mongodb.png" },
      { name: "Mongoose", src: "/images/mongoose.png" },
      { name: "JWT", src: "/images/jwt.png" },
      { name: "Socket.IO", src: "/images/socketio.png" },
    ],
  },
  {
    title: "Others",
    pillClass: "bg-teal-50 text-teal-700 border-teal-200",
    items: [
      { name: "GraphQL", src: "/images/graphql.png" },
      { name: "Linux", src: "/images/linux.png" },
      { name: "Bash", src: "/images/bash.png" },
      { name: "Git", src: "/images/git.png" },
      { name: "Apache", src: "/images/apache.png" },
      { name: "AWS", src: "/images/aws.png" },
      { name: "Azure", src: "/images/azure.png" },
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative isolate bg-white py-16 sm:py-24 rounded-xl"
    >
      <div className="mx-auto max-w-5xl px-4">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            Skills & Tools
          </span>

          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-black">
            The stack I use to ship
            <br className="hidden sm:block" />
            <span className="text-blue-600">fast, reliable products</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600">
            A quick snapshot of the technologies I reach for when building
            real‑world apps.
          </p>
        </div>

        {/* Summary cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
            <div className="flex items-center mb-4">
              <Code className="w-8 h-8 text-blue-500 mr-3" />
              <h3 className="text-lg font-semibold text-black">Development</h3>
            </div>
            <ul className="space-y-2 text-slate-600">
              {skills.development.map((skill) => (
                <li key={skill} className="flex items-center">
                  <span className="text-blue-500 mr-2">›</span> {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
            <div className="flex items-center mb-4">
              <Paintbrush2 className="w-8 h-8 text-blue-500 mr-3" />
              <h3 className="text-lg font-semibold text-black">Design</h3>
            </div>
            <ul className="space-y-2 text-slate-600">
              {skills.Database.map((skill) => (
                <li key={skill} className="flex items-center">
                  <span className="text-blue-500 mr-2">›</span> {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
            <div className="flex items-center mb-4">
              <Hammer className="w-8 h-8 text-blue-500 mr-3" />
              <h3 className="text-lg font-semibold text-black">
                Tools & Methods
              </h3>
            </div>
            <ul className="space-y-2 text-slate-600">
              {skills.tools.map((skill) => (
                <li key={skill} className="flex items-center">
                  <span className="text-blue-500 mr-2">›</span> {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech Stack Highlights */}
        <h3 className="text-2xl font-bold text-center mt-16 mb-8 text-black">
          Tech Stack Highlights
        </h3>

        <div className="space-y-12">
          {STACK_GROUPS.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-gray-200 bg-white/80 p-5 shadow-sm"
            >
              {/* Pill header */}
              <div className="flex justify-center">
                <span
                  className={`inline-block px-4 py-1 rounded-full border text-sm ${group.pillClass}`}
                >
                  {group.title}
                </span>
              </div>

              {/* Icon cards grid */}
              <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 justify-items-center">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="w-24 h-24 rounded-xl border border-gray-200 bg-white/90 shadow-sm hover:shadow-md hover:ring-1 hover:ring-blue-200 transition flex flex-col items-center justify-center gap-2"
                    title={item.name}
                  >
                    <Image
                      src={item.src}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="w-10 h-10 object-contain"
                    />
                    <span className="text-xs text-gray-700 text-center">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
