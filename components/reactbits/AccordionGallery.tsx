"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface AccordionItem {
  id: string | number;
  title: string;
  subtitle?: string;
  category?: string;
  image: string;
  link?: string;
}

export interface AccordionGalleryProps {
  items: AccordionItem[];
  defaultIndex?: number;
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

export default function AccordionGallery({
  items,
  defaultIndex = 0,
  autoPlay = false,
  interval = 4000,
  className = "",
}: AccordionGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number>(defaultIndex);

  useEffect(() => {
    if (!autoPlay || items.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, items.length]);

  return (
    <div className={`w-full ${className}`}>
      <div className="flex h-[380px] sm:h-[450px] w-full gap-2 sm:gap-3 overflow-hidden rounded-2xl border border-concrete-line/80 bg-concrete-card/40 p-2 sm:p-3 shadow-xl backdrop-blur-sm">
        {items.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={item.id}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              className={`relative h-full overflow-hidden rounded-xl cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                isActive ? "flex-[3.5] sm:flex-[4]" : "flex-1"
              }`}
            >

              <Image
                src={item.image}
                alt={item.title}
                fill
                className={`object-cover transition-transform duration-700 ease-out ${
                  isActive ? "scale-105" : "scale-100 grayscale-[20%]"
                }`}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0}
              />

              {/* Scrim Overlay */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  isActive
                    ? "bg-gradient-to-t from-black/85 via-black/30 to-black/10"
                    : "bg-black/50 hover:bg-black/35"
                }`}
              />

              <div className="absolute top-3 left-3 z-10 flex h-7 w-7 items-center justify-center rounded-lg bg-paper/80 backdrop-blur-md border border-concrete-line/40 text-gold font-mono text-xs font-bold shadow-md">
                0{index + 1}
              </div>

              <div
                className={`absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white z-10 transition-all duration-500 ${
                  isActive
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div>
                    {item.category && (
                      <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-gold font-semibold">
                        {item.category}
                      </span>
                    )}
                    <h3 className="font-display text-lg sm:text-2xl font-bold leading-tight text-white mt-0.5">
                      {item.title}
                    </h3>
                    {item.subtitle && (
                      <p className="text-xs sm:text-sm text-stone-muted mt-1 line-clamp-1">
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                  {item.link && (
                    <Link
                      href={item.link}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-paper transition-transform duration-300 hover:scale-110 shrink-0"
                      aria-label={`View ${item.title}`}
                    >
                      <ArrowUpRight size={18} />
                    </Link>
                  )}
                </div>
              </div>

              {!isActive && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden sm:block whitespace-nowrap [writing-mode:vertical-lr] rotate-180 font-mono text-xs uppercase tracking-widest text-stone-muted opacity-80 font-medium">
                  {item.title}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
