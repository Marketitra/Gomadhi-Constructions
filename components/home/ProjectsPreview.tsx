import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ProjectCard from "@/components/projects/ProjectCard";
import { PROJECTS } from "@/lib/projects-data";

export default function ProjectsPreview() {
  return (
    <section className="border-b border-concrete-line px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="ONGOING PROJECTS" title="Site diary" />
          <Button href="/projects" variant="secondary">
            View all projects
          </Button>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {PROJECTS.slice(0, 4).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
