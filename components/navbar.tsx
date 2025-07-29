import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import { X, AlignRight } from "lucide-react";

export const AcmeLogo = () => (
  <img src="/logo.svg" alt="Logo" height={60} width={40} />
);

const NavbarMenu = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <Navbar
        shouldHideOnScroll
        className="px-1 z-40 flex gap-4  flex-row relative flex-nowrap items-center justify-between h-[var(--navbar-height)] w-full"
      >
        {/* Left: Logo */}
        <NavbarBrand className="flex items-center">
          <AcmeLogo />
          <p className="font-bold text-inherit ml-2">FUAD</p>
        </NavbarBrand>
        {/* Center: Links (hidden on mobile, flex on md+) */}
        <NavbarContent className="hidden md:flex gap-4 ml-auto" justify="end">
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#">Login</Link>
          </NavbarItem>
        </NavbarContent>
        {/* Mobile: Toggle button (only on mobile) */}
        <NavbarContent justify="end" className="md:hidden">
          <Button
            isIconOnly
            variant="flat"
            color="primary"
            className="md:hidden ml-2"
            onPress={() => setSidebar((prev) => !prev)}
          >
            <AlignRight className="size-7" />
          </Button>
        </NavbarContent>
      </Navbar>

      {/* Sidebar for mobile only */}
      {sidebar && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
            onClick={() => setSidebar(false)}
          />
          {/* Sidebar */}
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transition-transform duration-300 md:hidden">
            <div className="flex flex-col p-6 space-y-4">
              <button
                className="self-end mb-4"
                onClick={() => setSidebar(false)}
                aria-label="Close sidebar"
              >
                <X className="size-6" />
              </button>
              <Link href="#">Features</Link>
              <Link href="#">Customers</Link>
              <Link href="#">Integrations</Link>
              <Link href="#">Login</Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default NavbarMenu;
