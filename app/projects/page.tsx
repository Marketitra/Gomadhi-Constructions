import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import TitleBlock from "@/components/ui/TitleBlock";
import ProjectCarousel3D from "@/components/projects/3DProjectCarousel";
import { PROJECTS } from "@/lib/projects-data";
import { COMPANY } from "@/lib/constants";
import type { Project } from "@/types";

export const metadata: Metadata = {
  title: `Projects | ${COMPANY.name}`,
  description:
    "Ongoing residential and commercial construction projects across Nagpur.",
};

async function getProjects(): Promise<Project[]> {
  return PROJECTS;
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="px-6 py-16 bg-concrete min-h-screen">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="ONGOING PROJECTS"
          title="Site diary"
          description="Live builds across Nagpur. Explore our full portfolio of ongoing residential, commercial, and institutional projects."
        />

        <div className="mt-10">
          <ProjectCarousel3D projects={projects} />
        </div>

        <div className="mt-16">
          <TitleBlock sheet="04 PROJECTS" />
        </div>
      </div>
    </div>
  );
}
