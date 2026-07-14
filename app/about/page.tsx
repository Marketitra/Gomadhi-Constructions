import type { Metadata } from "next";
import { Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import TitleBlock from "@/components/ui/TitleBlock";
import { COMPANY, MISSION, VISION, WHY_CHOOSE_US } from "@/lib/constants";

export const metadata: Metadata = {
  title: `About us | ${COMPANY.name}`,
  description:
    "A trusted, Nagpur-based civil construction company delivering turnkey builds from foundation to finishing.",
};

export default function AboutPage() {
  return (
    <div className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
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

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          <div className="rounded border border-concrete-line bg-concrete-card p-6">
            <h3 className="font-mono text-xs tracking-widest text-gold">
              MISSION
            </h3>
            <p className="mt-3 text-stone">{MISSION}</p>
          </div>
          <div className="rounded border border-concrete-line bg-concrete-card p-6">
            <h3 className="font-mono text-xs tracking-widest text-gold">
              VISION
            </h3>
            <p className="mt-3 text-stone">{VISION}</p>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="font-mono text-xs tracking-widest text-gold">
            WHY CHOOSE GOMADHI CONSTRUCTION
          </h3>
          <ul className="mt-4 flex flex-col gap-3">
            {WHY_CHOOSE_US.map((item) => (
              <li key={item} className="flex items-start gap-3 text-paper">
                <Check size={18} className="mt-0.5 shrink-0 text-gold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16">
          <TitleBlock sheet="02 ABOUT" />
        </div>
      </div>
    </div>
  );
}
