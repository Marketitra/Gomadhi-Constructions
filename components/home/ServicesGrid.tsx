"use client";

import { useState, useEffect, useRef } from "react";
import {
  Home,
  Building2,
  Warehouse,
  Hammer,
  Route,
  PackageCheck,
  CheckCircle2,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/constants";

const ICONS: Record<string, typeof Home> = {
  residential: Home,
  commercial: Building2,
  industrial: Warehouse,
  renovation: Hammer,
  "civil-works": Route,
  turnkey: PackageCheck,
};

export default function ServicesGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [activeStep, setActiveStep] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const startPoint = windowHeight * 0.75; 
      const totalDist = rect.height + windowHeight * 0.2;
      const currentDist = startPoint - rect.top;

      let progress = currentDist / totalDist;
      progress = Math.max(0, Math.min(1, progress));

      setScrollProgress(progress);

      const currentStepIndex = Math.min(
        SERVICES.length - 1,
        Math.max(0, Math.floor(progress * SERVICES.length))
      );
      setActiveStep(currentStepIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="border-b border-concrete-line px-6 py-20 bg-concrete relative overflow-hidden"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="WHAT WE BUILD"
          title="All types of civil construction work"
          description="From a single bungalow to a five-tower scheme, one contract covers the full build."
        />

        <div className="relative mt-16 pb-6">
          <div className="absolute top-4 bottom-4 left-6 lg:left-1/2 -translate-x-1/2 w-0.5 pointer-events-none z-0">
            <div className="w-full h-full border-r-2 border-dashed border-concrete-line/80" />

            <div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-gold via-rust to-gold transition-all duration-1000 ease-out shadow-sm"
              style={{
                height: `${scrollProgress * 100}%`,
              }}
            />
          </div>

          <div className="space-y-12 lg:space-y-16 relative z-10">
            {SERVICES.map((service, index) => {
              const Icon = ICONS[service.id] ?? Home;
              const isEven = index % 2 === 0;

              const nodeThreshold = index / SERVICES.length;
              const isPassed = scrollProgress >= nodeThreshold;
              const isStepActive = index === activeStep && scrollProgress > 0;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveStep(index)}
                  className="relative flex flex-col lg:flex-row items-center cursor-pointer group"
                >
                  
                  <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-lg font-mono text-xs font-bold transition-colors duration-700 shadow-sm ${
                        isStepActive || isPassed
                          ? "bg-gold text-paper border border-gold"
                          : "bg-white text-stone-muted border border-concrete-line"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <div
                    className={`w-full pl-16 lg:pl-0 lg:w-[calc(50%-3rem)] transition-all duration-700 ${
                      isEven ? "lg:mr-auto lg:pr-4" : "lg:ml-auto lg:pl-4"
                    }`}
                  >
                    <div
                      className={`relative rounded-xl border p-6 bg-concrete-card transition-all duration-700 ${
                        isStepActive
                          ? "border-gold shadow-lg shadow-gold/10"
                          : isPassed
                          ? "border-concrete-line/90 shadow-sm"
                          : "border-concrete-line/60 opacity-85 hover:opacity-100 hover:border-concrete-line"
                      }`}
                    >
                      <div
                        className={`hidden lg:block absolute top-1/2 -translate-y-1/2 h-0.5 border-b border-dashed transition-colors duration-700 ${
                          isEven ? "-right-12 w-12" : "-left-12 w-12"
                        } ${
                          isStepActive || isPassed
                            ? "border-gold"
                            : "border-concrete-line"
                        }`}
                      />

                      <div className="flex items-start gap-4">
                        <div
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${
                            isStepActive
                              ? "bg-gold text-paper shadow-md shadow-gold/20 scale-105"
                              : "bg-gold/10 text-gold group-hover:bg-gold group-hover:text-paper"
                          }`}
                        >
                          <Icon size={20} />
                        </div>

                        <div>
                          <h3 className="font-display text-lg font-bold text-paper group-hover:text-gold transition-colors">
                            {service.title}
                          </h3>
                          <p className="mt-2 text-sm text-stone leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
