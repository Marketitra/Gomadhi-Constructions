"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface HeroBackgroundProps {
  unfinishedSrc: string;
  finishedSrc: string;
}

export default function HeroBackground({
  unfinishedSrc,
  finishedSrc,
}: HeroBackgroundProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    function update() {
      const el = sectionRef.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const scrolled = -rect.top;
        const total = rect.height || 1;
        const next = Math.min(Math.max(scrolled / total, 0), 1);
        setProgress(next);
      }
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={sectionRef} className="absolute inset-0 overflow-hidden">
      <Image
        src={unfinishedSrc}
        alt="Construction site, framing stage"
        fill
        priority
        className="object-cover grayscale-[15%] contrast-105"
        style={{ opacity: 1 - progress }}
      />
      <Image
        src={finishedSrc}
        alt="Construction site, further along"
        fill
        className="object-cover grayscale-[15%] contrast-105"
        style={{ opacity: progress }}
      />
      <div className="absolute inset-0 bg-concrete/25 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-r from-concrete from-[15%] via-concrete/75 via-[45%] to-transparent to-[85%]" />
      <div className="absolute inset-0 bg-gradient-to-t from-concrete/40 via-transparent to-transparent" />
    </div>
  );
}
