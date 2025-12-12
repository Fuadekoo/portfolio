import { Metadata } from "next";
import { PROJECTS } from "@/lib/projects";
import { siteConfig } from "@/lib/site-config";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ projectId: string }>;
};

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    projectId: project.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { projectId } = await params;
  const project = PROJECTS.find((p) => p.id === projectId);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const url = `${siteConfig.url}/${projectId}`;
  const imageUrl = project.image.startsWith("http")
    ? project.image
    : `${siteConfig.url}${project.image}`;

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      type: "website",
    },
  };
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

