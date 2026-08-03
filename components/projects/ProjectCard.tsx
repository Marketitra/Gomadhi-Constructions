import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
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
      className="group overflow-hidden rounded-xl border border-concrete-line bg-concrete-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-md"
    >
      <div className="relative h-48 w-full overflow-hidden bg-concrete-grid">
        {project.photos[0] ? (
          <Image
            src={project.photos[0].url}
            alt={`${project.name} site photo`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-mono text-xs text-stone-muted">
            PHOTO PENDING
          </div>
        )}
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge tone="gold">{project.type.toUpperCase()}</Badge>
          {highlight && <Badge tone="rust">{highlight.toUpperCase()}</Badge>}
        </div>
      </div>
      <div className="p-5 flex flex-col justify-between">
        <div>
          <h3 className="font-display text-lg font-bold text-paper group-hover:text-gold transition-colors">
            {project.name}
          </h3>
          <p className="mt-1.5 flex items-center gap-1 text-xs text-stone-muted font-mono">
            <MapPin size={13} className="text-rust shrink-0" />
            {project.location}
          </p>
          <p className="mt-2 text-xs text-stone line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>
        <div className="mt-4 pt-3 border-t border-concrete-line/60 flex items-center justify-between font-mono text-xs text-gold font-medium">
          <span>{project.status.toUpperCase()}</span>
          <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            DETAILS <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </Link>
  );
}
