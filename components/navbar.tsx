"use client";
import React, { useState } from "react";
import { Link, Button } from "@heroui/react";
import { X, AlignRight } from "lucide-react";

export const AcmeLogo = () => (
  <img src="/logo.svg" alt="Logo" height={60} width={40} />
);

const NavbarMenu = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div
        className={`sticky top-0 z-40 bg-red-600 backdrop-blur supports-[backdrop-filter]:bg-white/60 ${
          sidebar ? "blur-sm" : ""
        }`}
      >
        <div className="px-2 z-40 flex w-full flex-row items-center justify-between gap-4 h-[var(--navbar-height)]">
          {/* Left: Logo */}
          <div className="flex items-center">
            <AcmeLogo />
            <p className="font-bold text-inherit ml-2">FUAD</p>
          </div>

          {/* Right: Links (hidden on mobile, flex on md+) */}
          <nav className="hidden md:flex items-center gap-4 ml-auto">
            <Link color="foreground" href="#">
              Features
            </Link>
            <Link color="foreground" href="#">
              Customers
            </Link>
            <Link color="foreground" href="#">
              Integrations
            </Link>
            <Link href="#">Login</Link>
            <Button isIconOnly variant="light" aria-label="Toggle theme">
              🌤️
            </Button>
            <Button color="primary" onPress={() => alert("Hi!")}>
              Say Hi
            </Button>
          </nav>

          {/* Mobile: toggle button */}
          <div className="md:hidden">
            <Button
              isIconOnly
              variant="flat"
              color="primary"
              className="ml-2"
              onPress={() => setSidebar((prev) => !prev)}
              aria-label="Open menu"
            >
              <AlignRight className="size-7" />
            </Button>
          </div>
        </div>
      </div>

      {/* Sidebar for mobile only */}
      {sidebar && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setSidebar(false)}
          />
          {/* Sidebar */}
          <div className="fixed top-0 right-0 h-dvh w-64 bg-gray-300 shadow-lg z-50 transition-transform duration-300 flex flex-col justify-between md:hidden">
            {/* Top section: Close icon */}
            <div className="flex justify-end p-4 overflow-hidden">
              <button
                onClick={() => setSidebar(false)}
                aria-label="Close sidebar"
              >
                <X className="size-6" />
              </button>
            </div>
            {/* Middle section: Links */}
            <div className="flex flex-col gap-6 px-6 py-8 flex-1">
              <Link href="#">Features</Link>
              <Link href="#">Customers</Link>
              <Link href="#">Integrations</Link>
              <Link href="#">Login</Link>
            </div>
            {/* Bottom section: Sun icon and Say Hi button */}
            <div className="flex flex-row items-center justify-between px-6 py-4 ">
              <Button isIconOnly variant="light" aria-label="Toggle theme">
                🌤️
              </Button>
              <Button color="primary" onPress={() => alert("Hi!")}>
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
