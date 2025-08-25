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

  return (
    <>
      {/* Top bar */}
      <div className="static border-b border-success-600/20 bg-gradient-to-r from-secondary-700/95 via-secondary-800/95 to-secondary-900/95 text-white">
        <div className="mx-auto max-w-6xl px-4 h-[var(--navbar-height,64px)] grid grid-cols-[auto_1fr_auto] items-center">
          {/* Left: Logo */}
          <div className="flex items-center justify-start gap-2">
            <AcmeLogo />
            <p className="ml-1 font-semibold tracking-wide">FUAD</p>
          </div>

          {/* Center: Links (desktop) */}
          <nav className="hidden md:flex items-center justify-center gap-7">
            <Link
              href="#home"
              className="relative text-white/90 hover:text-white transition after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-success after:transition-[width] after:duration-300 hover:after:w-full"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="relative text-white/90 hover:text-white transition after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-success after:transition-[width] after:duration-300 hover:after:w-full"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="relative text-white/90 hover:text-white transition after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-success after:transition-[width] after:duration-300 hover:after:w-full"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="relative text-white/90 hover:text-white transition after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-success after:transition-[width] after:duration-300 hover:after:w-full"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="relative text-white/90 hover:text-white transition after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-success after:transition-[width] after:duration-300 hover:after:w-full"
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
              color="success"
              variant="solid"
              onPress={scrollToContact}
              className="hidden sm:inline-flex"
            >
              Say Hi
            </Button>
            <Button
              isIconOnly
              variant="light"
              className="md:hidden text-white"
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
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setSidebar(false)}
          />
          <div className="fixed top-0 right-0 h-dvh w-72 bg-background text-foreground shadow-xl z-50 transition-transform duration-300 md:hidden flex flex-col">
            <div className="flex items-center justify-between px-4 h-[64px] border-b bg-gradient-to-r from-secondary-800/95 to-secondary-900/95 text-white">
              <div className="flex items-center gap-2">
                <AcmeLogo /> <span className="font-semibold">FUAD</span>
              </div>
              <button
                onClick={() => setSidebar(false)}
                aria-label="Close sidebar"
              >
                <X className="size-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <div className="flex flex-col gap-3">
                <Link
                  href="#home"
                  onClick={() => setSidebar(false)}
                  className="block rounded-lg px-3 py-2.5 text-secondary-800 hover:bg-secondary-50 hover:text-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-success"
                >
                  Home
                </Link>
                <Link
                  href="#about"
                  onClick={() => setSidebar(false)}
                  className="block rounded-lg px-3 py-2.5 text-secondary-800 hover:bg-secondary-50 hover:text-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-success"
                >
                  About
                </Link>
                <Link
                  href="#skills"
                  onClick={() => setSidebar(false)}
                  className="block rounded-lg px-3 py-2.5 text-secondary-800 hover:bg-secondary-50 hover:text-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-success"
                >
                  Skills
                </Link>
                <Link
                  href="#projects"
                  onClick={() => setSidebar(false)}
                  className="block rounded-lg px-3 py-2.5 text-secondary-800 hover:bg-secondary-50 hover:text-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-success"
                >
                  Projects
                </Link>
                <Link
                  href="#contact"
                  onClick={() => setSidebar(false)}
                  className="block rounded-lg px-3 py-2.5 text-secondary-800 hover:bg-secondary-50 hover:text-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-success"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="sticky bottom-0 px-4 py-4 border-t bg-background/80 backdrop-blur">
              <div className="flex flex-col gap-4">
                <ThemeToggle />
                <Button
                  color="success"
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
        </>
      )}
    </>
  );
};

export default NavbarMenu;
