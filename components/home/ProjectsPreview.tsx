import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ProjectCarousel3D from "@/components/projects/3DProjectCarousel";
import { PROJECTS } from "@/lib/projects-data";

export default function ProjectsPreview() {
  return (
    <section className="border-b border-concrete-line px-6 py-20 bg-concrete">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <SectionHeading
            eyebrow="ONGOING PROJECTS"
            title="Site diary"
            description="Explore our ongoing residential, commercial, and institutional projects across Nagpur in interactive 3D view."
          />
          <Button href="/projects" variant="secondary" showArrow>
            View all projects
          </Button>
        </div>

        <ProjectCarousel3D projects={PROJECTS} />
      </div>
    </section>
  );
}
