import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, FileDown } from "lucide-react";
import Badge from "@/components/ui/Badge";
import TitleBlock from "@/components/ui/TitleBlock";
import ProjectGallery from "@/components/projects/ProjectGallery";
import EnquiryForm from "@/components/forms/EnquiryForm";
import { PROJECTS } from "@/lib/projects-data";
import { COMPANY } from "@/lib/constants";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: `Project not found | ${COMPANY.name}` };

  return {
    title: `${project.name} | ${COMPANY.name}`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const highlight = project.towers
    ? `${project.towers} towers`
    : project.floors
      ? `${project.floors} floors`
      : null;

  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-stone hover:text-paper"
        >
          <ArrowLeft size={16} />
          All projects
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Badge tone="neutral">{project.status.toUpperCase()}</Badge>
          {highlight && <Badge tone="rust">{highlight.toUpperCase()}</Badge>}
        </div>

        <h1 className="mt-4 font-display text-4xl font-bold text-paper">
          {project.name}
        </h1>
        <p className="mt-2 text-stone-muted">
          {project.location} — {project.type}
        </p>
        <p className="mt-6 max-w-2xl text-stone">{project.description}</p>

        {project.brochureUrl && (
          <a
            href={project.brochureUrl}
            download
            className="mt-6 inline-flex items-center gap-2 rounded bg-gold px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-gold-dark"
          >
            <FileDown size={16} />
            Download brochure
          </a>
        )}

        <div className="mt-10">
          <ProjectGallery photos={project.photos} />
        </div>

        <div className="mt-16 grid gap-10 border-t border-concrete-line pt-10 sm:grid-cols-2">
          <div>
            <h2 className="font-display text-xl font-bold text-paper">
              Interested in something similar?
            </h2>
            <p className="mt-2 text-sm text-stone">
              Tell us your plot and requirements — we'll reference {project.name} where
              it's relevant to your build.
            </p>
          </div>
          <EnquiryForm projectInterest={project.name} />
        </div>

        <div className="mt-16">
          <TitleBlock sheet={`05 — ${project.slug.toUpperCase()}`} />
        </div>
      </div>
    </div>
  );
}