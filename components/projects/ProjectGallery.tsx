import Image from "next/image";
import type { ProjectPhoto } from "@/types";

export default function ProjectGallery({ photos }: { photos: ProjectPhoto[] }) {
  if (!photos.length) {
    return (
      <div className="flex h-64 items-center justify-center rounded border border-concrete-line bg-concrete-card font-mono text-xs text-stone-muted">
        PHOTOS PENDING
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {photos.map((photo, index) => (
        <div
          key={photo.url}
          className="relative h-64 overflow-hidden rounded border border-concrete-line bg-concrete-grid"
        >
          <Image
            src={photo.url}
            alt={photo.caption ?? `Site photo ${index + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {photo.caption && (
            <span className="absolute bottom-2 right-2 rounded bg-concrete/80 px-2 py-1 font-mono text-[10px] text-stone">
              {photo.caption}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
