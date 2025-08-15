"use client";
import React from "react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="mt-8 border-t bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="Logo" width={32} height={32} />
            <span className="text-lg font-semibold tracking-wide">Fuad</span>
          </div>
          <p className="mt-3 text-sm text-slate-400">
            Full‑stack developer focused on performant, accessible web apps.
          </p>
          <p className="mt-2 text-sm text-slate-400">
            I design clean UIs with React/Next.js, build robust APIs with
            Node.js, and deploy to cloud platforms with CI/CD for reliable,
            maintainable products.
          </p>
        </div>

        {/* What I build */}
        <div>
          <h4 className="text-sm font-semibold text-white">What I build</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li>• Responsive sites and dashboards</li>
            <li>• REST/GraphQL backends</li>
            <li>• Real‑time apps (Socket.IO/WebRTC)</li>
            <li>• Auth, payments, and integrations</li>
            <li>• Dockerized, cloud‑ready deployments</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold text-white">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-emerald-400" />
              <a href="mailto:you@example.com" className="hover:text-white">
                you@example.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-emerald-400" />
              <span>Addis Ababa, ET</span>
            </li>
          </ul>
          <p className="mt-3 text-xs text-slate-400">
            Open to freelance and remote opportunities.
          </p>
        </div>

        {/* Elsewhere */}
        <div>
          <h4 className="text-sm font-semibold text-white">Elsewhere</h4>
          <div className="mt-3 flex items-center gap-3">
            <a
              href="https://github.com/youruser"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid h-9 w-9 place-items-center rounded-md bg-slate-800 hover:bg-slate-700"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-9 w-9 place-items-center rounded-md bg-slate-800 hover:bg-slate-700"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:you@example.com"
              aria-label="Email"
              className="grid h-9 w-9 place-items-center rounded-md bg-slate-800 hover:bg-slate-700"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <p className="mt-3 text-xs text-slate-400">
            Code samples and case studies available on request.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <p>© {year} Fuad. All rights reserved.</p>
          <p>Built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
