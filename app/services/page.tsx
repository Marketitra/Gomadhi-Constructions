import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import TitleBlock from "@/components/ui/TitleBlock";
import Button from "@/components/ui/Button";
import ServicesGrid from "@/components/home/ServicesGrid";
import { MATERIAL_BRANDS, COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Services | ${COMPANY.name}`,
  description:
    "Residential, commercial and industrial civil construction, turnkey projects with material supply, in Nagpur.",
};

export default function ServicesPage() {
  return (
    <div className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <ServicesGrid />

        <div className="mt-20">
          <SectionHeading
            eyebrow="TURNKEY PROJECTS"
            title="Material supply included"
            description="We provide complete construction packages no separate vendor coordination on your end."
          />

          <div className="mt-8 overflow-hidden rounded border border-concrete-line">
            {MATERIAL_BRANDS.map((item, index) => (
              <div
                key={item.category}
                className={`flex flex-col justify-between gap-1 px-6 py-4 sm:flex-row sm:items-center ${
                  index !== MATERIAL_BRANDS.length - 1
                    ? "border-b border-concrete-line"
                    : ""
                } bg-concrete-card`}
              >
                <span className="font-mono text-xs uppercase tracking-wide text-stone-muted">
                  {item.category}
                </span>
                <span className="text-paper">{item.brands}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 rounded border border-concrete-line bg-concrete-card p-8">
          <p className="max-w-md text-stone">
            Have a plot and a rough idea of scale? We'll walk through scope and
            give you a transparent quote.
          </p>
          <Button href="/contact" variant="primary">
            Get a quote
          </Button>
        </div>

        <div className="mt-16">
          <TitleBlock sheet="03 SERVICES" />
        </div>
      </div>
    </div>
  );
}
