"use client";
import NavbarMenu from "@/components/navbar";
import Home from "@/components/home";
import About from "@/components/about";
import Skills from "@/components/skills";
import Project from "@/components/project";
import Testimonial from "@/components/testmonial";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import React from "react";

function Page() {
  return (
    <div className="h-full flex flex-col w-full overflow-x-hidden">
      {/* Navbar */}
      <header className="sticky top-0 z-20 bg-primary-50/90 backdrop-blur shadow w-full">
        <NavbarMenu />
      </header>

      {/* Main grows and can scroll if content is tall */}
      <main className="flex-1 min-h-0 w-full">
        <div className="grid grid-cols-1 gap-4 p-0 w-full">
          <section className="">
            <Home />
          </section>
          <section className="">
            <About />
          </section>
          <section className="">
            <Skills />
          </section>
          <section className="">
            <Project />
          </section>
          <section className="">
            <Testimonial />
          </section>
          <section className="">
            <Contact />
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}

export default Page;
