"use client";
import React, { useState } from "react";
import { Link, Button } from "@heroui/react";
import { X, AlignRight } from "lucide-react";

export const AcmeLogo = () => (
  <img src="/logo.svg" alt="Logo" height={40} width={32} />
);

const NavbarMenu = () => {
  const [sidebar, setSidebar] = useState(false);

  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      {/* Top bar */}
      <div className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-6xl px-4 h-[var(--navbar-height,64px)] grid grid-cols-[auto_1fr_auto] items-center">
          {/* Left: Logo */}
          <div className="flex items-center justify-start gap-2">
            <AcmeLogo />
            <p className="ml-1 font-semibold tracking-wide text-slate-900">
              FUAD
            </p>
          </div>

          {/* Center: Links (desktop) */}
          <nav className="hidden md:flex items-center justify-center gap-6">
            <Link
              href="#about"
              className="text-slate-700 hover:text-emerald-600"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-slate-700 hover:text-emerald-600"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-slate-700 hover:text-emerald-600"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-slate-700 hover:text-emerald-600"
            >
              Contact
            </Link>
          </nav>

          {/* Right: Theme + Say Hi + Mobile menu */}
          <div className="flex items-center justify-end gap-2">
            <Button
              isIconOnly
              variant="light"
              aria-label="Toggle theme"
              className="hidden sm:inline-flex"
            >
              🌤️
            </Button>
            <Button
              color="primary"
              onPress={scrollToContact}
              className="hidden sm:inline-flex"
            >
              Say Hi
            </Button>

            {/* Mobile menu toggle (always pinned to far right) */}
            <Button
              isIconOnly
              variant="flat"
              color="primary"
              className="md:hidden"
              onPress={() => setSidebar(true)}
              aria-label="Open menu"
            >
              <AlignRight className="size-7" />
            </Button>
          </div>
        </div>
      </div>

      {/* Sidebar (mobile) */}
      {sidebar && (
        <>
          {/* Overlay */}
          <button
            aria-label="Close menu"
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setSidebar(false)}
          />
          {/* Panel */}
          <div className="fixed top-0 right-0 h-dvh w-72 bg-white text-slate-900 shadow-xl z-50 transition-transform duration-300 md:hidden">
            <div className="flex items-center justify-between px-4 h-[64px] border-b">
              <div className="flex items-center gap-2">
                <AcmeLogo />
                <span className="font-semibold">FUAD</span>
              </div>
              <button
                onClick={() => setSidebar(false)}
                aria-label="Close sidebar"
              >
                <X className="size-6" />
              </button>
            </div>

            <div className="flex flex-col gap-5 p-6">
              <Link
                href="#about"
                onClick={() => setSidebar(false)}
                className="text-slate-700 hover:text-emerald-600"
              >
                About
              </Link>
              <Link
                href="#skills"
                onClick={() => setSidebar(false)}
                className="text-slate-700 hover:text-emerald-600"
              >
                Skills
              </Link>
              <Link
                href="#projects"
                onClick={() => setSidebar(false)}
                className="text-slate-700 hover:text-emerald-600"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                onClick={() => setSidebar(false)}
                className="text-slate-700 hover:text-emerald-600"
              >
                Contact
              </Link>
            </div>

            <div className="mt-auto flex items-center justify-between px-6 py-4 border-t">
              <Button
                isIconOnly
                variant="light"
                aria-label="Toggle theme"
                className="hidden sm:inline-flex"
              >
                🌤️
              </Button>
              <Button
                color="primary"
                onPress={() => {
                  setSidebar(false);
                  scrollToContact();
                }}
              >
                Say Hi
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default NavbarMenu;
