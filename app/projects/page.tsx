import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import TitleBlock from "@/components/ui/TitleBlock";
import ProjectCard from "@/components/projects/ProjectCard";
import { PROJECTS } from "@/lib/projects-data";
import { COMPANY } from "@/lib/constants";
import type { Project } from "@/types";

export const metadata: Metadata = {
  title: `Projects | ${COMPANY.name}`,
  description:
    "Ongoing residential and commercial construction projects across Nagpur.",
};

async function getProjects(): Promise<Project[]> {
  // Static import is the reliable fallback; swap to a fetch() against
  // /api/projects once NEXT_PUBLIC_SITE_URL is set for server-side calls.
  return PROJECTS;
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="ONGOING PROJECTS"
          title="Site diary"
          description="Live builds across Nagpur click through for photos and details."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-16">
          <TitleBlock sheet="04 PROJECTS" />
        </div>
      </div>
    </div>
  );
}
