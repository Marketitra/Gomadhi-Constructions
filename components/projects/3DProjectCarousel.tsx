"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Play, Pause, ExternalLink, MapPin } from "lucide-react";
import type { Project } from "@/types";

interface ProjectCarousel3DProps {
  projects: Project[];
}

export default function ProjectCarousel3D({ projects }: ProjectCarousel3DProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const categories = [
    "ALL",
    ...Array.from(new Set(projects.map((p) => p.type.split(" ")[0].toUpperCase()))),
  ];

  // Filtering projects 
  const filteredProjects = projects.filter((p) => {
    if (selectedCategory === "ALL") return true;
    return p.type.toUpperCase().includes(selectedCategory);
  });

  useEffect(() => {
    setActiveIndex(0);
  }, [selectedCategory]);

  const handleNext = useCallback(() => {
    if (filteredProjects.length === 0) return;
    setActiveIndex((prev) => (prev + 1) % filteredProjects.length);
  }, [filteredProjects.length]);

  const handlePrev = useCallback(() => {
    if (filteredProjects.length === 0) return;
    setActiveIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  }, [filteredProjects.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Autoplaying carousel
  useEffect(() => {
    if (!isPlaying || filteredProjects.length <= 1) return;
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [isPlaying, filteredProjects.length, handleNext]);


  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    setTouchStart(null);
  };

  if (filteredProjects.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center rounded-xl border border-concrete-line bg-concrete-card font-mono text-sm text-stone">
        NO PROJECTS FOUND IN THIS CATEGORY
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-4 py-1.5 font-mono text-xs tracking-wider transition-all duration-300 ${
                isActive
                  ? "bg-gold text-paper font-bold shadow-sm"
                  : "bg-concrete-card text-stone hover:border-concrete-line border border-concrete-line/50 hover:text-paper"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div
        className="relative min-h-[460px] sm:min-h-[520px] w-full overflow-hidden rounded-2xl bg-concrete-card/30 p-4 sm:p-8 border border-concrete-line"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gold/5 blur-[100px] rounded-full pointer-events-none" />

        <div
          className="relative flex items-center justify-center h-[380px] sm:h-[430px] w-full"
          style={{ perspective: "1200px" }}
        >
          {filteredProjects.map((project, index) => {
            const total = filteredProjects.length;
            let offset = index - activeIndex;
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            const isVisible = Math.abs(offset) <= 2;
            const isActive = offset === 0;

            const rotateY = offset * -18;
            const translateX = offset * 210; 
            const translateZ = -Math.abs(offset) * 110 + (isActive ? 60 : 0); 
            const scale = isActive ? 1.05 : Math.max(0.75, 1 - Math.abs(offset) * 0.12);
            const opacity = isActive ? 1 : Math.max(0.4, 1 - Math.abs(offset) * 0.28);
            const zIndex = 30 - Math.abs(offset) * 10;

            const highlight = project.towers
              ? `${project.towers} TOWERS`
              : project.floors
                ? `${project.floors} FLOORS`
                : null;

            return (
              <div
                key={project.slug}
                onClick={() => setActiveIndex(index)}
                className={`absolute w-[280px] sm:w-[320px] rounded-2xl bg-white text-paper shadow-xl transition-all duration-500 ease-out cursor-pointer select-none border border-concrete-line overflow-hidden ${
                  !isVisible ? "pointer-events-none opacity-0" : ""
                }`}
                style={{
                  transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity,
                  zIndex,
                  transformStyle: "preserve-3d",
                }}
              >

                <div className="relative h-44 sm:h-48 w-full bg-concrete-grid border-b border-concrete-line overflow-hidden group">
                  {project.photos[0] ? (
                    <Image
                      src={project.photos[0].url}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="320px"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center font-mono text-xs font-medium text-stone-muted">
                      PHOTO PENDING
                    </div>
                  )}

                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="rounded bg-paper/90 px-2 py-0.5 font-mono text-[10px] font-bold text-white tracking-wider backdrop-blur-sm">
                      {project.status.toUpperCase()}
                    </span>
                    {highlight && (
                      <span className="rounded bg-rust px-2 py-0.5 font-mono text-[10px] font-bold text-white tracking-wider">
                        {highlight}
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-4 sm:p-5 flex flex-col justify-between h-[190px]">
                  <div>
                    <div className="font-mono text-[11px] font-bold tracking-widest text-gold uppercase mb-1">
                      {project.type}
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-paper tracking-tight leading-snug line-clamp-1">
                      {project.name}
                    </h3>
                    <p className="mt-1.5 font-mono text-xs text-stone line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-concrete-line/60 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 font-mono text-[11px] text-stone-muted truncate">
                      <MapPin size={12} className="text-rust shrink-0" />
                      {project.location}
                    </span>

                    {isActive && (
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1 font-mono text-xs font-bold text-gold hover:text-gold-dark transition-colors shrink-0"
                        onClick={(e) => e.stopPropagation()}
                      >
                        VIEW
                        <ExternalLink size={12} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative z-40 mt-2 flex items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={handlePrev}
            aria-label="Previous Project"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-concrete-card text-paper border border-concrete-line transition-all duration-300 hover:bg-concrete-line hover:scale-105 active:scale-95 shadow-md"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex items-center gap-3 rounded-full bg-white border border-concrete-line px-5 py-2 shadow-md">
            <span className="font-mono text-xs tracking-widest text-paper font-bold">
              {activeIndex + 1} - {Math.min(activeIndex + 5, filteredProjects.length)} OF {filteredProjects.length}
            </span>

            {/* Play / Pause button toggler */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              title={isPlaying ? "Pause auto-slide" : "Play auto-slide"}
              className="ml-2 text-stone-muted hover:text-paper transition-colors"
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
            </button>
          </div>

          <button
            onClick={handleNext}
            aria-label="Next Project"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-paper shadow-md transition-all duration-300 hover:bg-gold-dark hover:scale-105 active:scale-95"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
