import type { Metadata } from "next";
import Providers from "./providers";
import { ThemeProvider } from "./ThemeProvider";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fuad | Full Stack Developer in Ethiopia",
  description:
    "Fuad is a passionate full stack developer based in Ethiopia. Specializing in React, Next.js, Node.js, TypeScript, and cloud solutions. Explore Fuad's portfolio, projects, resume, and client testimonials.",
  keywords: [
    "Fuad",
    "Full Stack Developer",
    "Ethiopia",
    "Ethiopian Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Web Developer Ethiopia",
    "Best Developer Ethiopia",
    "Portfolio",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Cloud Developer",
    "Remote Developer",
    "Melaverse",
    "ASTU",
    "AppFactory",
    "Resume",
    "Projects",
    "Client Testimonials",
  ],
  authors: [{ name: "Fuad", url: "https://github.com/youruser" }],
  creator: "Fuad",
  openGraph: {
    title: "Fuad | Full Stack Developer in Ethiopia",
    description:
      "Portfolio of Fuad, a top full stack developer in Ethiopia. See projects, skills, resume, and client feedback.",
    url: "https://your-portfolio-url.com",
    siteName: "Fuad Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fuad | Full Stack Developer in Ethiopia",
    description:
      "Explore Fuad's portfolio, projects, and resume. Full stack developer in Ethiopia specializing in React, Next.js, Node.js, and TypeScript.",
    creator: "@yourtwitterhandle",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
