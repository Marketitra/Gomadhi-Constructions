"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface HeroBackgroundProps {
  images: string[];
  intervalMs?: number;
}

export default function HeroBackground({
  images,
  intervalMs = 5000,
}: HeroBackgroundProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [images.length, intervalMs]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-concrete">
      {images.map((src, index) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
          style={{ opacity: index === activeIndex ? 1 : 0 }}
        >
          <div
            className="h-full w-full"
            style={{
              animation:
                index === activeIndex
                  ? `heroKenBurns ${intervalMs + 1500}ms ease-out forwards`
                  : undefined,
            }}
          >
            <Image
              src={src}
              alt="Gomadhi Construction project site"
              fill
              priority={index === 0}
              className="object-cover object-center grayscale-[15%] contrast-105"
            />
          </div>
        </div>
      ))}

      <div className="absolute inset-0 bg-concrete/10 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-r from-concrete/90 from-[10%] via-concrete/45 via-[40%] to-transparent to-[75%]" />
      <div className="absolute inset-0 bg-gradient-to-t from-concrete/25 via-transparent to-transparent" />
    </div>
  );
}
