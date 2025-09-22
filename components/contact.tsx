import React from "react";
import { Mail, Phone, Send, Linkedin, Github } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate bg-blue-50/60 py-16 sm:py-24 rounded-xl dark:bg-slate-950"
    >
      {/* Dark mode overlay */}
      <div className="hidden dark:block absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)] pointer-events-none z-0"></div>
      <div className="mx-auto max-w-5xl px-4 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-blue-200 bg-white dark:border-primary-700 dark:bg-primary-900 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-primary-200">
            Let’s talk
          </span>

          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-black dark:text-white">
            Ready to boost your online impact?
            <br />
            <span className="text-blue-600 dark:text-primary-300">
              Let’s build something great.
            </span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-secondary-300">
            Share a few details about your project and timeline. I’ll reply
            within one business day.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:you@example.com"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 dark:bg-primary-700 px-5 py-2.5 text-white shadow-lg hover:bg-blue-700 dark:hover:bg-primary-600 transition"
            >
              <Mail className="h-4 w-4 text-white" />
              Start a conversation
            </a>
            <a
              href="tel:+251000000000"
              className="inline-flex items-center gap-2 rounded-full border border-blue-300 dark:border-primary-700 bg-white dark:bg-secondary-900 px-5 py-2.5 text-blue-700 dark:text-primary-200 hover:bg-blue-50 dark:hover:bg-secondary-800 transition"
            >
              <Phone className="h-4 w-4 text-blue-600 dark:text-primary-300" />
              +251 000 000 000
            </a>
          </div>

          {/* Mobile chips */}
          <div className="mt-8 grid grid-cols-2 gap-3 md:hidden">
            <a
              href="mailto:you@example.com"
              className="inline-flex items-center gap-2 rounded-lg border border-blue-200 dark:border-primary-700 bg-white dark:bg-secondary-900 px-3 py-2 text-sm shadow dark:text-primary-200"
            >
              <Mail className="h-4 w-4 text-blue-600 dark:text-primary-300" />
              you@example.com
            </a>
            <a
              href="tel:+251000000000"
              className="inline-flex items-center gap-2 rounded-lg border border-blue-200 dark:border-primary-700 bg-white dark:bg-secondary-900 px-3 py-2 text-sm shadow dark:text-primary-200"
            >
              <Phone className="h-4 w-4 text-blue-600 dark:text-primary-300" />
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
            className="inline-flex items-center gap-2 rounded-lg border border-blue-200 dark:border-primary-700 bg-white/90 dark:bg-secondary-900/90 px-3 py-1.5 text-sm text-black dark:text-primary-200 shadow"
          >
            <Phone className="h-4 w-4 text-blue-600 dark:text-primary-300" />
            +251 000 000 000
          </a>
          <a
            href="mailto:you@example.com"
            className="inline-flex items-center gap-2 rounded-lg border border-blue-200 dark:border-primary-700 bg-white/90 dark:bg-secondary-900/90 px-3 py-1.5 text-sm text-black dark:text-primary-200 shadow"
          >
            <Mail className="h-4 w-4 text-blue-600 dark:text-primary-300" />
            you@example.com
          </a>
        </div>

        <div className="pointer-events-auto flex items-center gap-2">
          <a
            href="https://t.me/yourhandle"
            target="_blank"
            rel="noreferrer"
            className="grid place-items-center rounded-lg border border-blue-200 dark:border-primary-700 bg-white/90 dark:bg-secondary-900/90 p-2 text-blue-700 dark:text-primary-200 hover:bg-blue-50 dark:hover:bg-secondary-800 hover:text-blue-800 dark:hover:text-primary-300 shadow transition"
          >
            <Send className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noreferrer"
            className="grid place-items-center rounded-lg border border-blue-200 dark:border-primary-700 bg-white/90 dark:bg-secondary-900/90 p-2 text-blue-700 dark:text-primary-200 hover:bg-blue-50 dark:hover:bg-secondary-800 hover:text-blue-800 dark:hover:text-primary-300 shadow transition"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/youruser"
            target="_blank"
            rel="noreferrer"
            className="grid place-items-center rounded-lg border border-blue-200 dark:border-primary-700 bg-white/90 dark:bg-secondary-900/90 p-2 text-blue-700 dark:text-primary-200 hover:bg-blue-50 dark:hover:bg-secondary-800 hover:text-blue-800 dark:hover:text-primary-300 shadow transition"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
