import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";
import Badge from "@/components/ui/Badge";

export default function ProjectCard({ project }: { project: Project }) {
  const highlight = project.towers
    ? `${project.towers} towers`
    : project.floors
      ? `${project.floors} floors`
      : null;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group overflow-hidden rounded border border-concrete-line bg-concrete-card transition-colors hover:border-stone"
    >
      <div className="relative h-44 w-full overflow-hidden bg-concrete-grid">
        {project.photos[0] ? (
          <Image
            src={project.photos[0].url}
            alt={`${project.name} site photo`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-mono text-xs text-stone-muted">
            PHOTO PENDING
          </div>
        )}
        {highlight && (
          <div className="absolute left-3 top-3">
            <Badge tone="rust">{highlight.toUpperCase()}</Badge>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-display font-bold text-paper">{project.name}</h3>
        <p className="mt-1 text-sm text-stone-muted">
          {project.location} {project.type}
        </p>
      </div>
    </Link>
  );
}
