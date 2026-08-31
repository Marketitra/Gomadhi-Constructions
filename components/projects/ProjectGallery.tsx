"use client";

import Image from "next/image";
import { Film, Image as ImageIcon, PlayCircle } from "lucide-react";
import type { ProjectPhoto, ProjectVideo } from "@/types";

interface ProjectGalleryProps {
  photos: ProjectPhoto[];
  videos?: ProjectVideo[];
}

export default function ProjectGallery({ photos, videos = [] }: ProjectGalleryProps) {
  const hasVideos = videos && videos.length > 0;
  const hasPhotos = photos && photos.length > 0;

  if (!hasPhotos && !hasVideos) {
    return (
      <div className="flex h-64 items-center justify-center rounded border border-concrete-line bg-concrete-card font-mono text-xs text-stone-muted">
        MEDIA PENDING
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {/* Video Walkthrough Section */}
      {hasVideos && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-concrete-line pb-3">
            <Film size={20} className="text-rust" />
            <h2 className="font-display text-xl font-bold text-paper">
              Project Videos & Walkthroughs
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {videos.map((video) => (
              <div
                key={video.url}
                className="relative overflow-hidden rounded-xl border border-concrete-line bg-paper/90 shadow-md group"
              >
                <video
                  src={video.url}
                  controls
                  preload="metadata"
                  className="w-full h-72 sm:h-80 object-cover bg-black"
                />
                {video.caption && (
                  <div className="p-3 bg-concrete-card border-t border-concrete-line flex items-center justify-between">
                    <span className="font-sans text-xs font-medium text-stone">
                      {video.caption}
                    </span>
                    <span className="inline-flex items-center gap-1 font-mono text-[10px] text-rust font-semibold uppercase">
                      <PlayCircle size={12} /> Video
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Photo Gallery Section */}
      {hasPhotos && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-concrete-line pb-3">
            <ImageIcon size={20} className="text-gold" />
            <h2 className="font-display text-xl font-bold text-paper">
              Project Gallery
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((photo, index) => (
              <div
                key={photo.url}
                className="relative h-72 sm:h-80 overflow-hidden rounded-xl border border-concrete-line bg-concrete-card shadow-sm transition-all duration-300 hover:shadow-md hover:border-gold/40 group"
              >
                <Image
                  src={photo.url}
                  alt={photo.caption ?? `Site photo ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {photo.caption && (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-paper/90 via-paper/50 to-transparent p-3 pt-8">
                    <span className="font-sans text-xs text-concrete-card font-medium">
                      {photo.caption}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
