"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { PROJECTS } from "@/lib/projects";
import { siteConfig } from "@/lib/site-config";

export function BreadcrumbStructuredData() {
  const params = useParams<{ projectId: string }>();
  const project = PROJECTS.find((p) => p.id === params.projectId);

  useEffect(() => {
    if (!project) return;

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Projects",
          item: `${siteConfig.url}#projects`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: project.title,
          item: `${siteConfig.url}/${project.id}`,
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(breadcrumbSchema);
    script.id = "breadcrumb-structured-data";
    
    // Remove existing script if present
    const existing = document.getElementById("breadcrumb-structured-data");
    if (existing) existing.remove();
    
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById("breadcrumb-structured-data");
      if (scriptToRemove) scriptToRemove.remove();
    };
  }, [project]);

  return null;
}

