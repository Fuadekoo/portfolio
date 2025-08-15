import React from "react";
import { Mail, Phone, Send, Linkedin, Github } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate bg-emerald-50/60 py-16 sm:py-24 rounded-xl"
    >
      <div className="mx-auto max-w-5xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-emerald-200 bg-white px-3 py-1 text-xs font-semibold text-emerald-700">
            Let’s talk
          </span>

          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Ready to boost your online impact?
            <br />
            <span className="text-emerald-600">
              Let’s build something great.
            </span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Share a few details about your project and timeline. I’ll reply
            within one business day.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:you@example.com"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-white shadow hover:bg-emerald-700"
            >
              <Mail className="h-4 w-4" />
              Start a conversation
            </a>
            <a
              href="tel:+251000000000"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-white px-5 py-2.5 text-emerald-700 hover:bg-emerald-50"
            >
              <Phone className="h-4 w-4" />
              +251 000 000 000
            </a>
          </div>

          {/* Mobile chips */}
          <div className="mt-8 grid grid-cols-2 gap-3 md:hidden">
            <a
              href="mailto:you@example.com"
              className="inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-white px-3 py-2 text-sm"
            >
              <Mail className="h-4 w-4 text-emerald-600" />
              you@example.com
            </a>
            <a
              href="tel:+251000000000"
              className="inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-white px-3 py-2 text-sm"
            >
              <Phone className="h-4 w-4 text-emerald-600" />
              +251 000 000 000
            </a>
          </div>
        </div>
      </div>

      {/* Desktop pinned chips */}
      <div className="pointer-events-none absolute inset-x-0 bottom-4 hidden justify-between px-4 md:flex">
        <div className="pointer-events-auto flex flex-col gap-2">
          <a
            href="tel:+251000000000"
            className="inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-white/90 px-3 py-1.5 text-sm text-slate-800 shadow"
          >
            <Phone className="h-4 w-4 text-emerald-600" />
            +251 000 000 000
          </a>
          <a
            href="mailto:you@example.com"
            className="inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-white/90 px-3 py-1.5 text-sm text-slate-800 shadow"
          >
            <Mail className="h-4 w-4 text-emerald-600" />
            you@example.com
          </a>
        </div>

        <div className="pointer-events-auto flex items-center gap-2">
          <a
            href="https://t.me/yourhandle"
            target="_blank"
            rel="noreferrer"
            className="grid place-items-center rounded-lg border border-emerald-200 bg-white/90 p-2 text-slate-700 hover:text-emerald-700 shadow"
          >
            <Send className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noreferrer"
            className="grid place-items-center rounded-lg border border-emerald-200 bg-white/90 p-2 text-slate-700 hover:text-emerald-700 shadow"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/youruser"
            target="_blank"
            rel="noreferrer"
            className="grid place-items-center rounded-lg border border-emerald-200 bg-white/90 p-2 text-slate-700 hover:text-emerald-700 shadow"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
