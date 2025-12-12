import { Metadata } from "next";
import NavbarMenu from "@/components/navbar";
import Home from "@/components/home";
import About from "@/components/about";
import Resume from "@/components/resume";
import Skills from "@/components/skills";
import Project from "@/components/project";
import Testimonial from "@/components/testmonial";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
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
          <section id="home" aria-label="Home">
            <Home />
          </section>
          <section id="about" aria-label="About">
            <About />
          </section>
          <section id="resume" aria-label="Resume">
            <Resume />
          </section>
          <section id="skills" aria-label="Skills">
            <Skills />
          </section>
          <section id="projects" aria-label="Projects">
            <Project />
          </section>
          <section id="testimonials" aria-label="Testimonials">
            <Testimonial />
          </section>
          <section id="contact" aria-label="Contact">
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
