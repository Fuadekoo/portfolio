"use client";
import NavbarMenu from "@/components/navbar";
import Home from "@/components/home";
import About from "@/components/about";
import Resume from "@/components/resume";
import Skills from "@/components/skills";
import Project from "@/components/project";
import Testimonial from "@/components/testmonial";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import React from "react";

function Page() {
  return (
    <div className="min-h-dvh flex flex-col w-full overflow-x-hidden">
      {/* Dark mode background and overlay */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-slate-950">
        <div className="hidden dark:block absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
      </div>
      {/* Navbar */}
      <header className="sticky top-0 z-20 bg-primary-50/90 dark:bg-slate-950/90 backdrop-blur shadow w-full">
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
            <Resume />
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
