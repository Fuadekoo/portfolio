"use client";
import NavbarMenu from "@/components/navbar";
import Home from "@/components/home";
import About from "@/components/about";
import Skills from "@/components/skills";
import Work from "@/components/work";
import Testimonial from "@/components/testmonial";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import React from "react";

function Page() {
  return (
    <div className="grid grid-cols-1 gap-4 min-h-svh">
      {/* this is a navbar */}
      <div className="sticky top-0 z-10 p-0">
        <NavbarMenu />
      </div>
      <main className="grid grid-cols-1 gap-4">
        <div className="border-2 rounded h-[calc(100vh-4rem)]">
          <Home />
        </div>
        <div className="border-2 rounded h-[calc(100vh-4rem)]">
          <About />
        </div>
        <div className="border-2 rounded h-[calc(100vh-4rem)]">
          <Skills />
        </div>
        <div className="border-2 rounded h-[calc(100vh-4rem)]">
          <Work />
        </div>
        <div className="border-2 rounded h-[calc(100vh-4rem)]">
          <Testimonial />
        </div>
        <div className="border-2 rounded h-[calc(100vh-4rem)]">
          <Contact />
        </div>
      </main>
      <div className="border-2 rounded">
        <Footer />
      </div>
    </div>
  );
}

export default Page;
