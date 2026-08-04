import type { Metadata } from "next";
import { existsSync } from "fs";
import path from "path";
import Image from "next/image";
import { Phone } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import TitleBlock from "@/components/ui/TitleBlock";
import MagicBento from "@/components/reactbits/MagicBento";
import {
  COMPANY,
  MISSION,
  VISION,
  DIRECTORS,
} from "@/lib/constants";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export const metadata: Metadata = {
  title: `About us | ${COMPANY.name}`,
  description:
    "A trusted, Nagpur-based civil construction company delivering turnkey builds from foundation to finishing.",
};

export default function AboutPage() {
  return (
    <div className="px-6 py-20 bg-concrete">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="ABOUT US"
          title={`${COMPANY.shortName}, Nagpur`}
          description={`${COMPANY.name} is a trusted and reputed construction company based in Nagpur. We undertake all types of civil construction work from foundation to finishing providing complete turnkey solutions with material.`}
        />

        <p className="mt-6 max-w-2xl text-stone">
          With a team of experienced engineers, skilled supervisors, and
          dedicated laborers, we deliver quality construction, on-time
          completion, and lasting value to our clients.
        </p>

        {/* Mission & Vision */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          <div className="rounded border border-concrete-line bg-concrete-card p-6">
            <h3 className="font-mono text-xs tracking-widest text-gold font-semibold uppercase">
              MISSION
            </h3>
            <p className="mt-3 text-stone leading-relaxed text-sm">{MISSION}</p>
          </div>
          <div className="rounded border border-concrete-line bg-concrete-card p-6">
            <h3 className="font-mono text-xs tracking-widest text-gold font-semibold uppercase">
              VISION
            </h3>
            <p className="mt-3 text-stone leading-relaxed text-sm">{VISION}</p>
          </div>
        </div>

        {/* ReactBits Magic Bento Grid */}
        <div className="mt-16">
          <h3 className="font-mono text-xs tracking-widest text-gold font-semibold uppercase mb-6">
            WHY CHOOSE GOMADHI CONSTRUCTION
          </h3>
          <MagicBento />
        </div>

        {/* Leadership Section */}
        <div className="mt-20">
          <h3 className="font-mono text-xs tracking-widest text-gold font-semibold uppercase mb-6">
            LEADERSHIP
          </h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DIRECTORS.map((director) => {
              const photoExists = existsSync(
                path.join(process.cwd(), "public", director.photo),
              );

              return (
                <div
                  key={director.name}
                  className="rounded-2xl border border-concrete-line bg-concrete-card p-6 transition-all duration-300 hover:border-gold/50 shadow-sm"
                >
                  {photoExists ? (
                    <div className="relative h-16 w-16 overflow-hidden rounded-full border border-concrete-line">
                      <Image
                        src={director.photo}
                        alt={director.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                  ) : (
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold font-display text-lg font-bold text-paper">
                      {getInitials(director.name)}
                    </div>
                  )}
                  <h4 className="mt-4 font-display text-lg font-bold text-paper">
                    {director.name}
                  </h4>
                  <p className="mt-1 text-xs font-semibold text-gold font-mono uppercase tracking-wider">
                    {director.title}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-stone">
                    {director.description}
                  </p>

                  <a
                    href={`tel:+91${director.phone}`}
                    className="mt-4 inline-flex items-center gap-2 text-xs font-mono text-stone hover:text-paper"
                  >
                    <Phone size={14} className="text-gold" />
                    +91 {director.phone}
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16">
          <TitleBlock sheet="02 ABOUT" />
        </div>
      </div>
    </div>
  );
}
