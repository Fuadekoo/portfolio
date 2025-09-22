"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Link, Button } from "@heroui/react";
import { useTheme } from "next-themes";
import { X, AlignRight, Sun, Moon } from "lucide-react";

export const AcmeLogo = () => (
  <Image src="/logo.svg" alt="Logo" height={40} width={32} />
);

// --- Theme Toggle (one icon, toggles light/dark) ---
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  const handleToggle = () => setTheme(isDark ? "light" : "dark");

  return (
    <button
      onClick={handleToggle}
      className="flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium transition-colors bg-secondary-100 dark:bg-secondary-800 text-secondary-600 hover:text-secondary-900 dark:text-secondary-400 dark:hover:text-white"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </button>
  );
};

const NavbarMenu = () => {
  const [sidebar, setSidebar] = useState(false);

  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  // Prevent body scroll when sidebar is open
  React.useEffect(() => {
    if (sidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebar]);

  return (
    <>
      {/* Top bar */}
      <div className="static border-b border-primary-600/20 bg-primary-50/80 backdrop-blur-lg shadow-lg text-primary-900">
        <div className="mx-auto max-w-6xl px-4 h-[var(--navbar-height,64px)] grid grid-cols-[auto_1fr_auto] items-center">
          {/* Left: Logo */}
          <div className="flex items-center justify-start gap-2">
            <AcmeLogo />
            <p className="ml-1 font-semibold tracking-wide text-primary-900">
              FUAD
            </p>
          </div>

          {/* Center: Links (desktop) */}
          <nav className="hidden md:flex items-center justify-center gap-7">
            <Link
              href="#home"
              className="relative text-primary-900 dark:text-secondary-50 hover:text-primary-700 dark:hover:text-primary-300 transition after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary-600 dark:after:bg-primary-400 after:transition-[width] after:duration-300 hover:after:w-full"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="relative text-primary-900 dark:text-secondary-50 hover:text-primary-700 dark:hover:text-primary-300 transition after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary-600 dark:after:bg-primary-400 after:transition-[width] after:duration-300 hover:after:w-full"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="relative text-primary-900 dark:text-secondary-50 hover:text-primary-700 dark:hover:text-primary-300 transition after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary-600 dark:after:bg-primary-400 after:transition-[width] after:duration-300 hover:after:w-full"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="relative text-primary-900 dark:text-secondary-50 hover:text-primary-700 dark:hover:text-primary-300 transition after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary-600 dark:after:bg-primary-400 after:transition-[width] after:duration-300 hover:after:w-full"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="relative text-primary-900 dark:text-secondary-50 hover:text-primary-700 dark:hover:text-primary-300 transition after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary-600 dark:after:bg-primary-400 after:transition-[width] after:duration-300 hover:after:w-full"
            >
              Contact
            </Link>
          </nav>

          {/* Right: Theme + Say Hi + Mobile menu */}
          <div className="flex items-center justify-end gap-2">
            {/* --- Theme Toggle --- */}
            <div className="hidden sm:inline-flex">
              <ThemeToggle />
            </div>
            <Button
              color="primary"
              variant="solid"
              onPress={scrollToContact}
              className="hidden sm:inline-flex"
            >
              Say Hi
            </Button>
            <Button
              isIconOnly
              variant="light"
              className="md:hidden text-primary-900"
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
          <button
            aria-label="Close menu"
            className="fixed inset-0 bg-secondary-900/40 dark:bg-secondary-900/60 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setSidebar(false)}
          />
          <div
            className="fixed top-0 right-0 h-dvh w-72 bg-primary-50 dark:bg-secondary-900 text-primary-900 dark:text-secondary-50 shadow-xl z-50 transition-transform duration-300 md:hidden flex flex-col border-l border-primary-200 dark:border-secondary-700 animate-slidein"
            style={{ transform: "translateX(0)" }}
          >
            <div className="flex items-center justify-between px-4 h-[64px] border-b border-primary-200 dark:border-secondary-700 bg-gradient-to-r from-primary-100/95 to-primary-200/95 dark:from-secondary-800/95 dark:to-secondary-900/95 text-primary-900 dark:text-secondary-50">
              <div className="flex items-center gap-2">
                <AcmeLogo /> <span className="font-semibold">FUAD</span>
              </div>
              <button
                onClick={() => setSidebar(false)}
                aria-label="Close sidebar"
                className="hover:text-primary-600 dark:hover:text-primary-400 transition"
              >
                <X className="size-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <div className="flex flex-col gap-3">
                {/* Use an array and map for DRY code */}
                {(
                  [
                    { href: "#home", label: "Home" },
                    { href: "#about", label: "About" },
                    { href: "#skills", label: "Skills" },
                    { href: "#projects", label: "Projects" },
                    { href: "#contact", label: "Contact" },
                  ] as const
                ).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setSidebar(false)}
                    className="block rounded-lg px-3 py-2.5 border border-secondary-200 dark:border-secondary-700 text-primary-900 dark:text-secondary-50 bg-transparent transition-all duration-200
                      hover:border-primary-500 hover:bg-primary-100/60 hover:text-primary-700
                      dark:hover:border-primary-400 dark:hover:bg-secondary-800/60 dark:hover:text-primary-300
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-success-400
                      relative group"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-success-500 dark:bg-success-400 transition-all duration-300 group-hover:w-full group-focus:w-full" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="sticky bottom-0 px-4 py-4 border-t border-primary-200 dark:border-secondary-700 bg-primary-50/80 dark:bg-secondary-900/80 backdrop-blur">
              <div className="flex flex-col gap-4">
                <ThemeToggle />
                <Button
                  color="primary"
                  className="w-full"
                  onPress={() => {
                    setSidebar(false);
                    scrollToContact();
                  }}
                >
                  Say Hi
                </Button>
              </div>
            </div>
          </div>
          <style jsx global>{`
            @keyframes slidein {
              from {
                transform: translateX(100%);
              }
              to {
                transform: translateX(0);
              }
            }
            .animate-slidein {
              animation: slidein 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
          `}</style>
        </>
      )}
    </>
  );
};

export default NavbarMenu;
